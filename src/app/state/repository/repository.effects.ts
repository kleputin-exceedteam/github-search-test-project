import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RepositoryActions from './repository.actions';
import { RepositoryApiService } from "../../api/repository-api.service";

@Injectable()
export class RepositoryEffects {

  constructor(
    private actions$: Actions,
    private repositoryApiService: RepositoryApiService
  ) {}

  loadRepository$ = createEffect(() => this.actions$.pipe(
      ofType(RepositoryActions.loadRepositoriesByQuery),
      mergeMap((action) => this.repositoryApiService.getRepositoriesByQuery(action.query)
        .pipe(
          map(repositories => RepositoryActions.setRepositories({ repositories })),
          catchError(() => EMPTY)
        ))
    )
  );
}
