import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { IAppState, initialAppState } from './app.model';

export const appReducer = createReducer<IAppState>(
  initialAppState,
  on(AppActions.setLoadingState, (state, { isLoading }) => ({
    ...state,
    isLoading
  })),
);
