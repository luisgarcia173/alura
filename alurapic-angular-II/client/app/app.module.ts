/** Imports **/
//rxjs
import 'rxjs/add/operator/map';
//angular
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
//modules
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
//components
import {AppComponent} from './app.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
//route
import {routing} from './app.routes';

//Decorator
@NgModule({
    imports: [ BrowserModule, FotoModule, PainelModule, HttpModule, routing ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }