import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { TestComponent } from './pages/test/test.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HistoriaComponent } from './pages/historia/historia.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TestComponent,
    HorarioComponent,
    PlanosComponent,
    GaleriaComponent,
    ContatoComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
