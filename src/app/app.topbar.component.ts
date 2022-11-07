import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AppMainComponent } from './app.main.component';
import { Usuario } from './interfaces/usuario';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(
        public app: AppMainComponent,
        private keycloak: KeycloakService,
        public appMain: AppMainComponent,
        public usuario: Usuario
    ) {}

    
    logout() {
        this.keycloak.logout(window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/');
    };
}
