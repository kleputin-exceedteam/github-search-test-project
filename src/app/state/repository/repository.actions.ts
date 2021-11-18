import { createAction, props } from '@ngrx/store';
import { IRepository } from "./repository.model";

export const loadRepositoriesByQuerySuccess = createAction('[Repository] Load repositories successfully', props<{ repositories: IRepository[], total_count: number }>());
export const loadRepositoriesByQuery = createAction('[Repository] Load repositories by query', props<{ query: string }>());
export const updatePaginator = createAction('[Paginator] Update paginator state', props<{ itemsPerPage: number; currentPageIndex: number}>());
