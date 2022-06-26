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

export const selectProfileInfo= createSelector(selectFeature, (state)=> state.profileInfo);

export const selectProfile= createSelector(selectProfileInfo, (state)=>state.profile);

export const selectCpId= createSelector(selectProfile, (state)=>state?.profileId);

export const selectProfileName= createSelector(selectProfile, (state)=> state?.name)

export const selectFirstName = createSelector(selectProfileName, (state)=> state?.firstName);
export const selectLastName = createSelector(selectProfileName, (state)=> state?.lastName);
export const selectDisplayName = createSelector(selectProfileName, (state)=> state?.displayName);
export const selectNickName= createSelector(selectProfileName,(state)=> state?.nickName);
export const selectAddress =createSelector(selectProfile, (state)=> state?.address);
export const selectProfileBillingAddresses= createSelector(selectAddress, (state)=> state?.billingAddresses);

export const selectProfileShippingAddresses= createSelector(selectAddress, (state)=> state?.shippingAddresses);

export const selectProfileDOB= createSelector(selectProfile, (state)=> state?.dob);


export const selectProfileGender= createSelector(selectProfile,(state)=> state?.gender);