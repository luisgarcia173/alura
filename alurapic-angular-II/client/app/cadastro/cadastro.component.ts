//Imports
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';
import {ActivatedRoute} from '@angular/router';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    //Attributes
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;

    //Constructor
    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute){
        //service
        this.service = service;

        //route
        this.route = route;
        this.route.params.subscribe(params => {
            let id = params['id'];
            
            this.service
                .buscarPor(id)
                .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro) 
                );
        });
        
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