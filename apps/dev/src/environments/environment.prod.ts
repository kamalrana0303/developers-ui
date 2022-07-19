export const environment = {
  firebase: {
    projectId: 'developer-app-87415',
    appId: '1:881433795953:web:895f652a7e44329e81ead0',
    databaseURL: 'https://developer-app-87415-default-rtdb.firebaseio.com',
    storageBucket: 'developer-app-87415.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB41IXj-7zK8hFrExeistL1W0kPsPgcgJg',
    authDomain: 'developer-app-87415.firebaseapp.com',
    messagingSenderId: '881433795953',
    measurementId: 'G-EQ95CH6DM0',
  },
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
