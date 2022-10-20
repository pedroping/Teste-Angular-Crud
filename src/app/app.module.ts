import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CepComponent } from './components/cep/cep.component';
import { EditarComponent } from './components/editar/editar.component';
import { FormComponent } from './components/form/form.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    NavbarComponent,
    CepComponent,
    EditarComponent,
    FormComponent,
    AdicionarComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
