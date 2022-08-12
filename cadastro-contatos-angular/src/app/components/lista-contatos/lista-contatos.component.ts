import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/interfaces/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  public contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.getContatos();
  }

  private getContatos(): void {
    this.contatoService.getContatosFromBackend()
      .subscribe((contatosFromBackend: Contato[]) => this.contatos = contatosFromBackend);
  }

  public excluir(id: number) {
    this.contatoService.excluirContato(id)
      .subscribe(() => this.getContatos());
  }

}
