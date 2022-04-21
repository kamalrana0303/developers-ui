import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ProfilesActions from './profiles.actions';
import * as ProfilesFeature from './profiles.reducer';

@Injectable()
export class ProfilesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfilesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProfilesActions.loadProfilesSuccess({ profiles: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ProfilesActions.loadProfilesFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
