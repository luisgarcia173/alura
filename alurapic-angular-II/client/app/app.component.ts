//Imports
import {Component} from '@angular/core';
import {Http} from '@angular/http';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    //Attributes
    fotos: Object[] = [];

    //Constructor
    constructor(http:Http){

        //GET
        http
            .get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro));
    }

}