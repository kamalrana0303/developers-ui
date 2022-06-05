import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import * as CodesActions from '../codes.actions';
import { PKCE, Token } from '../codes.models';

export interface State {
  token?: Token | null;
  pkce?: PKCE | null;
}             


export const initialState:any={ token: null, pkce: null}

const codesReducer = createReducer(
  initialState,
  on(CodesActions.loadTokenFromAPISuccess, (state:any, {token})=> ({...state, token})),
  on(CodesActions.loadCodesFailure, (state: any, {error})=> ({
    ...state,
    error
  })),
  on(CodesActions.loadTokenFromSessionSuccess, (state:any, {token})=>({...state, token})),
  on(CodesActions.loadPKCESuccess, (state: any, {pkce})=>{
    return ({...state, pkce});
  }  )
);

export function reducer(state: State | undefined, action: Action) {
  return codesReducer(state, action);
}