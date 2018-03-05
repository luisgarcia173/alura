//Imports
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    //Attributes
    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;

    //Constructor
    constructor(service: FotoService, fb: FormBuilder){
        //service
        this.service = service;

        //validations
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    //Methods
    cadastrar(event) {
        //avoid page reload
        event.preventDefault();

        //service call (ADD)
        this.service
            .cadastrar(this.foto)
            .subscribe(() => {
                //clean data form
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso!');
            }, erro => console.log(erro));
    }
}