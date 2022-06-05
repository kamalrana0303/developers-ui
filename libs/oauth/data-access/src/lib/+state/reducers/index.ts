import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCode from "./codes.reducer"
import * as fromPage from "./user-info-page.reducer";
export const AUTH_FEATURE='auth'

export interface State{
    auth: fromCode.State;
    page: fromPage.State;
}

export const reducers: ActionReducerMap<State>={
    "auth": fromCode.reducer,
    "page": fromPage.reducer
}

const environment= {production: false}


export const metaReducers: MetaReducer<State>[] = environment.production
  ? []
  : [];

export const selectCodeState= createFeatureSelector<fromCode.State>("auth");
export const   selectToken= createSelector( selectCodeState,  (state) => state.token);
export const selectPKCE= createSelector(selectCodeState, (state)=> state.pkce);
export const selectUserInfoPageState= createFeatureSelector<fromPage.State>("page");
export const   selectUserInfoPageError= createSelector( selectUserInfoPageState,  (state) => state.error);
export const selectUserInfoPagePending= createSelector(selectUserInfoPageState, (state)=> state.pending );