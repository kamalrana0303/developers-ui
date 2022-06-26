import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { Account, ConfigurationModel, HeaderServiceItf } from "@developers/models";

import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AccountService{
    constructor(private http:HttpClient, @Inject("headerService") private headerService: HeaderServiceItf, @Optional() private config: ConfigurationModel){}
    
    public getAccount():Observable<Account> {
        return this.http.get<Account>(this.config.ecomClientBaseUrl + "/account", this.headerService.authHeader())
    }
}