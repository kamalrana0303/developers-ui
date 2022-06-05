import { createAction, props } from '@ngrx/store';

export const initLogin = createAction(
  '[Login] Init Login'
);

export const loginSuccess= createAction(
  '[Login] Success Login'
)

export const loginFailure= createAction(
  '[Login] Failure Login'
)

export const redirectToAuthServerLoginPage=createAction(
  '[Auth Server] Redirect Auth Server Login Page'
)




