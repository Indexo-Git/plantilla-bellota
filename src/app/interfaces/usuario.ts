import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root'
})

export class Usuario {
    public username:string;
    public firstName:string;
    public email:string;
    public roles:Array<any>;
    public area:Array<any>;

    constructor(protected keycloakAngular: KeycloakService) {
        this.username=keycloakAngular.getKeycloakInstance().tokenParsed["preferred_username"];
        console.log(this.username);
        this.firstName=keycloakAngular.getKeycloakInstance().tokenParsed["given_name"];
        this.email=keycloakAngular.getKeycloakInstance().tokenParsed["email"];
        this.roles=keycloakAngular.getKeycloakInstance().tokenParsed["resource_access"]["compras"]["roles"];
        this.area = keycloakAngular.getKeycloakInstance().profile['attributes']['department'];
    }

    toString() {
        return `Nombre: ${this.firstName}`;
    }

}

