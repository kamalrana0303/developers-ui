import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import * as profile from "./profiles.reducer";
export const FEATURE = "profile"
export interface State {
    profileInfo: profile.State
}
export const reducers : ActionReducerMap<State> = {
    profileInfo: profile.reducer
}

const environment= {production: false}

export const metaReducers : MetaReducer<State> []= environment.production?[]: []

export const selectFeature= createFeatureSelector<State>(FEATURE);
export const selectProfileInfo= createSelector(selectFeature, (state)=> {
    
    return state.profileInfo;
});
export const selectProfile= createSelector(selectProfileInfo, (state)=>{ 
    
    return state.profile});