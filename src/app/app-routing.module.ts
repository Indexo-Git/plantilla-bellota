import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {AppMainComponent} from './app.main.component';
import {AppErrorComponent} from './pages/app.error.component';
import { AppAuthGuard } from './auth/appAuthGuard';
import { Componente1 } from './components/opcionComponente1/componente1';
// import { ClientesComponent } from './components/maestros/clientes/consultarClientes/clientes.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', canActivate: [AppAuthGuard], component: AppMainComponent,
                children: [
                    { path: '', component: DashboardDemoComponent },
                    { path: 'componente', component: Componente1, },
                    { path: 'error', component: AppErrorComponent },
                ]
            },
            { path: '**', component: AppMainComponent },
        ], {scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

