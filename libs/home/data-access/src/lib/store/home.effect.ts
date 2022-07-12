import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap } from "rxjs";
import { HomeService } from "../home.service";
import { captureAction } from "./home.action";

@Injectable({providedIn: 'root'})
export class HomeEffect{
    capture$= createEffect(()=> {
        return this.actions$.pipe(
            ofType(captureAction),
            exhaustMap(()=> {
                return this.homeService.capture();
            })
        )
    }, {dispatch:false})

    constructor(private homeService:HomeService, private readonly actions$:Actions, private store: Store){}

}