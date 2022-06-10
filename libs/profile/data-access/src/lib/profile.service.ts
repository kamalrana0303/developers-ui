import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { AuthServiceItf, ConfigurationModel, HeaderServiceItf, Profile, ResponseBody, Token } from "@developers/models";
import { HeaderService } from "apps/dev/src/app/header.service";
import { CookieService } from "ngx-cookie-service";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(@Optional() private config: ConfigurationModel, private http: HttpClient, @Inject('authService') private authService: AuthServiceItf, @Inject("headerService") private headerService: HeaderServiceItf){
    }
    public getUserProfile():Observable<Profile>{
        return this.http.get<Profile>(this.config.ecomClientBaseUrl+"/profile", this.headerService.authHeader() );
    }
}