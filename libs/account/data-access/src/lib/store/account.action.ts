import { Account } from "@developers/models";
import { createAction, props } from "@ngrx/store";

export const loadAccount = createAction(
    '[Account] Load account',
)

export const onError = createAction(
    '[Account] Failed loading'
)

export const onSuccess = createAction(
    '[Account] Successfully Loaded',
    props<{account:Account}>()
)