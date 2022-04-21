import { TokenEntity } from "../auth.models";
import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "../auth.actions";
import { state } from "@angular/animations";
export const TOKEN_FEATURE_KEY='token'

export interface State {
    token?: TokenEntity | null
}

export interface TokenPartialState{
    readonly [TOKEN_FEATURE_KEY]: State;
}                

export const initialState:any={ token: null}

const tokenReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state:any, {token})=> ({...state, token})),
    on(AuthActions.logOutConfirmed, ()=> ({...initialState}))
);

export function reducer(state: State | undefined, action : Action){
    return tokenReducer(state, action);
}

export const selectToken = (state:State) => state.token

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