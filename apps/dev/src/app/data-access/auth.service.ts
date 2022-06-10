import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  public refreshToken():Observable<Token>{
    let refresh_token = this.getRefreshTokenFromSessionStorage2();
    let refreshTokenUri: string = this.generateRefreshTokenUri(refresh_token);
    return this.http.post<Token>(refreshTokenUri, null, {headers: {'Authorization': 'BASIC '+ Buffer.from(`${environment.clientId}: ${environment.secret}`).toString('base64')}})
  }

  private generateRefreshTokenUri(refresh_token:any){
    let refreshTokenUri = environment.authServerBaseUrl + "/oauth2/token?grant_type="+ environment.grantType[1]+"&scope="+environment.scope+"&refresh_token="+refresh_token;
    return refreshTokenUri;
  }

  private generateTokenUri(code: string, verifier: string | any){
    let tokenUri:string =environment.authServerBaseUrl+"/oauth2/token?client_id="+environment.clientId+"&redirect_uri="+environment.uiBaseUrl+"/token&grant_type="+environment.grantType[0]+"&code="+code+"&code_verifier="+verifier
    return tokenUri;
  }

  public storeAccessToken(token:Token){
    sessionStorage.setItem("access_token",token.access_token);
    sessionStorage.setItem("refresh_token", token.refresh_token);
    sessionStorage.setItem("id_token", token.id_token);
  }

  private removeAccessToken(){
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("id_token");
  }

  public loggeOut(): Observable<boolean>{
    this.removeAccessToken();
    let loggedOut:boolean =  (!sessionStorage.getItem("access_token") && !sessionStorage.getItem("refresh_token") && !sessionStorage.getItem("id_token"));
    return of(loggedOut);
  }

  async checkToken():Promise<boolean>{
    let token=await sessionStorage.getItem("id_token");
    return !!token;
  }

  async getRefreshTokenFromSessionStorage():Promise<any>{
    let refresh_token = await this.getRefreshTokenFromSessionStorage2();
    return refresh_token;
  }

  getRefreshTokenFromSessionStorage2(): string | null{
    let refresh_token : string | null = sessionStorage.getItem("refresh_token");
    return refresh_token;
  }

  async getTokenFromSessionStorage():Promise<any>{
    let id_token=await this.getTokenFromSessionStorage2();
    return id_token;
  }

  getTokenFromSessionStorage2():string | null{
    let id_token: string | null= sessionStorage.getItem("id_token");
    return id_token;
  }

  generateLoginUri(codeChallenge:string | any, codeChallengeMethod:string){
    let redirect_uri=environment.uiBaseUrl+"/token";
    let result=  `${environment.authServerBaseUrl}/oauth2/authorize?response_type=code&client_id=${environment.clientId}&scope=${environment.scope}&redirect_uri=${redirect_uri}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
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
