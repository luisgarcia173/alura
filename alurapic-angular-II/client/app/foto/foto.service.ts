//Imports
import {Http, Headers, Response} from '@angular/http';
import {FotoComponent} from './foto.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

//As non decorator, should use teh Angular dependency injection
@Injectable() 
export class FotoService {

	//Attributes
    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

	//Constructor
    constructor(http: Http) { 
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

	//Methods
    listar(): Observable<FotoComponent[]> {
		//GET
		return this.http
			.get(this.url)
            .map(res => res.json());
    }

    cadastrar(foto: FotoComponent): Observable<Response> {
		//POST
		return this.http
			.post(this.url, JSON.stringify(foto), { headers: this.headers }); 

    }
    
    remover(foto: FotoComponent): Observable<Response> {
        //DELETE
        return this.http
            .delete(this.url + '/' + foto._id);
    } 

}