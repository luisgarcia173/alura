import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraPIC';

  photos = [
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg', description: 'Miss Fortune (ADC): Classic'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_6.jpg', description: 'Miss Fortune (ADC): Mafia'},
    {url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_16.jpg', description: 'Miss Fortune (ADC): Ultimate'}
  ];

}
