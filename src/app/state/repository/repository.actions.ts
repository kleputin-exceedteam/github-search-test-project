import { createAction, props } from '@ngrx/store';

export const setRepositories = createAction('[Repository] Set repositories', props<{ repositories: any[] }>());
export const loadRepositoriesByQuery = createAction('[Repository] Load repositories by query', props<{ query: string }>());
