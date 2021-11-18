export const repositoryStateKey = 'repository';

export interface IRepository {
  full_name: string;
  description: string;
  watchers_count: number;
  forks_count: number;
  stargazers_count: number;
  topics: string[];
}

export interface IRepositoryState {
  selectedRepository?: any;
  repositories: any;
  paginator: {
    count: number;
    itemsPerPage: number;
    currentPageIndex: number;
  },
  allowedLanguages: string[],
  query?: string;
}

export const initialRepositoryState: IRepositoryState = {
  paginator: {
    currentPageIndex: 0,
    count: 0,
    itemsPerPage: 10
  },
  allowedLanguages: [],
  repositories: [],
};
