import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface AuthServiceItf{
    getToken(code: string):Observable<Token>;
    refreshToken():Observable<Token>;
    storeAccessToken(token:Token):void;
    checkToken():Promise<boolean>;
    getTokenFromSessionStorage():Promise<any>;
    getTokenFromSessionStorage2():any
}


export interface Token{
  "access_token": any;
  "id_token":any;
  "refresh_token":any;
}

export interface error{
  value: any
}

export interface Code{
  value: any
}

export interface HeaderServiceItf{
 authHeader(): {headers: HttpHeaders | {[header: string]: string | string[]}} 
}
export interface Code{
  value: any
}

export interface error{
  value: any
}

export interface Error<T>{
  status: number;
  statusTest: string;
  url: string;
  name: string;
  message: string;
  error: T;
  headers: any
}

export interface ResponseBody<T>{
  body: T;
}

export interface Token{
  "access_token": any;
  "id_token":any;
  "refresh_token":any;
}

export interface Name{
  firstName: string;
  lastName: string;
  displayName:string;
  nickName: string;
}

export interface Profile{
  name: Name;
  email: string;
  cpId: string;
  gender: string;
  billingAddresses: []
  dob: null
  shippingAddresses: []
}

export interface NameRM{
  firstName: string;
  lastName: string;
  cpId: string;
}

export enum Operations{
  EDIT
}