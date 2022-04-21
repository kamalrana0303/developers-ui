import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProfilesActions from './profiles.actions';
import { ProfilesEntity } from './profiles.models';

export const PROFILES_FEATURE_KEY = 'profiles';

export interface State extends EntityState<ProfilesEntity> {
  selectedId?: string | number; // which Profiles record has been selected
  loaded: boolean; // has the Profiles list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProfilesPartialState {
  readonly [PROFILES_FEATURE_KEY]: State;
}

export const profilesAdapter: EntityAdapter<ProfilesEntity> =
  createEntityAdapter<ProfilesEntity>();

export const initialState: State = profilesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const profilesReducer = createReducer(
  initialState,
  on(ProfilesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProfilesActions.loadProfilesSuccess, (state, { profiles }) =>
    profilesAdapter.setAll(profiles, { ...state, loaded: true })
  ),
  on(ProfilesActions.loadProfilesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return profilesReducer(state, action);
}
