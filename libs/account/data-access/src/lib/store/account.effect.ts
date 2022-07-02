import { Injectable } from "@angular/core";
import { Account, tokenAction } from "@developers/models";
import { init } from "@developers/profile/data-access";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
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
                    return this.accountService.getAccount().pipe(map((account:Account)=> {
                        if(account.profile && account.profile.profileId){
                            this.store.dispatch(init({profileId: account.profile.profileId}))
                        }
                    
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

    constructor(private actions$: Actions, private accountService: AccountService, private store: Store){}

}