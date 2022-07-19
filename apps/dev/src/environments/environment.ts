// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false,
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
  },
  firebaseConfig : {
    apiKey: "AIzaSyB41IXj-7zK8hFrExeistL1W0kPsPgcgJg",
    authDomain: "developer-app-87415.firebaseapp.com",
    databaseURL: "https://developer-app-87415-default-rtdb.firebaseio.com",
    projectId: "developer-app-87415",
    storageBucket: "developer-app-87415.appspot.com",
    messagingSenderId: "881433795953",
    appId: "1:881433795953:web:895f652a7e44329e81ead0",
    measurementId: "G-EQ95CH6DM0"
  }


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.