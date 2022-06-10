import { createAction, props } from "@ngrx/store";

export const tokenExpired = createAction(
    '[Token] Token Expired'
)

export const tokenRefreshed = createAction (
    '[Token] Token Refreshed'
)

export const tokenError = createAction (
    '[Token] Error',
    props<{error: any, status: any}> ()
)