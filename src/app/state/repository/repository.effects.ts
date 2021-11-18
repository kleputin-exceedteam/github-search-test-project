import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { map, mergeMap, catchError, debounceTime, withLatestFrom, tap } from 'rxjs/operators';
import * as RepositoryActions from './repository.actions';
import { RepositoryApiService } from '../../api/repository-api.service';
import { selectedRepository, selectRepositoryState } from './repository.selectors';
import { routerPaths } from '../../app-routing.module';

@Injectable()
export class RepositoryEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly repositoryApiService: RepositoryApiService,
    private readonly store$: Store,
    private readonly router: Router
  ) {}

  loadRepositories$ = createEffect(() => this.actions$.pipe(
      ofType(RepositoryActions.loadRepositoriesByQuery, RepositoryActions.paginate, RepositoryActions.updateLanguageFilter),
      withLatestFrom(this.store$.select(selectRepositoryState)),
      debounceTime(1000),
      mergeMap(([_, repositoryState]) => {
        if (!repositoryState.query) {
          return EMPTY;
        }
        const paginator = repositoryState.paginator;
        return this.repositoryApiService.getRepositoriesByQuery(repositoryState.query, paginator.itemsPerPage, paginator.currentPageIndex, repositoryState.allowedLanguages)
          .pipe(
            map(response => RepositoryActions.loadRepositoriesByQuerySuccess({ repositories: response.items, total_count: response.total_count })),
            catchError(() => EMPTY)
          )
      })
    )
  );

  loadRepositoryDetails$ = createEffect(() => this.actions$.pipe(
    ofType(RepositoryActions.loadRepositoryDetails),
    withLatestFrom(this.store$.select(selectedRepository)),
    tap(([_, repositoryName]) => {
      if (repositoryName) {
        return;
      }
      this.router.navigate([routerPaths.main]);
    }),
    mergeMap(([_, repositoryName]) => this.repositoryApiService.getRepositoryDetails(repositoryName).pipe(
      map(repositoryDetails => RepositoryActions.loadRepositoryDetailsSuccess({ repository: repositoryDetails })),
      catchError(() => EMPTY)
    ))
  ))
}
