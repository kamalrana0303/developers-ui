import { Account } from "@developers/models";
import { Action, createReducer, on } from "@ngrx/store";
import { changeSelectedTabIndex, onSuccess } from "./account.action";

export interface AccountState {
    account: Account |null,
    selectedTabIndex: number
}

export const initialState: AccountState = {
    account: null, 
    selectedTabIndex: 0
}

const accountReducer = createReducer(
    initialState,
    on(onSuccess, (state, {account})=> {
        return ({...state,account})
    }),
    on(changeSelectedTabIndex, (state,{selectedTabIndex})=>{ return ({...state,selectedTabIndex})})
)

export function reducer(state: AccountState | undefined , action: Action){
    return accountReducer(state, action);
}