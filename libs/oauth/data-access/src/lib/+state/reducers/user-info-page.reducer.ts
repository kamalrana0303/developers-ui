import { Action, createReducer, on } from "@ngrx/store";
import * as CodeActions from "../codes.actions";
export interface State {
    error: boolean;
    pending: boolean;    
}        

export const initialState:any={ pending: false, error: null}


const codeReducer= createReducer(
    initialState,
    on(CodeActions.init, (state: any, {code})=> ({pending:true, error:null})),
    on(CodeActions.loadTokenFromAPISuccess, (state:any, { token })=> ({pending:false, error:null})),
    on(CodeActions.loadCodesFailure, (state:any, {error})=> ({
        ...state,
        error
    }))
);

export function reducer(state: State | undefined, action : Action){
    return codeReducer(state, action);
}