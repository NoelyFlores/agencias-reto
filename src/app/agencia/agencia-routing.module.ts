import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualizarAgenciaComponent } from "./actualizar-agencia/actualizar-agencia.component";
import { ListaAgenciaComponent } from "./lista-agencia/lista-agencia.component";

const routes: Routes = [
    {
        path: 'agencias',
        component: ListaAgenciaComponent
    },
    {
        path: 'agencias/:id',
        component: ActualizarAgenciaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AgenciaRoutingModule {}