import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AuthServiceItf } from '@developers/models';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { ProfileService } from '../profile.service';

import * as ProfilesActions from './profiles.actions';
import * as ProfilesFeature from './profiles.reducer';


@Injectable()
export class ProfilesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfilesActions.init),
      fetch({
        run: (action) => {
      
          return this.profileService.getUserProfile().pipe(map(res=> {
          
            return ProfilesActions.loadProfilesSuccess({profile: res.body});
          }))
        },
        onError: (action, error) => {
          
          return ProfilesActions.loadProfilesFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private profileService: ProfileService) {}
}
