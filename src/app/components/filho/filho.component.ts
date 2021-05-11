import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {
  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();
  @Input() idPessoa : number = 1;

  pessoa = {} as Pessoa;
  constructor(private _service : PessoaService) {
    this.pessoa = _service.buscarPessoa(this.idPessoa);
   }

   ngOnInit() {
    console.log(this.recebeFamilia);
    console.log('Objeto familia recebido do component pai via Input: ', this.recebeFamilia);
}

  sendData(pessoa : Pessoa): void {
    this.pessoa = pessoa;
    console.log(pessoa);
  }

  feedback() {
    console.log('Resposta para o component pai', this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  }

}
