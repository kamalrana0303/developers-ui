export interface Token{
    "access_token":string;
    "refresh_token":string;
    "expires_in": number;
    "token_type":string;
    "scope":string,
    'jti':string
}