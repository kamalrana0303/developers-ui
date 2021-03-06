import { Error, Profile } from '@developers/models';
import { createAction, props } from '@ngrx/store';
import { ProfilesEntity } from './profiles.models';

export const init = createAction('[Profiles Page] Init',
  props<{profileId:string}> ()
);

export const loadProfilesSuccess = createAction(
  '[Profiles/API] Load Profiles Success',
  props<{ profile: Profile }>()
);

export const renameProfile= createAction(
  '[Profiles/API] Attempt Rename',
  props<{profileId:any,firstName: string,lastName:string}>()
)

export const updateDob = createAction(
  '[Profiles/API] Update DOB',
  props<{profileId: string, dob: any}>()
)

export const updateGender = createAction(
  '[Profiles/API] Update Gender',
  props<{profileId:string, gender: any}>()
)

export const profilesFailure = createAction(
  '[Profiles/API] Load Profiles Failure',
  props<Error<any>>()
);

