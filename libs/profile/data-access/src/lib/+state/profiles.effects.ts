import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AuthServiceItf, tokenAction } from '@developers/models';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { catchError, exhaustMap, map, switchMap } from 'rxjs';
import { ProfileService } from '../profile.service';

import * as ProfilesActions from './profiles.actions';
import { selectCpId } from './reducers';
import * as ProfilesFeature from './reducers/profiles.reducer';


@Injectable()
export class ProfilesEffects {

  gender$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(ProfilesActions.updateGender),
      fetch({
        run: (action)=> {
          return this.profileService.gender({cpId: action.profileId, gender: action.gender}).pipe(map(res=> {
            return ProfilesActions.loadProfilesSuccess({profile: res})
          }))
        },
        onError: (action, error)=> {
          if(error.status ===401){
            this.store.dispatch(tokenAction.tokenExpired())
          }
          return ProfilesActions.profilesFailure(error);
        }
      })
    )
  })
  dob$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(ProfilesActions.updateDob),
      fetch({
        run: (action)=> {
          return this.profileService.dob({cpId:action.profileId, date: action.dob}).pipe(map(res=> {
            return ProfilesActions.loadProfilesSuccess({profile: res})
          }))
        },
        onError: (action, error)=> {
          if(error.status === 401){
            this.store.dispatch(tokenAction.tokenExpired())
          }
          return ProfilesActions.profilesFailure(error);
        }
      })
    )
  })
  rename$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(ProfilesActions.renameProfile),
      fetch({
        run: (action)=> {
          return this.profileService.rename(action.profileId, action.firstName , action.lastName).pipe(map(res=> {
            return ProfilesActions.loadProfilesSuccess({profile: res})
          }))
        },
        onError: (action, error)=> {
          if(error.status === 401){
            this.store.dispatch(tokenAction.tokenExpired())
          }
          return ProfilesActions.profilesFailure(error)
        }
      })
    )
  })
  initProiflePage$ = createEffect(() =>
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
            return tokenAction.tokenExpired()
          }
          return ProfilesActions.profilesFailure( error );
        },
      })
    )
  );


  
  constructor(private readonly actions$: Actions, private profileService: ProfileService, private store: Store) {}
}
