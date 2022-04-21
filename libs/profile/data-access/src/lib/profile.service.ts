import { Injectable, Optional } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProfileConfiguration } from "libs/profile/data-access/src/lib/profile.config";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(@Optional() config: ProfileConfiguration){
    }
    public getUserProfile(){

    }
}