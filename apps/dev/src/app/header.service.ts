import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AuthServiceItf } from "@developers/models";

@Injectable({providedIn: 'root'})
export class HeaderService{

    constructor(@Inject('authService') private authService: AuthServiceItf){}

    public authHeader(): {headers: HttpHeaders | {[header: string]: string | string[]}} {
        return {headers: { Authorization: `Bearer ${this.authService.getTokenFromSessionStorage2()}`}}
    }
}