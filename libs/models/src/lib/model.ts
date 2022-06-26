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
  firstName: string | null| undefined;
  lastName: string | null| undefined;
  displayName:string | null| undefined;
  nickName: string | null| undefined;
}

export interface Profile{
  name: Name | null| undefined;
  profileId: string |null| undefined;
  gender: string | null| undefined; 
  dob: any;
  address: Address |null| undefined;
}

export interface NameRM{
  firstName: string ;
  lastName: string;
  profileId: string;
}

export enum GENDER{
  MALE,
  FEMALE
}

export interface Address{
  addressId:string;
  billingAddresses: BillingAddress[] |null| undefined;
  shippingAddresses: ShippingAddress[] |null| undefined;
}

export interface BillingAddress{
  name:string | null| undefined;
  city:string | null| undefined;
  state:string | null| undefined;
  address:string | null| undefined;
  landmark:string | null| undefined;
  pincode:string | null| undefined;
  addressId:string | null| undefined;
  gst:string | null| undefined;
  contactNo:string | null| undefined;
  altContactNo:string | null| undefined;
}

export interface ShippingAddress{
  name:string | null | undefined;
  city:string | null| undefined;
  state:string | null| undefined;
  address:string | null| undefined;
  landmark:string | null| undefined;
  pincode:string | null| undefined;
  addressId:string | null| undefined;
  contactNo:string | null| undefined;
  altContactNo:string | null| undefined;
}

export interface Account{
  email: string |null | undefined;
  profile: Profile | null| undefined;
  address: Address | null| undefined;
}