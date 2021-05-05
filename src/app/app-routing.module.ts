import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualizarAgenciaComponent } from "./agencia/actualizar-agencia/actualizar-agencia.component";
import { ListaAgenciaComponent } from "./agencia/lista-agencia/lista-agencia.component";


const routes: Routes = [
    {
        path: 'agencias',
        component: ListaAgenciaComponent
    },
    {
        path: 'agencias/:id',
        component: ActualizarAgenciaComponent
    },
    {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}