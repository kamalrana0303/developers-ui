import { Account } from "@developers/models";
import { Action, createReducer, on } from "@ngrx/store";
import { onSuccess } from "./account.action";

export interface AccountState {
    account: Account |null
}

export const initialState: AccountState = {
    account: null
}

const accountReducer = createReducer(
    initialState,
    on(onSuccess, (state, {account})=> {
        return ({state, account})
    })
)

export function reducer(state: AccountState | undefined , action: Action){
    return accountReducer(state, action);
}