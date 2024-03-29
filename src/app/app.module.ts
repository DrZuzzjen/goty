import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GotyComponent } from './pages/goty/goty.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
