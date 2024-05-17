import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/Character';

@Injectable({providedIn: 'root'})
export class AppService {

  //lista de personajes
  //tengo que pasar esta lista al component hija list
  public characters: Character[] = [
    {id: uuid(), name: "Trunks", power: 8000},
    {id: uuid(), name: "Goku", power: 10000},
    {id: uuid(), name: "Vegeta", power: 9500},
    {id: uuid(), name: "Broly", power: 12000},
    {id: uuid(), name: "Janemba", power: 10000},
  ];

  onNewCharacter(character: Character): void{
    const newCharacter: Character = {
        id: uuid(),
        name: character.name,
        power: character.power
    }
    this.addCharacterToList(newCharacter);
  }
  addCharacterToList(character: Character): void{
    this.characters.push(character);
  }
  onId(id: string): void {
    this.deleteCharacterById(id);
  }
  deleteCharacterById(id: string): void{
    console.log(id);
    this.characters = this.characters.filter( character =>
        character.id !== id
    );
  }

}