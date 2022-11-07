// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { KeycloakConfig } from 'keycloak-angular';

let KeycloakConfig: KeycloakConfig = {
  url: "https://auth.bellota.co:10443/auth",
  // "http://192.168.40.19/:10443/auth"
  realm: 'bellotahub',
  clientId: 'compras',
  "credentials": {
    "secret": "71403dac-87be-4e85-ad79-7069985f48aa"
  }
}

let kcInitOtions: Keycloak.KeycloakInitOptions = {
  checkLoginIframe: false
};


export const environment = {
  production: true,
  keycloak: KeycloakConfig,
  kcInitOtions: kcInitOtions,
  //urlBaseLX: 'https://apilx.bellota.co/RestLXCompras',
  urlBaseLXMaestros: 'https://apilx.bellota.co/RestLXMaestrosTavo',
  headerWSLX: 'Bearer Q09UTFg4MzVG',
};
                                  