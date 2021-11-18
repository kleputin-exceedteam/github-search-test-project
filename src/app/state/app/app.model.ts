export const appStateKey = 'app';

export interface IAppState {
  isLoading: boolean;
}

export const initialAppState: IAppState = {
  isLoading: false,
};
