import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {  Observable} from 'rxjs';
import { Token } from './+state/codes.models';
import {Buffer} from 'buffer';
import { AuthConfigurations } from './auth.config';
import { DomSanitizer } from '@angular/platform-browser';
export interface TOKEN_INTROSPECTION{
  exp:number;
  user_name:number;
  authorities: string[];
  scope:string[]
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient ,@Optional() private config:  AuthConfigurations , private domSantizer: DomSanitizer) { 
     
  }

  public checkToken(token:string):Observable<TOKEN_INTROSPECTION>{
    let param= new HttpParams();
    param.set("token", token);
    return this.http.post<TOKEN_INTROSPECTION>("http://localhost:8080/oauth/check_token",null,{params: param});
  }

  public getToken(code: string):Observable<Token>{
    let verifier=sessionStorage.getItem("verifier")
    let tokenUri= this.generateTokenUri(code, verifier);
    return this.http.post<Token>(tokenUri, null,{ headers:{'Authorization': 'BASIC '+Buffer.from(`${this.config.clientId}:${this.config.secret}`).toString('base64') }});
  }

  private generateTokenUri(code: string, verifier: string | any){
    let tokenUri="http://127.0.0.1:8080/oauth2/token?client_id=client&redirect_uri=http://127.0.0.1:4200/token&grant_type=authorization_code&code="+code+"&code_verifier="+verifier
    return tokenUri;
  }

  public saveTokenInSession(token: Token): boolean{
    sessionStorage.setItem("access_token",token?.access_token);
    sessionStorage.setItem("refresh_token", token.refresh_token);
    sessionStorage.setItem("id_token", token.id_token);
    sessionStorage.setItem("scope", token.scope);
    sessionStorage.setItem("token_type",token.token_type);
    return !!sessionStorage.getItem("access_token") && !!sessionStorage.getItem("refresh_token") && !!sessionStorage.getItem("id_token") && !!sessionStorage.getItem("scope")  && !!sessionStorage.getItem("token_type");
  }

  public checkAccessTokenInSession():boolean{
    return !!sessionStorage.getItem("access_token");
  }

  public checkRefreshTokenInSession(): boolean{
    return !!sessionStorage.getItem("refresh_token");
  }

}