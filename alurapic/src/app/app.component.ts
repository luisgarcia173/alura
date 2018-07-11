import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraPIC';

  photosMock = [
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg', description: 'Miss Fortune (ADC): Classic'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_6.jpg', description: 'Miss Fortune (ADC): Mafia'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_16.jpg', description: 'Miss Fortune (ADC): Ultimate'}
  ];

  photos: Object[] = [];

  constructor(http:HttpClient) {
    
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => {
          console.log(photos);
          this.photos = photos
        },
        err => console.log(err));
    
  }

}
