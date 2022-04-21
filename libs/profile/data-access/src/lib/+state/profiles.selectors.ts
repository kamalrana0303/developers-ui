import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROFILES_FEATURE_KEY,
  State,
  profilesAdapter,
} from './profiles.reducer';

// Lookup the 'Profiles' feature state managed by NgRx
export const getProfilesState =
  createFeatureSelector<State>(PROFILES_FEATURE_KEY);

const { selectAll, selectEntities } = profilesAdapter.getSelectors();

export const getProfilesLoaded = createSelector(
  getProfilesState,
  (state: State) => state.loaded
);

export const getProfilesError = createSelector(
  getProfilesState,
  (state: State) => state.error
);

export const getAllProfiles = createSelector(getProfilesState, (state: State) =>
  selectAll(state)
);

export const getProfilesEntities = createSelector(
  getProfilesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProfilesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getProfilesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
