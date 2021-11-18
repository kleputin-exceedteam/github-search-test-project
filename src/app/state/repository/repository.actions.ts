import { createAction, props } from '@ngrx/store';

export const setRepositories = createAction('[Repository] Set repositories', props<{ repositories: any[] }>());
