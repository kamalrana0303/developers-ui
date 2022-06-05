import { Observable } from "rxjs";

export interface AuthServiceItf{
    getToken(code: string):Observable<Token>;
    storeAccessToken(token:Token):void;
    checkToken():Promise<boolean>;
    getTokenFromSessionStorage():Promise<any>;
    getTokenFromSessionStorage2():string | null
}

export interface Code{
  value: any
}

export interface error{
  value: any
}

export interface Error<T>{
  value: T
}

export interface ResponseBody<T>{
  body: T;
}

export interface Token{
  "access_token": any;
  "id_token":any;
  "refresh_token":any;
}

export interface Profile{
  username: string;
  email: string;
  userId: string;
}