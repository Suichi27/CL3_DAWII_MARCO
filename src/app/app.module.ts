import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotasComponent } from './dashboard/notas/notas.component';
import { EstacionamientoComponent } from './dashboard/estacionamiento/estacionamiento.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

import { RouterModule } from '@angular/router';
import { EpisodeListaComponent } from './dashboard/episode/episode-lista/episode-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotasComponent,
    EstacionamientoComponent,
    PageNotFoundComponent,
    EpisodeListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'dashboard',component:DashboardComponent,
      children:[
        {path: 'listado',component:EpisodeListaComponent},
        {path:'notas',component:NotasComponent},
        {path:'estacionamiento',component:EstacionamientoComponent}
      ]
    },
      {path:'', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'**',component: PageNotFoundComponent}
    ]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
