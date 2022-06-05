export class AuthPageConfigurations{
    private _brand: string;
    public get brand(): string{
        return this._brand;
    }
    public set brand(brand: string){
        this._brand=brand;
    }
    private _client_base_url: string;
    public get clientBaseUrl():string{
        return this._client_base_url;
    }
    public set clientBaseUrl(client_base_url:string){
        this._client_base_url=client_base_url;
    }
    private _baseUrl: string;
    public get baseUrl(): string {
        return this._baseUrl;
    }
    public set baseUrl(value: string) {
        this._baseUrl = value;
    }

    private _production: boolean;
    public get production(): boolean {
        return this._production;
    }
    public set production(value: boolean) {
        this._production = value;
    }

    private _client_id: string;
    public get clientId(): string {
        return this._client_id;
    }
    public set clientId(value: string) {
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
    public get tokenEndpoint(): string {
        return this._token_endpoint;
    }
    public set tokenEndpoint(value: string) {
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

    private _grant_type:string
    public get grantType(): string {
        return this._grant_type;
    }
    public set grantType(value: string) {
        this._grant_type = value;
    }

    constructor(){
        this._baseUrl=""
        this._appearance='fill';
        this._production=false;
        this._client_id='';
        this._scope='';
        this._secret="";
        this._token_endpoint="";
        this._enableTracing=false;
        this._floatLabel='auto';
        this._client_base_url='';
        this._grant_type='';
        this._brand='';
    }
}