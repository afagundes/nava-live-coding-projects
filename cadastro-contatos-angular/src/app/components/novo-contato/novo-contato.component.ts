import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from 'src/app/interfaces/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css']
})
export class NovoContatoComponent {

  public contatoForm = this.formBuilder.group({
    nome: '',
    idade: '',
    telefone: '',
  });

  public message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private router: Router
  ){ }

  public salvar(): void {
    const novoContato = this.contatoForm.value as Contato;
    this.contatoService.salvarContato(novoContato)
      .subscribe((contato: Contato) => {
        this.message = `Contato ${contato.nome} salvo com sucesso`;
        this.contatoForm.reset();
      });
  }

  public cancelar(): void {
    this.router.navigate(["/lista-contatos"]);
  }

}
