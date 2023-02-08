import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name = "Caique"
  age = 26;
  job = "Programador"
  hobbies = ["Correr ", "Jogar ", "Estudar"]
  car = {
    name: "Duster",
    year: 2017

  }
}
