import { createAction, props } from '@ngrx/store';
import { ProfilesEntity } from './profiles.models';

export const init = createAction('[Profiles Page] Init');

export const loadProfilesSuccess = createAction(
  '[Profiles/API] Load Profiles Success',
  props<{ profiles: ProfilesEntity[] }>()
);

export const loadProfilesFailure = createAction(
  '[Profiles/API] Load Profiles Failure',
  props<{ error: any }>()
);
