//Imports
import {Component, Input} from '@angular/core';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {

    //Attributes (Component Parameters)
    @Input() titulo: string;
    @Input() url: string;
    descricao: string;

}