import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/login-response.model ';

@Component({
  selector: 'app-logar',
  imports: [CommonModule,ReactiveFormsModule, MatIcon,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule, FooterComponent],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent {

  formCadastro!: FormGroup;
    hide = true; // senha escondida por padrão
     mensagemSucesso: string = '';
     mensagemErro: string = '';

    constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router
      ){
      this.formCadastro = this.fb.group({
          Email: ['', Validators.required],
          Senha: ['', Validators.required],
          Perfil: ['', Validators.required],
      })
    }

     onSubmit() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

   logarUsuario() {
    if (this.formCadastro.valid) {
      const credenciais = {
        Email: this.formCadastro.value.Email,
        Senha: this.formCadastro.value.Senha
      };

      this.usuarioService.logar(credenciais).subscribe({
        next: (resposta: LoginResponse) => {
          localStorage.setItem('token', resposta.token);

          const perfil = resposta.usuario.perfil;

          // Redirecionamento baseado no perfil
          if (perfil === 'cliente') {
            this.router.navigate(['/cliente']);
          } else if (perfil === 'auth') {
            this.router.navigate(['/auth']);
          } else {
            this.router.navigate(['/dashboard']); // fallback
          }

          this.mensagemSucesso = 'Login realizado com sucesso!';
          this.mensagemErro = '';
        },
        error: (err) => {
          this.mensagemErro = 'Email ou senha inválidos.';
          this.mensagemSucesso = '';
          console.error('Erro ao logar:', err);
        }
      });
    } else {
      this.mensagemErro = 'Preencha todos os campos corretamente.';
      this.mensagemSucesso = '';
    }
  }
}
