import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
    TOKEN_FEATURE_KEY,
    State,
    TokenPartialState
} from '@developers/auth/data-access'

export const getTokenState= createFeatureSelector<TokenPartialState, State>(
    TOKEN_FEATURE_KEY
);

export const getTokenLoaded= createSelector(
    getTokenState,
    (state: State)=> state.loaded
);

export const getTokenError= createSelector(
    getTokenState,
    (state: State)=>  state.error
);

export const getToken:any= createSelector(
    getTokenState,
    (state:State)=>state.token
);