import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModules } from './contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.modules';

//Tarea:
//Crear un módulo llamado ContadorModulo
// declaracione, y exportaciones


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
