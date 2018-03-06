//Imports
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    router: Router;
    id: string = '';
    mensagem: string = '';

    //Constructor
    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        //service
        this.service = service;

        //route
        this.router = router;
        this.route = route;
        this.route.params.subscribe(params => {
            this.id = params['id'];
            
            //search when you have id as param
            if(this.id) {
                this.service
                    .buscarPor(this.id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro) 
                    );
            }
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
            .subscribe(res => {
                this.mensagem = res.obterMensagem();
                this.foto = new FotoComponent();
                if (!res.ehInclusao()) this.router.navigate(['']); //move to default route
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível salvar a foto.';
            });
    }
}