// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  qrurl: 'https://recollect0.herokuapp.com/transaction',
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic205NDk4MG4iLCJhIjoiY2tkamh3Znh1MDNybjJycGZqeDQ5bmJsYyJ9.NLlJbiEunS-AInAXYWI-rQ'
  },
  resturl: 'https://recollect0.herokuapp.com/users/',
  signupurl: 'https://recollect0.herokuapp.com/users/signup/',
  key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwidXNlcklkIjoiNWYxN2I5ODRkNzk1YjQyODk4NzM0ZTgwIiwiaWF0IjoxNTk2OTM0MDg4LCJleHAiOjE1OTcxOTMyODh9.YzS6NvMM4UG5dVe6atO8POwWjYjHrLDGNkjMyGFynbQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
