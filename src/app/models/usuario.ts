export class Usuario {
    Id:string;
    Email: string;
    Senha:string;
    Perfil:string;

    constructor(id: string, Email: string, Senha:string, Perfil:string){
         this.Id = id;
         this.Email = Email;
         this.Senha = Senha;
         this.Perfil = Perfil;
    }
}
