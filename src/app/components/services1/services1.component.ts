import { Component } from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component {
  nome = ""
  constructor(private logger: LoggerService) {}
  
  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`)
  }

}
