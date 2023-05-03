import { Component } from '@angular/core';

@Component({
  selector: 'app-components-father',
  templateUrl: './components-father.component.html',
  styleUrls: ['./components-father.component.css']
})
export class ComponentsFatherComponent {
  sobrenome = "Souza"

  mostrarNomeCompleto(nomeCompleto: any) {
    alert(`O nome completo é: ${nomeCompleto}` )
  }
}
