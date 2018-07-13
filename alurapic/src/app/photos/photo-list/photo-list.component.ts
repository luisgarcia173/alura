import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  // Atributos
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  // Paginação
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = ';'
  
  // Injeção de dependência
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}
  
  // Ciclo de vida (Inicialização e Configuração)
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300)) // idle for 3s
      .subscribe(filter => this.filter = filter);
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe(); // Libera memoria ao acessar outra rota
  }

  load() {
    this.photoService
      .listFromUserByPage(this.userName, ++this.currentPage)
      .subscribe(photos => {
        //this.photos.push(...photos); // spread operator ... === []
        this.photos = this.photos.concat(photos); // força objeto ser atualizado (recebendo novo valor) atualiza Dom
        if (!photos.length) {
          this.hasMore = false;
        }
      })
  }
}