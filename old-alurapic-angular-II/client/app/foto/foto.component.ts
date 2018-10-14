//Imports
import {Component, Input, ViewEncapsulation} from '@angular/core';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated // default selection ViewEncapsulation.Emulated
})
export class FotoComponent {

    //Attributes (Component Parameters)
    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;

}