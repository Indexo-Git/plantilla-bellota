import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/productservice';
import { BreadcrumbService } from '../../app.breadcrumb.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { KeycloakService } from 'keycloak-angular';
import { EventService } from '../service/eventservice';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/demo/badges.scss'],
})
export class DashboardDemoComponent implements OnInit {
    usuario: Usuario;

    constructor(
        private breadcrumbService: BreadcrumbService,
        private keycloak: KeycloakService,
    ) {
        this.breadcrumbService.setItems([
            { label: 'Inicio / Bellota HUB', routerLink: ['/'] }
        ]);
    }
    public userName = "";

    ngOnInit() {
        this.userName = this.keycloak.getUsername();
    }
}
