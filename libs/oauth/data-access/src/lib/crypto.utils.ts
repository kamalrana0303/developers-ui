import { Buffer } from "buffer";
import * as CryptoJS from "crypto-js";


function dec2hex(str: any){
    return ( "0"+str.toString(16)).substring(-2)
}

function sha256(plain: any){
    const encoder= new TextEncoder();
    const data=encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
}

function base64UrlEncode(a: any){
    var str="";
    var bytes= new Uint8Array(a);
    var len= bytes.byteLength;
    for(var i=0; i< len; i++){
        str+=String.fromCharCode(bytes[i]);
    }
    return Buffer.from(str).toString('base64').replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generateCodeChallegeFromVerifierOld(v:any): Promise<string> {
    var hashed= await sha256(v);
    var base64encoded = base64UrlEncode(hashed);
    return base64encoded;
}

export function generateCodeVerifierOld(): string{
    var array= new Uint32Array(32);
    window.crypto.getRandomValues(array);
    let verifier=Array.from(array, dec2hex).join(" ");
    return verifier;
}




export async function generateCodeChallegeFromVerifier(v:any): Promise<string> {
    const codeVerifierHash =  await CryptoJS.SHA256(v).toString(CryptoJS.enc.Base64);
	const codeChallenge = codeVerifierHash
		 .replace(/=/g, '')
		 .replace(/\+/g, '-')
		 .replace(/\//g, '_');
    return codeChallenge;
}
export function generateCodeVerifier(): string{
    const codeVerifier = randomStr(32);
    return Buffer.from(codeVerifier).toString('base64');
}


function randomStr(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
             
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}









