/** Imports **/
//rxjs
import 'rxjs/add/operator/map'; //to use map operator in arrow functions
//angular
import {NgModule} from '@angular/core'; //to use decorator NgModule
import {BrowserModule} from '@angular/platform-browser'; //to start first component
import {HttpModule} from '@angular/http'; //to consume REST services
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //to use ngModel and 
//modules
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
import {BotaoModule} from './botao/botao.module';
//components
import {AppComponent} from './app.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
//route
import {routing} from './app.routes'; //

//Decorator
@NgModule({
    imports: [ BrowserModule, FotoModule, PainelModule, HttpModule, routing, FormsModule, ReactiveFormsModule, BotaoModule ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }