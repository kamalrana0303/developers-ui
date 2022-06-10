import { createAction, props } from '@ngrx/store';
import { Code,Error } from '../model';

export const loadToken = createAction(
  '[Bucket] Load Token',
  props<Code> ()
);
export const successfullToken = createAction(
  '[Bucket] Success Token'
)
export const failureToken= createAction(
  '[Bucket] Failure Token',
  props<Error<any>> ()
) 