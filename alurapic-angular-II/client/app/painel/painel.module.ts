//Imports
import {NgModule} from '@angular/core';
import {PainelComponent} from './painel.component';

//Decorator
@NgModule({
    declarations: [ PainelComponent ],
    exports: [ PainelComponent ]
})
export class PainelModule { }