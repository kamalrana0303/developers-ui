import {  Action, createReducer, on } from '@ngrx/store';
import {  loginAction } from '../action';

export const tokenFeatureKey = 'token';

export interface State {
   loggedIn: boolean
}

export const initialState: State = {
   loggedIn: false
};

export const appDataReducer = createReducer(
   initialState,
   on(loginAction.loginStatus, (state, status)=> ({...state, ...status}))
)

export function reducer(state: State | undefined, action : Action){
   return appDataReducer(state, action);
}