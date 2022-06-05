import { createAction, props } from '@ngrx/store';
import { Code, error } from '../app-data.model';

export const loadToken = createAction(
  '[Bucket] Load Token',
  props<Code> ()
);
export const successfullToken = createAction(
  '[Bucket] Success Token'
)
export const failureToken= createAction(
  '[Bucket] Failure Token',
  props<error> ()
) 