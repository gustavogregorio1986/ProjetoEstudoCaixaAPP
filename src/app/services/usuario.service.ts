import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model ';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiURI = 'https://localhost:7175/api/Usuario'

  constructor(private http: HttpClient) { }

  criarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiURI}/AdicionarUsuario`, usuario)
  }

  logar(credenciais: { Email: string; Senha: string }): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${this.apiURI}/LoginUsuario`, credenciais);
   }

}
