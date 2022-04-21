import { Token } from "../token.model";

export interface TokenEntity{
    access_token:string;
    refresh_token:string;
    expires_in: number;
    token_type:string;
    scope:string,
    jti:string
}