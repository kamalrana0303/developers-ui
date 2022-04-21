import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "../auth.actions";
export const LOGIN_PAGE_KEY='loginPage'

export interface State {
   pending: boolean;
   error: string | null;
}

export interface TokenPartialState{
    readonly [LOGIN_PAGE_KEY]: State;
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

export const selectError= (state: State) => state.error
export const selectPending = (state:State) => state.pending

// export function update<T>(state: T, ...changes: Partial<T>[]): T{
//     return changes.reduce((currentState: any, stateChange: any)=>({
//         ...currentState, ...stateChange
//     }), state);
// }

// export function reducer(state=initialState, action: AuthActions):State{
//     switch(action.type){
//         case AuthActionTypes.Login:{
//             return update(state, {pending: true})
//         }
//         case AuthActionTypes.LoginSuccess:{
//             return initialState;
//         }
//         case AuthActionTypes.LoginFailure:{
//             return update(state, {error:action.payload})
//         }
//         default:{
//             return state;
//         }
//     }
// }

// export const selectPending= (state:State)=> state.pending;

// export const selectError=(state: State)=> state.error;