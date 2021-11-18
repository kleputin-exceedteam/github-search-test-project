import { createSelector, createFeatureSelector } from '@ngrx/store';
import { appStateKey, IAppState } from './app.model';

export const selectAppState = createFeatureSelector<IAppState>(appStateKey);

export const selectLoadingState = createSelector(
  selectAppState,
  (appState) => {
    return appState.isLoading;
  }
);
