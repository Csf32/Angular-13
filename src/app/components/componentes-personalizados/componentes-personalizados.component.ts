import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componentes-personalizados',
  templateUrl: './componentes-personalizados.component.html',
  styleUrls: ['./componentes-personalizados.component.css']
})
export class ComponentesPersonalizadosComponent {
  @Input() nome = ""
  @Input() sobrenome = ""

}
