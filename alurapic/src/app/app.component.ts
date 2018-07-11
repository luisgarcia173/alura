import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // mock sem uso neste momento
  photosMock = [
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg', description: 'Miss Fortune (ADC): Classic'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_6.jpg', description: 'Miss Fortune (ADC): Mafia'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_16.jpg', description: 'Miss Fortune (ADC): Ultimate'}
  ];

  title = 'AluraPIC';
  photos: Object[] = [];

  // Injeção de dependência
  constructor(private photoService: PhotoService) {}
  
  // Ciclo de vida (Inicialização e Configuração)
  ngOnInit(): void {
    this.photoService.listFromUser('flavio').subscribe(
      photos => {
        console.log(photos);
        this.photos = photos
      },
      err => console.log(err)
    );
  }

}
