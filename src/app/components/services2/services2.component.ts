import { Component } from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component {

  descricao = ""
  constructor(public logger: LoggerService){}

  adicionarProduto() {
  this.logger.logar(`O nome ${this.descricao} foi adicionado`)
  }
}
