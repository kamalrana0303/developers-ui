import { Error } from "@developers/models";
import { Action, createReducer, on, StateObservable } from "@ngrx/store";
import { tokenAction } from "../action";

export interface State {
    error: Error<any> | null
}

export const initialState: State = {
    error: null
}

export const appDataReducer = createReducer(
    initialState,
    on(tokenAction.tokenError, ( state, error)=> ({...state,  ...error}))
)

export function reducer(state: State | undefined, action: Action){
    return appDataReducer(state, action);
}