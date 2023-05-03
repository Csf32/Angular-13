import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-components-son',
  templateUrl: './components-son.component.html',
  styleUrls: ['./components-son.component.css']
})
export class ComponentsSonComponent {
  @Input() sobrenome = ""
  @Output() mostrarNome = new EventEmitter()
  nome = ""
}
