import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    public rename(cpId:string, firstName: string, lastName: string):Observable<Profile>{
        let header:{headers: HttpHeaders | {[header: string]: string | string[]} | any}=this.headerService.authHeader();
        return this.http.patch<Profile>(this.config.ecomClientBaseUrl + "/profile?cpId="+cpId+"&firstName="+firstName+"&lastName="+lastName , null, this.headerService.authHeader());
    }
}