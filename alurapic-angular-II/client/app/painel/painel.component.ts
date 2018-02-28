//Imports
import {Component, Input, OnInit} from '@angular/core';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

    //Attributes (inBound properties)
    @Input() titulo: string;

    //Has the same behavior of a Constructor, however it's executed after inbound properties were created
    ngOnInit(){
        //Acronym function to truncate text
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + '...' : this.titulo;
    }
}