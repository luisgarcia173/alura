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

    //Constructor
    constructor(service:FotoService){
        //first load
        service
            .listar()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro));
    }

}