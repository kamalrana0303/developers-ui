import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AuthServiceItf } from '@developers/models';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { ProfileService } from '../profile.service';

import * as ProfilesActions from './profiles.actions';
import * as ProfilesFeature from './reducers/profiles.reducer';


@Injectable()
export class ProfilesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfilesActions.init),
      fetch({
        run: (action) => {
      
          return this.profileService.getUserProfile().pipe(map(res=> {
          
            return ProfilesActions.loadProfilesSuccess({profile: res});
          }))
        },
        onError: (action, error) => {
          if(error?.status == 401){
            return 
          }
          return ProfilesActions.loadProfilesFailure({ error });
        },
      })
    )
  );

  failure$= createEffect(()=> this.actions$.pipe(
    ofType(ProfilesActions.loadProfilesFailure),
    fetch({
      run: (action) => {
        return this,this.profileService
      },
      onError: ,
    })
  ))

  constructor(private readonly actions$: Actions, private profileService: ProfileService) {}
}
