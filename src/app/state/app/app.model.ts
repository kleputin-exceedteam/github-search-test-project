export const appStateKey = 'app';

export interface IAppState {
  isLoading: boolean;
  repositories: any[];
}

export const initialAppState: IAppState = {
  isLoading: false,
  repositories: []
};
