import { IAppState, appStateKey } from './app/app.model';
import { ActionReducerMap } from '@ngrx/store';
import { appReducer } from './app/app.reducer';
import { IRepositoryState, repositoryStateKey } from './repository/repository.model';
import { repositoryReducer } from './repository/repository.reducer';

export interface IState {
  readonly [appStateKey]: IAppState;
  readonly [repositoryStateKey]: IRepositoryState;
}

export const reducers: ActionReducerMap<IState> = {
  app: appReducer,
  repository: repositoryReducer
}
