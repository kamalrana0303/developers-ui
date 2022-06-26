import { Injectable } from "@angular/core";
import { tokenAction } from "@developers/models";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";
import { map } from "rxjs";
import { accountAction } from "../..";

import { AccountService } from "./account.service";

@Injectable()
export class AccountEffect{
    account$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(accountAction.loadAccount),
            fetch({
                run: (action)=> {
                    return this.accountService.getAccount().pipe(map(account=> {
                        return accountAction.onSuccess({account: account})
                    }))
                },
                onError: (action,error)=> {
                    if(error.status === 401){
                        return tokenAction.tokenExpired()
                    }
                    return accountAction.onError()
                }
            })
        )
    });

    constructor(private actions$: Actions, private accountService: AccountService){}

}