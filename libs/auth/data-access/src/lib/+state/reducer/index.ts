import * as fromAuth from './auth.reducer';
import * as fromAuthPage from './auth-page.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

export const AUTH_FEATURE='auth'

export interface State{
    auth: fromAuth.State,
    authPage: fromAuthPage.State
}

export const reducers: ActionReducerMap<State>={
    auth: fromAuth.reducer,
    authPage: fromAuthPage.reducer
}

const environment= {production: false}

export const metaReducers: MetaReducer<State>[] = environment.production
  ? []
  : [];

export const selectAuthState= createFeatureSelector<fromAuth.State>(fromAuth.TOKEN_FEATURE_KEY);
export const   selectToken= createSelector( selectAuthState,  fromAuth.selectToken);

export const selectAuthPageState= createFeatureSelector<fromAuthPage.State> (fromAuthPage.LOGIN_PAGE_KEY);
export const selectError= createSelector(selectAuthPageState, fromAuthPage.selectError);
export const selectPending= createSelector(selectAuthPageState, fromAuthPage.selectPending);