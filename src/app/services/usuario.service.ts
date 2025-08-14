import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiURI = 'https://localhost:7175/api/Usuario'

  constructor(private http: HttpClient) { }

  criarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiURI}/AdicionarUsuario`, usuario)
  }
}
