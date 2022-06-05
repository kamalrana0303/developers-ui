import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROFILES_FEATURE_KEY,
  State
} from './profiles.reducer';

// Lookup the 'Profiles' feature state managed by NgRx
export const getProfilesState =
  createFeatureSelector<State>(PROFILES_FEATURE_KEY);

export const getProfile = createSelector(
  getProfilesState,
  (state: State) => state.profile
);

export const getError = createSelector(
  getProfilesState,
  (state: State) => state.error
);
