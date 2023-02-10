import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: "Alef", type:"Horse", age: 4},
    {name: "Bigode", type:"Dog", age: 9},
    {name: "Odin", type:"Cat", age: 2}
  ]

  animalDetails = ''

  animal: Animal ={
    name: "Teste",
    type: "Someone",
    age: 10,
  }
  showAge(animal: Animal):void {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`
  }
}
