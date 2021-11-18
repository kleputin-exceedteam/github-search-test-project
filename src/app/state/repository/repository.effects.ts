import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, debounceTime, withLatestFrom } from 'rxjs/operators';
import * as RepositoryActions from './repository.actions';
import { RepositoryApiService } from '../../api/repository-api.service';
import { selectRepositoryState } from './repository.selectors';

@Injectable()
export class RepositoryEffects {

  constructor(
    private actions$: Actions,
    private repositoryApiService: RepositoryApiService,
    private readonly store$: Store
  ) {}

  loadRepository$ = createEffect(() => this.actions$.pipe(
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
}
