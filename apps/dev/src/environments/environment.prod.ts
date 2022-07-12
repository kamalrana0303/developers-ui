export const environment = {
  production: true,
  appName: 'teamashii',
  baseUrl: "http://127.0.0.1:8080",
  authServerBaseUrl: "http://127.0.0.1:8080",
  ecomClientBaseUrl: 'http://127.0.0.1:9090',
  clientId: 'client',
  secret: 'secret',
  scope: "openid",
  grantType: ['authorization_code', 'refresh_token'],
  uiBaseUrl: 'http://127.0.0.1:4200',
  tokenEndpoint:"/oauth/token",
  brand: 'twilio',
  enableTracing: false,
  appearance: "outline",
  floatLabel: 'auto',
  url: {
    
    profileBaseurl: "personal-info"
  }
};
