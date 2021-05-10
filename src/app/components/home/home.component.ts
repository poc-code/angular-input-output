import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  familia: Object[];
  pessoas = {} as Pessoa[];

  constructor(private _service : PessoaService) {
    this.pessoas = _service.buscarPessoas(); 

    this.familia = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel'
      },
      {
        nome: 'Thiago',
        sobreNome: 'Contre!'
      }
    ];
  }

  ngOnInit(): void {
    console.log(this.familia);
  }

  recebeMensagemDoFilho(){
  }

   // função para receber emit Output do Filho
   reciverFeedback(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

}
