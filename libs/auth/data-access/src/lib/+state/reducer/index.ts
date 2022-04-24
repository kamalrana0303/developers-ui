import * as fromAuth from './auth.reducer';
import * as fromAuthPage from './auth-page.reducer';
import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

export const AUTH_FEATURE='auth'

export interface State{
    authToken: fromAuth.State;
    loginPage: fromAuthPage.State;
}

export const reducers: ActionReducerMap<State>={
    "authToken": fromAuth.reducer,
    "loginPage": fromAuthPage.reducer
}

const environment= {production: false}

export const metaReducers: MetaReducer<State>[] = environment.production
  ? []
  : [];

export const selectAuthState= createFeatureSelector<fromAuth.State>("authToken");
export const   selectToken= createSelector( selectAuthState,  (state) => state.token);
export const selectAuthPageState= createFeatureSelector<fromAuthPage.State> ("loginPage");
export const selectError= createSelector(selectAuthPageState, (state)=> state?state.error:null);
export const selectPending= createSelector(selectAuthPageState, (state)=> { return state?.pending});