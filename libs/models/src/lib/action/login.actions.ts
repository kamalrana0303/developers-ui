import { createAction, props } from '@ngrx/store';

export const initLogin = createAction(
  '[Login] Init Login'
);

export const checkToken= createAction(
  '[Login] Check Token'
)

export const loginStatus= createAction(
  '[Login] Status',
  props<{loggedIn: boolean}> ()
)

export const loginSuccess= createAction(
  '[Login] Success Login'
)



export const loginFailure= createAction(
  '[Login] Failure Login'
)

export const redirectToAuthServerLoginPage=createAction(
  '[Auth Server] Redirect Auth Server Login Page'
)