//Imports
import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {Http, Headers} from '@angular/http';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    //Attributes
    foto: FotoComponent = new FotoComponent();
    http: Http;

    //Constructor
    constructor(http: Http){
        this.http = http;
    }

    //Methods
    cadastrar(event) {
        //avoid page reload
        event.preventDefault();

        //set HTTP header
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        //POST
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
            .subscribe(() => {
                //clean data form
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso!');
            }, erro => console.log(erro));
    }
}