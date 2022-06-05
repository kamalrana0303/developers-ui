import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import * as bucketReducer from "./bucket.reducer";

export interface State{
    oauth: bucketReducer.State
}

export const reducers: ActionReducerMap<State>= {
    oauth: bucketReducer.reducer
}

const environment= {production: false}

export const metaReducers : MetaReducer<State> []= environment.production?[]: []

export const selectOauth= createFeatureSelector<bucketReducer.State>("oauth");
export const selectCode= createSelector(selectOauth, (state)=> state.code);
export const selectError=createSelector(selectOauth,(state)=> state.error);