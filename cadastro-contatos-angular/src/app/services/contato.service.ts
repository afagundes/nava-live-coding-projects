import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../interfaces/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private backendUrl: string = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  public getContatosFromBackend(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.backendUrl);
  }

  public salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.backendUrl, contato);
  }

  public excluirContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`);
  }

}
