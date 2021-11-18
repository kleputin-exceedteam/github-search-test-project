import { createAction, props } from '@ngrx/store';

export const setLoadingState = createAction('[App] Set loading state', props<{ isLoading: boolean; }>());
