//Imports
import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    //Attributes
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = "";

    //Constructor
    constructor(service:FotoService){
        this.service = service;
        //first load
        this.service
            .listar()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    //Methods
    remover(foto: FotoComponent): void {
        this.service
            .remover(foto)
            .subscribe(
                () => {
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a foto';
                }
    }

}