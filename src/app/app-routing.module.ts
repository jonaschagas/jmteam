import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from './pages/horario/horario.component';
import { TestComponent } from './pages/test/test.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HistoriaComponent } from './pages/historia/historia.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TestComponent
  },
  {
    path: 'horario',
    component: HorarioComponent
  },
  {
    path: 'planos',
    component: PlanosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
  path: 'historia',
  component: HistoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
