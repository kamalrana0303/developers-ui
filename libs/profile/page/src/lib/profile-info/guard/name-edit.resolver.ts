import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Name } from '@developers/models';
import { selectProfile, selectProfileName } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { ProfilePageService } from '../../profile-page/profile-page.service';

@Injectable()
export class NameEditResolver implements Resolve<any> {
  constructor(private store: Store){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    return this.store.pipe(select(selectProfile), take(1));
  }
}
