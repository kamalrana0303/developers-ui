import { createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import { accountReducer } from "@developers/account/data-access"
import { ActionReducerMap } from "@ngrx/store"
import { reducer } from "./account.reducer";

export interface State{
    _state: accountReducer.AccountState
}

export const reducers: ActionReducerMap<State> = {
    _state :  reducer
}

export const FEATURE_ACCOUNT = "feature_account"
const environment= {production: false}
export const metaReducers : MetaReducer<State> []= environment.production?[]: []
export const selectFeature= createFeatureSelector<State>(FEATURE_ACCOUNT);
export const selectAccountState= createSelector(selectFeature, (state)=> state?._state);
export const selectAccount= createSelector(selectAccountState, (state)=> state?.account);