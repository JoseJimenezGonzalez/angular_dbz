import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onId: EventEmitter<string> = new EventEmitter();
  //Con input le indicamos que este objeto nos viene del padre
  @Input()
  public characterList: Character[] = [];
  //Metodo para emitir el indice
  emitId(id?: string): void{
    this.onId.emit(id);
  }
  
}
