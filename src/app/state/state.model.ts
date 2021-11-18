import { IAppState, appStateKey } from './app/app.model';
import { ActionReducerMap } from '@ngrx/store';
import { appReducer } from './app/app.reducer';

export interface IState {
  readonly [appStateKey]: IAppState;
}

export const reducers: ActionReducerMap<IState> = {
  app: appReducer
}
