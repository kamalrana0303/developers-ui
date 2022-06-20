import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {progressAction} from "@developers/models";
import { map } from "rxjs";
import { init, loadProfilesSuccess, profilesFailure, renameProfile } from "@developers/profile/data-access";
import { tokenExpired } from "libs/models/src/lib/action/token.action";

interface x{
    key: string;
    value:any
}
interface y{
    key:string;
    value:any
}
const PROGRESS_ACTIONS:  { [progressId: string]: { showActions: string[], hideActions: string[] } }  = {
    "profile-page":{
        showActions: [renameProfile.type],
        hideActions: [loadProfilesSuccess.type, profilesFailure.type, tokenExpired.type]
    }
   
}

export interface SHOWACTIONS{
    [key: string]: any
}
export interface HIDEACTIONS{
    [key: string]: any
}
let x: SHOWACTIONS= {}
let y :HIDEACTIONS= {}
const {showActions, hideActions} = Object.entries(PROGRESS_ACTIONS).reduce((acc, [key, value]:any) => {
   
    value.showActions.forEach((action:string) => {
        acc.showActions[action]= key
    });
    value.hideActions.forEach((action:string)=>{
        acc.hideActions[action] = key
    });
    return acc;
  }, { showActions: x, hideActions: y});

@Injectable()
export class ProgressEffect{

  constructor(private actions$: Actions) {}

  showProgress$ =createEffect(()=>{
      return this.actions$.pipe(
          ofType(...Object.keys(showActions)),
          map(action=> {
            return progressAction.showAction({id: showActions[action.type]})
        })
      )
  });

  hideProgress$ =createEffect(()=>{
    return this.actions$.pipe(
        ofType(...Object.keys(hideActions)),
        map(action=> {
            return progressAction.hideAction({id: hideActions[action.type]})
        })
    )
  });
}