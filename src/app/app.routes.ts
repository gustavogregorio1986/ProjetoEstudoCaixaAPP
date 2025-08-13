import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { LogarComponent } from './pages/logar/logar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // rota inicial
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastrar', component:  CadastrarComponent },
    { path: 'logar', component:  LogarComponent },
];
