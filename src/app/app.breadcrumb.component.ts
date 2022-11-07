import { Component, OnDestroy } from '@angular/core';
import { BreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { KeycloakService } from 'keycloak-angular';
import { AppMainComponent } from './app.main.component';
import { Usuario } from './interfaces/usuario';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html',
})
export class AppBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(
        public breadcrumbService: BreadcrumbService,
        public app: AppMainComponent,
        private keycloak: KeycloakService,
        public appMain: AppMainComponent,
        public usuario: Usuario
        ) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    logout() {
        this.keycloak.logout(window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/');
    };

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
