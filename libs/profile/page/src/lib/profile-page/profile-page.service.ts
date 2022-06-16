import { Injectable } from "@angular/core";
import { Name } from "@developers/models";
import { Store } from "@ngrx/store";
import { Observable, skipWhile, tap } from "rxjs";

@Injectable()
export class ProfilePageService{
    constructor(private store: Store){}
    public selectProfileName():Observable<Name>{
        return this.store.pipe(this.selectProfileName, skipWhile(loading=> !loading))
    }
}