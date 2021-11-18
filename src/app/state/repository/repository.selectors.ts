import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IRepositoryState, repositoryStateKey } from './repository.model';

export const selectRepositoryState = createFeatureSelector<IRepositoryState>(repositoryStateKey);

export const selectRepositoriesCount = createSelector(
  selectRepositoryState,
  (repositoryState) => {
    return repositoryState.paginator.count;
  }
);

export const itemsPerPage = createSelector(
  selectRepositoryState,
  (repositoryState) => {
    return repositoryState.paginator.itemsPerPage;
  }
);
