import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContatosComponent } from './components/lista-contatos/lista-contatos.component';
import { NovoContatoComponent } from './components/novo-contato/novo-contato.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-contatos', pathMatch: 'full' },
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'novo-contato', component: NovoContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
