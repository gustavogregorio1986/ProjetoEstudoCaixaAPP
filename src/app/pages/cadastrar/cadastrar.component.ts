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
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-cadastrar',
  imports: [CommonModule, ReactiveFormsModule,CommonModule, ReactiveFormsModule, 
            MatIcon,MatFormFieldModule,MatInputModule,MatButtonModule,
            MatSelectModule,FooterComponent],

  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

    formCadastro!: FormGroup;
    hide = true; // senha escondida por padrão
    mensagemSucesso: string = '';
    mensagemErro: string = '';

    constructor(
      private fb: FormBuilder,
      private usuarioService: UsuarioService){
      this.formCadastro = this.fb.group({
          Email: ['', Validators.required],
          Senha: ['', Validators.required],
          Perfil: ['', Validators.required],
      })
    }

    

   cadastrarUsuario() {
  if (this.formCadastro.valid) {
    const usuario: Usuario = {
      Email: this.formCadastro.value.Email,
      Senha: this.formCadastro.value.Senha,
      Perfil: +this.formCadastro.value.Perfil
    };

    this.usuarioService.criarUsuario(usuario).subscribe({
      next: (retorno) => {
       this.mensagemSucesso = 'Usuário criado com sucesso!';
        this.mensagemErro = '';
        this.formCadastro.reset(); // limpa o formulário
      },
      error: err => console.error('Erro ao criar usuário:', err)
    });
  } else {
    this.mensagemErro = 'Formulário inválido! Preencha todos os campos.';
    this.mensagemSucesso = '';
  }
}

}

