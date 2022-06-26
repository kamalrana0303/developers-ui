import { createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import { accountReducer } from "@developers/account/data-access"
import { ActionReducerMap } from "@ngrx/store"

export interface State{
    accountInfo: accountReducer.AccountState
}
export const reducers: ActionReducerMap<State> = {
    accountInfo :  accountReducer?.reducer
}

export const FEATURE_ACCOUNT = "feature_account"
const environment= {production: false}

export const metaReducers : MetaReducer<State> []= environment.production?[]: []

export const selectFeature= createFeatureSelector<State>(FEATURE_ACCOUNT);
export const selectAccountInfo= createSelector(selectFeature, (state)=> state.accountInfo);
export const selectAccount= createSelector(selectAccountInfo, (state)=> state.account);