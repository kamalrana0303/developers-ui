import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { AuthServiceItf, ConfigurationModel, Profile, ResponseBody, Token } from "@developers/models";
import { CookieService } from "ngx-cookie-service";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(@Optional() private config: ConfigurationModel, private http: HttpClient, @Inject('authService') private authService: AuthServiceItf, private cookieService: CookieService){
    }
    public getUserProfile():Observable<ResponseBody<Profile>>{
        let access_token: any= this.authService.getTokenFromSessionStorage2();
        let JSESSIONID: any= this.cookieService.get("JSESSIONID");
        alert(JSON.stringify(this.cookieService.getAll()))
        alert(JSESSIONID)
        alert(access_token)
        return this.http.get<ResponseBody<Profile>>(this.config.baseUrl+"/profile", {headers: {'Authorization': 'Bearer '+ access_token , 'JSESSIONID': '6F4F38BCF897FB6F89D9265F5DCAF4B0'}});
    }
}