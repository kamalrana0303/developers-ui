import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "../auth.actions";

export const LOGIN_PAGE_KEY='loginPage'

export interface State {
   pending: boolean;
   error: string | null;
}
              
export const initialState:any={ pending: false, error: null}

const tokenReducer= createReducer(
    initialState,
    on(AuthActions.login, (state: any, {authenticate})=> ({pending:true, error:null})),
    on(AuthActions.loginSuccess, (state:any, { token })=> ({pending:false, error:null})),
    on(AuthActions.loginFailure, (state:any, {error})=> ({
        ...state,
        error
    }))
);

export function reducer(state: State | undefined, action : Action){
    return tokenReducer(state, action);
}