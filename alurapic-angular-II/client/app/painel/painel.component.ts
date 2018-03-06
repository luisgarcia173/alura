//Imports
import {Component, Input, OnInit, ViewEncapsulation, ElementRef} from '@angular/core';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PainelComponent implements OnInit {

    //Attributes (inBound properties)
    @Input() titulo: string;
    private elemento: ElementRef;

    constructor(elemento: ElementRef) {
        this.elemento = elemento;
    }

    //Has the same behavior of a Constructor, however it's executed after inbound properties were created
    ngOnInit(){
        //Acronym function to truncate text
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + '...' : this.titulo;
    }

    fadeOut(cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    }

}