import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Input Output';

  @Input() recebePessoa : Pessoa;
  pessoa = {} as Pessoa;
  constructor(){
    this.pessoa = this.recebePessoa;
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaPessoa) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaPessoa);
  }

  ngOnInit(){
    console.log(this.recebePessoa);
  }
}
