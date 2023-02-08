import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals = [
    {name: "Alef", type:"Horse"},
    {name: "Bigode", type:"Dog"},
    {name: "Odin", type:"Cat"}
  ]
}
