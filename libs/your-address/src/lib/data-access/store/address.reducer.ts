import { Address } from "@developers/models";
import { Action, createReducer, on } from "@ngrx/store";
import * as addressAction from "./address.action";

export interface State {
    address: Address
}
export const initialState = {
    address: {}
}
export const addressReducer = createReducer(
    initialState, 
    on(addressAction.onSuccess, (state, action)=> {
        return {...state, ...action}
    })
)
export function reducer (state: State | undefined, action: Action){
    return addressReducer(state, action);
}