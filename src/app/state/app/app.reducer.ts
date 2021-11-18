import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import * as RepositoryActions from '../repository/repository.actions';
import { IAppState, initialAppState } from './app.model';
import { updatePaginator } from "../repository/repository.actions";

export const appReducer = createReducer<IAppState>(
  initialAppState,
  on(AppActions.setLoadingState, (state, { isLoading }) => ({
    ...state,
    isLoading
  })),
  on(RepositoryActions.loadRepositoriesByQuery, updatePaginator, (state) => ({
    ...state,
    isLoading: true
  })),
  on(RepositoryActions.loadRepositoriesByQuerySuccess, (state) => ({
    ...state,
    isLoading: false
  })),

);
