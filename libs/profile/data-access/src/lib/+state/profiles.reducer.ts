import { Error, Profile } from '@developers/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProfilesActions from './profiles.actions';
import { ProfilesEntity } from './profiles.models';

export const PROFILES_FEATURE_KEY = 'profiles';

export interface State {
  profile: Profile | null,
  error: Error<{error:string}> | null
}

export interface ProfilesPartialState {
  readonly [PROFILES_FEATURE_KEY]: State;
}



export const initialState: State = {
  profile: null,
  error: null
}

const profilesReducer = createReducer(
  initialState,
  on(ProfilesActions.init, (state) => ({
    ...state
  })),
  on(ProfilesActions.loadProfilesSuccess, (state, { profile }) => ( {...state, profile}) ),
  on(ProfilesActions.loadProfilesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return profilesReducer(state, action);
}
