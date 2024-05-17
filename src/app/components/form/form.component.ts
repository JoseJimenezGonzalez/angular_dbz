import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  //Defino el personaje  que vamos a obtener del formulario
  public character: Character = {
    name: '',
    power: 0
  };
  //Metodo para emitir el personaje
  emitCharacter(): void{
    //Mandamos el personaje
    if(this.character.name !== ''){
      //Cuidado
      this.onNewCharacter.emit({...this.character});
    }
    //Limpiamos el personaje
    this.character.name = '';
    this.character.power = 0;
  }
  
}
