//Imports
import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';

//Decorator
@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ],
    exports: [ FotoComponent, FiltroPorTitulo ]
})
export class FotoModule { }