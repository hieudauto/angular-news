// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  nytimes: {
  	apiKey: '10fbf3376a6b4b63aae14502dd65fbee'
  },
  firebase: {
  	apiKey: 'AIzaSyDIrM4D-Fbyc59eV0T39eXSOsIOLDz0w4U',
    authDomain: 'my-angular-hieudauto.firebaseapp.com',
    databaseURL: 'https://my-angular-hieudauto.firebaseio.com',
    projectId: 'my-angular-hieudauto',
    storageBucket: 'my-angular-hieudauto.appspot.com',
    messagingSenderId: '225734796486'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
