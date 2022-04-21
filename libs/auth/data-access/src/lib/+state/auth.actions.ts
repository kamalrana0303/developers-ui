import { createAction, props} from '@ngrx/store';
import { Authenticate } from '../authentication.model';
import { Token } from '../token.model';

export const login= createAction(
    '[Login Page] Login',
    props<{authenticate: Authenticate}>());

export const loginSuccess= createAction(
    '[Auth Api] Login Success',
    props<{token: Token}>());

export const loginFailure= createAction(
    '[Auth Api] Login Failure',
    props<{error: any}>()
)

export const logOut= createAction(
    '[Auth] Confirm Logout'
)

export const logOutConfirmed=createAction(
    '[Auth] Logout Confirmed'
)

export const logOutComplete=createAction(
    '[Auth] Logout Complete'
)

// export enum AuthActionTypes{
//     Login='[Login Page] Login',
//     LoginSuccess='[Auth API] Login Success',
//     LoginFailure='[Auth API] Login Failure', 
//     Logout='[Auth] Confirm Logout',
//     LogoutConfirmed='[Auth] Logout Confirmed', 
//     LogoutComplete='[Auth API] Logout Complete',
// }

// export class Login implements Action{
//     readonly type= AuthActionTypes. Login;
//     constructor(public payload: Authenticate){}
// }

// export class LoginSuccess implements Action{
//     readonly type= AuthActionTypes.LoginSuccess
//     constructor(public payload: {token: Token}){}
// }

// export class LoginFailure implements Action{
//     readonly type= AuthActionTypes.LoginFailure;
//     constructor(public payload: any){}
// }

// export class Logout implements Action{
//     readonly type= AuthActionTypes.Logout;
// }

// export class LogoutConfirmed implements Action{
//     readonly type= AuthActionTypes.LogoutConfirmed;
// }
// export class LogoutComplete implements Action{
//     readonly type= AuthActionTypes.LogoutComplete;
// }

// export type AuthActions=
//     | Login
//     | LoginSuccess
//     | LoginFailure
//     | Logout
//     | LogoutConfirmed
//     | LogoutComplete;