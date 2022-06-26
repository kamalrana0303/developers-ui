import { Address } from "@developers/models";
import { createAction, props } from "@ngrx/store";

export const loadAddress = createAction(
    '[Address] Load Address'
)
export const onError= createAction(
    '[Address] On Error',
    props<any> ()
)
export const onSuccess= createAction(
    '[Address] On Success',
    props<Address>()
)