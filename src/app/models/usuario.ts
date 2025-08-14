export class Usuario {
    Email: string;
    Senha:string;
    Perfil:number;

      constructor(Email: string, Senha:string, Perfil:number){
         this.Email = Email;
         this.Senha = Senha;
         this.Perfil = Perfil;
    }
}
