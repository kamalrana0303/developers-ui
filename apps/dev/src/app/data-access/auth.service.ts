import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Token } from './app-data.model';
import {Buffer} from 'buffer';
import { AuthServiceItf } from '@developers/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceItf{

  constructor(private http: HttpClient) { }
  
  public getToken(code: string):Observable<Token>{
    let verifier=sessionStorage.getItem("verifier")
    let tokenUri= this.generateTokenUri(code, verifier);
    return this.http.post<Token>(tokenUri, null,{ headers:{'Authorization': 'BASIC '+Buffer.from(`${environment.clientId}:${environment.secret}`).toString('base64') }});
  }

  private generateTokenUri(code: string, verifier: string | any){
    let tokenUri=environment.authServerBaseUrl+"/oauth2/token?client_id="+environment.clientId+"&redirect_uri="+environment.clientBaseUrl+"/token&grant_type=authorization_code&code="+code+"&code_verifier="+verifier
    return tokenUri;
  }

  public storeAccessToken(token:Token){
    sessionStorage.setItem("access_token",token.access_token);
    sessionStorage.setItem("refresh_token", token.refresh_token);
    sessionStorage.setItem("id_token", token.id_token);
  }

  async checkToken():Promise<boolean>{
    let token=await sessionStorage.getItem("access_token");
    return !!token;
  }

  async getTokenFromSessionStorage():Promise<any>{
    let access_token=await this.getTokenFromSessionStorage2();
    return access_token;
  }

  getTokenFromSessionStorage2():string | null{
    let access_token: string | null= sessionStorage.getItem("access_token");
    return access_token;
  }

 generateLoginUri(codeChallenge:string | any, codeChallengeMethod:string){
    let redirect_uri=environment.clientBaseUrl+"/token";
    let result=  `${environment.baseUrl}/oauth2/authorize?response_type=code&client_id=${environment.clientId}&scope=${environment.scope}&redirect_uri=${redirect_uri}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
    return result;
  }

  async getCodeChallengeFromSessionStorage(): Promise<any>{
    let code_challenge= await sessionStorage.getItem("code_challenge");
    return code_challenge;
  }

  async getCodeVerifierFormSessionStorage(): Promise<any>{
    let verifer= await sessionStorage.getItem("verifier");
    return verifer;
  }


}
