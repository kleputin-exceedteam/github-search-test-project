import { createReducer, on } from '@ngrx/store';
import * as RepositoryActions from './repository.actions';
import { initialRepositoryState, IRepositoryState } from './repository.model';

export const repositoryReducer = createReducer<IRepositoryState>(
  initialRepositoryState,
  on(RepositoryActions.setRepositories, (state, { repositories }) => ({
    ...state,
    repositories
  })),
)
