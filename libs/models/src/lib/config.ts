export class ConfigurationModel{

    private _authServerBaseUrl: string;

    public get authServerBaseUrl():string{
        return this._authServerBaseUrl;
    }
    public set authServerBaseUrl(value: string){
        this._authServerBaseUrl=value;
    }
    private _ecomClientBaseUrl: string;
    public get ecomClientBaseUrl():string{
        return this._ecomClientBaseUrl;
    }
    public set ecomClientBaseUrl(value: string){
        this._ecomClientBaseUrl=value;
    }
    private _uiBaseUrl: string;
    public get uiBaseUrl():string{
        return this._uiBaseUrl;
    }
    public set uiBaseUrl(value: string){
        this._uiBaseUrl=value;
    }

    private _production: boolean;
    public get production(): boolean {
        return this._production;
    }
    public set production(value: boolean) {
        this._production = value;
    }

    private _client_id: string;
    public get client_id(): string {
        return this._client_id;
    }
    public set client_id(value: string) {
        this._client_id = value;
    }

    private _secret: string;
    public get secret(): string {
        return this._secret;
    }
    public set secret(value: string) {
        this._secret = value;
    }

    private _token_endpoint: string;
    public get token_endpoint(): string {
        return this._token_endpoint;
    }
    public set token_endpoint(value: string) {
        this._token_endpoint = value;
    }

    private _scope: string;
    public get scope(): string {
        return this._scope;
    }
    public set scope(value: string) {
        this._scope = value;
    }

    private _enableTracing: boolean;
    public get enableTracing(): boolean {
        return this._enableTracing;
    }
    public set enableTracing(value: boolean) {
        this._enableTracing = value;
    }

    private _appearance: string;
    public get appearance(): string {
        return this._appearance;
    }
    public set appearance(value: string) {
        this._appearance = value;
    }

    private _floatLabel: string;
    public get floatLabel(): string {
        return this._floatLabel;
    }
    public set floatLabel(value: string) {
        this._floatLabel = value;
    }
    private _grantType: string;
    public get grantType(): string {
        return this._grantType;
    }
    public set grantType(value: string) {
        this._grantType = value;
    }

    constructor(){
        this._authServerBaseUrl= "";
        this._ecomClientBaseUrl= "";
        this._uiBaseUrl= ""
        this._appearance='fill';
        this._production=false;
        this._client_id='';
        this._scope='';
        this._secret="";
        this._token_endpoint="";
        this._enableTracing=false;
        this._floatLabel='auto';
        this._grantType='password';
    }
}

