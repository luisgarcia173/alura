import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  // Atributos
  photos: Photo[] = [];
  filter: string = '';

  // Paginação
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  // Injeção de dependência
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}
  
  // Ciclo de vida (Inicialização e Configuração)
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserByPage(this.userName, ++this.currentPage)
      .subscribe(photos => {
        //this.photos.push(...photos); // spread operator ... === []
        this.filter = '';
        this.photos = this.photos.concat(photos); // força objeto ser atualizado (recebendo novo valor) atualiza Dom
        if (!photos.length) {
          this.hasMore = false;
        }
      })
  }
}
