import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  @Input() pessoaSelecionada : Pessoa;
  @Output() enviarPessoa = new EventEmitter();

  pessoas = {} as Pessoa[];
  pessoa = {} as Pessoa;

  constructor(private _service : PessoaService) { 
    this.pessoas = _service.buscarPessoas();
  }

  ngOnInit(): void {
  }

  sendPerson(pessoa : Pessoa){
    debugger;
    this.pessoa = pessoa;
    this.enviarPessoa.emit(this.pessoa); 
    console.log(this.pessoas);
  }

}
