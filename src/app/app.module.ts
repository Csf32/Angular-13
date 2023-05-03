import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ComponentesPersonalizadosComponent } from './components/componentes-personalizados/componentes-personalizados.component';
import { ComponentsFatherComponent } from './components/components-father/components-father.component';
import { ComponentsSonComponent } from './components/components-son/components-son.component';
import { FormsModule } from '@angular/forms';
import { Services1Component } from './components/services1/services1.component';
import { Services2Component } from './components/services2/services2.component';



//As importações ficam aqui e são pegadas no @ngModule na parte de declarations


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    ComponentesPersonalizadosComponent,
    ComponentsFatherComponent,
    ComponentsSonComponent,
    Services1Component,
    Services2Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
