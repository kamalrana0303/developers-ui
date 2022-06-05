export interface Token{
  "access_token":any;
  "refresh_token":any;
  "expires_in": any;
  "token_type":any;
  "scope":any,
  'id_token':any
}

export interface PKCE{
  code_challenge: string;
}