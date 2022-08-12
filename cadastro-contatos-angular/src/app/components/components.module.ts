import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaContatosComponent,
    NovoContatoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaContatosComponent,
    NovoContatoComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
