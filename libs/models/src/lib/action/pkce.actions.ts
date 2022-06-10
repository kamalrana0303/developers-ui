import { createAction, props } from '@ngrx/store';

export const loadPKCE = createAction(
  '[PKCE] Load PKCE'
);

export const loadPKCESuccess= createAction(
  '[PKCE] Success PKCE'
)
export const loadPKCEFailure= createAction(
  '[PKCE] Failure PKCE'
)




