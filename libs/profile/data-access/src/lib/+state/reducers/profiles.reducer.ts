import { Error, Profile } from '@developers/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, ActionReducerMap } from '@ngrx/store';
import * as ProfilesActions from '../profiles.actions';

export interface State {
  profile: Profile | null,
  error: Error<{error:string}> | null
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
  on(ProfilesActions.loadProfilesSuccess, (state, { profile }) => {

    return ( {...state, profile}) }),
  on(ProfilesActions.profilesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return profilesReducer(state, action);
}
