import { createReducer, on } from '@ngrx/store';
import * as RepositoryActions from './repository.actions';
import { initialRepositoryState, IRepositoryState } from './repository.model';

export const repositoryReducer = createReducer<IRepositoryState>(
  initialRepositoryState,
  on(RepositoryActions.loadRepositoriesByQuery, (state, { query }) => ({
    ...state,
      query
  })),
  on(RepositoryActions.loadRepositoriesByQuerySuccess, (state, { repositories, total_count }) => ({
    ...state,
    paginator: {
      ...state.paginator,
      count: total_count
    },
    repositories
  })),
  on(RepositoryActions.updatePaginator, (state, { currentPageIndex, itemsPerPage }) => ({
    ...state,
    paginator: {
      ...state.paginator,
      currentPageIndex,
      itemsPerPage
    },
  })),
)
