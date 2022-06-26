import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import * as addressAction from "./address.action";
@Injectable()
export class AddressEffect{
    constructor(private action$: Actions){}

    // loadAddress$= createEffect(()=> this.action$.pipe(
    //     ofType(addressAction.loadAddress),
    //     fetch({
    //         run:(action) => {
    //             return 
    //         },
    //         onError: (action, error)=> {
    //             return addressAction.onError(error);
    //         }
    //     })
    // ))
}