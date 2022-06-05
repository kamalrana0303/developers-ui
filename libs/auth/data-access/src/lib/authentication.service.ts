import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/dev/src/environments/environment';
import { Observable, of } from 'rxjs';

import { Authenticate } from './authentication.model';
import { Token } from './token.model';

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
  private loggedIn:boolean=false;
  constructor(private http:HttpClient) { }

  login(auth: Authenticate):Observable<Token>{
    this.loggedIn=true;
    return this.getToken(auth);
  }

  logOut(){
    this.loggedIn=false;
    return of(true);
  }

  check(token:string):Observable<TOKEN_INTROSPECTION>{
    return this.checkToken(token)
  }


  private checkToken(token:string):Observable<TOKEN_INTROSPECTION>{
    let param= new HttpParams();
    param.set("token", token);
    return this.http.post<TOKEN_INTROSPECTION>("http://localhost:8080/oauth/check_token",null,{params: param});
  }

  private getToken(user:Authenticate):Observable<Token>{
    let params = new URLSearchParams();   
    params.append('grant_type','password');
    params.append("username",user.username);
    params.append('password',user.password);
    let x= params.toString();
  // return   this.http.get<Token>("http://localhost:8080/login", {headers: {"username": user.username, "password": user.password}})
   return this.http.post<Token>("http://localhost:8080/oauth/token?"+params.toString(), null,{ headers:{"Authorization": `Basic ${btoa("client3:secret3")}`}});
  }

}
