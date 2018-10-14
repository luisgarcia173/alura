//Imports
import {Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

//Decorator
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    //Implements interface's method
    transform(fotos: FotoComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado)); //includes = contains
    }
}