import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-cadastrar',
  imports: [CommonModule,ReactiveFormsModule, MatIcon,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule, FooterComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
     
    formCadastro!: FormGroup;
    hide = true; // senha escondida por padrão

    constructor(private fb: FormBuilder){
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
}
