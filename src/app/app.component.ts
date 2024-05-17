import { Component } from '@angular/core';
import { Character } from './interfaces/Character';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Inyeccion de dependencias
  constructor( private appService: AppService){} 

  get characters(): Character[] {
    return [...this.appService.characters];
  }

  onId(id: string): void {
    this.appService.onId(id);
  }

  onNewCharacter(character: Character): void {
    this.appService.onNewCharacter(character);
  }
  
}
