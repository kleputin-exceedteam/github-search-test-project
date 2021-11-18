import { createAction, props } from '@ngrx/store';
import { IRepository, IRepositoryDetail } from './repository.model';

export const loadRepositoriesByQuerySuccess = createAction('[Repository] Load repositories successfully', props<{ repositories: IRepository[], total_count: number }>());
export const loadRepositoriesByQuery = createAction('[Repository] Load repositories by query', props<{ query: string }>());
export const setSelectedRepository = createAction('[Repository] Set selected repository', props<{ name: string }>());
export const loadRepositoryDetails = createAction('[Repository] Load repository details');
export const loadRepositoryDetailsSuccess = createAction('[Repository] Load repository details successfully', props<{ repository: IRepositoryDetail }>());

export const paginate = createAction('[Paginator] Paginate', props<{ itemsPerPage: number; currentPageIndex: number}>());

export const updateLanguageFilter = createAction('[Filter] Update language filter', props<{ allowedLanguages: string[] }>());
