import {  Action, createReducer, on } from '@ngrx/store';
import { bucketAction } from '../action';

export const tokenFeatureKey = 'token';

export interface State {
  error: any;
  code: any;
}

export const initialState: State = {
  error: null,
  code: null
};

export const appDataReducer = createReducer(
  initialState,
  on(bucketAction.loadToken, (state, code)=> ({...state, code})),
  on(bucketAction.failureToken, (state, error)=> ({...state, error}))
)

export function reducer(state: State | undefined, action : Action){
  return appDataReducer(state, action);
}
