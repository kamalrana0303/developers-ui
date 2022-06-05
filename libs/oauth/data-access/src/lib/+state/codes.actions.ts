import { createAction, props } from '@ngrx/store';
import { PKCE, Token } from './codes.models';

export const init = createAction('[Codes Page] Init', props<{code: any}> ());

export const loadPKCE= createAction('[Codes Page] Load PKCE');

export const loadTokenFromSessionSuccess= createAction('[Load Token From Session', props<{token: Token}>());

export const loadPKCESuccess= createAction('[Codes Page] Load PKCE Success' , props<{pkce: PKCE}>() )

export const loadTokenFromAPISuccess = createAction(
  '[Codes/API] Load Token Success',
  props<{ token: Token }>()
);

export const loadCodesFailure = createAction(
  '[Codes/API] Load Token Failure',
  props<{ error: any }>()
);