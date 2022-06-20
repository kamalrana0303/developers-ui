import { createAction, props } from "@ngrx/store";

export const showAction = createAction(
    '[Progress] Show',
    props<{id:string}>()
)
export const hideAction = createAction(
    '[Progress] Hide',
    props<{id:string}>()
)