import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { AuthServiceItf, ConfigurationModel, HeaderServiceItf, Profile, ResponseBody, Token } from "@developers/models";
import { HeaderService } from "apps/dev/src/app/header.service";
import { CookieService } from "ngx-cookie-service";
import { map, Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(@Optional() private config: ConfigurationModel, private http: HttpClient, @Inject('authService') private authService: AuthServiceItf, @Inject("headerService") private headerService: HeaderServiceItf){
    }
    public getUserProfile(profileId: string):Observable<Profile>{
        return this.http.get<Profile>(this.config.ecomClientBaseUrl+"/profile/"+profileId, this.headerService.authHeader() )
    }

    public rename(cpId:string, firstName: string, lastName: string):Observable<Profile>{
        let header:{headers: HttpHeaders | {[header: string]: string | string[]} | any}=this.headerService.authHeader();
        return this.http.patch<Profile>(this.config.ecomClientBaseUrl + "/profile/name?profileId="+cpId+"&firstName="+firstName+"&lastName="+lastName , null, this.headerService.authHeader());
    }

    public dob(x:{profileId:string, date: any}):Observable<Profile> {
        
        let header: {headers: HttpHeaders | {[header:string]: string | string[]} | any}= this.headerService.authHeader();
        return this.http.patch<Profile> (this.config.ecomClientBaseUrl + "/profile/birthday" ,          x,this.headerService.authHeader())
    }

    public gender(x: {profileId: string, gender: any}):Observable<Profile> {
        return this.http.patch<Profile> (this.config.ecomClientBaseUrl + "/profile/gender", x, this.headerService.authHeader());
    }
}