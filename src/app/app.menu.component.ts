import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(
        public app: AppMainComponent,
        ) { }

    ngOnInit() {
        this.model = [
            { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
            {
                label: 'Opción 1', icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Componentes', icon: 'pi pi-fw pi-sitemap',
                        items: [
                            { label: 'Componente 1', icon: 'pi pi-fw pi-pencil', routerLink: ['/componente'] },
                            { label: 'Componente 2', icon: 'pi pi-fw pi-history', routerLink: ['/componente'] },
                            { label: 'Componente 3', icon: 'pi pi-clock', routerLink: ['/componente'] }
                        ]
                    },
                ]
            },
            {
                label: 'Opción 2', icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Componente 1', icon: 'pi pi-fw pi-pencil', routerLink: ['/componente'] },
                    { label: 'Componente 2', icon: 'pi pi-fw pi-history', routerLink: ['/componente'] },
                ]
            },
            {
                label: 'Opción 3', icon: 'pi pi-fw pi-home', routerLink: ['/componente'], 
            }
        ];
    }
}
