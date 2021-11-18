export const repositoryStateKey = 'repository';

export interface IRepositoryState {
  selectedRepository?: any;
  repositories: any[];
}

export const initialRepositoryState: IRepositoryState = {
  repositories: [],
};
