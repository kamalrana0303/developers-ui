import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import * as bucketReducer from "./bucket.reducer";
import * as loginReducer from "./login.reducer";
import * as tokenReducer from './token.reducer';
import * as progressBar from '../../../../../../libs/progress-bar/src/lib/progress-bar/store/progress.reducer';
export interface State{
    oauth: bucketReducer.State;
    status: loginReducer.State;
    token: tokenReducer.State;
}

export const reducers: ActionReducerMap<State>= {
    oauth: bucketReducer.reducer,
    status:  loginReducer.reducer,
    token: tokenReducer.reducer,
}

const environment= {production: false}

export const metaReducers : MetaReducer<State> []= environment.production?[]: []

export const selectOauth= createFeatureSelector<bucketReducer.State>("oauth");
export const selectCode= createSelector(selectOauth, (state)=> state.code);
export const selectError=createSelector(selectOauth,(state)=> state.error);
export const selectStatus= createFeatureSelector<loginReducer.State>("status");
export const selectLoggedInStatus= createSelector(selectStatus, (state)=> state.loggedIn);
export const selectTokenFeature= createFeatureSelector<tokenReducer.State>("token");
export const selectTokenError  = createSelector(selectTokenFeature, (state)=>state.error);

