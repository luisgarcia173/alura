//Imports
import {RouterModule, Routes, Router} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

//Constants
//Routes
const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', component: ListagemComponent} //[**] means otherwise
];

//Exporting Router
export const routing = RouterModule.forRoot(appRoutes);
