import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './components/cep/cep.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { EditarComponent } from './components/editar/editar.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';


const routes: Routes = [
  {path: '', component: PrimeiroComponentComponent},
  {path: 'home', component: PrimeiroComponentComponent},
  {path: 'cep', component: CepComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'detalhe/:id', component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
