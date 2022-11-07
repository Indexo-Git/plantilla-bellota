import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { KeycloakService } from 'keycloak-angular';
import xml2js from 'xml2js';  
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'read-xml-angular8';  
  public xmlItems: any;

  constructor (private primengConfig: PrimeNGConfig) {}

    menuMode = 'static';

    theme = 'absolution';

    inputStyle = 'outlined';

    ripple: boolean;

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;
    }
}
