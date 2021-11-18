import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import * as RepositoryActions from '../repository/repository.actions';
import { IAppState, initialAppState } from './app.model';

export const appReducer = createReducer<IAppState>(
  initialAppState,
  on(AppActions.setLoadingState, (state, { isLoading }) => ({
    ...state,
    isLoading
  })),
  on(RepositoryActions.loadRepositoriesByQuery, RepositoryActions.paginate, RepositoryActions.updateLanguageFilter, (state) => ({
    ...state,
    isLoading: true
  })),
  on(RepositoryActions.loadRepositoriesByQuerySuccess, (state) => ({
    ...state,
    isLoading: false
  })),

);
