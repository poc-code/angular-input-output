import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas = {} as Pessoa[];
  pessoa = {} as Pessoa;

  constructor() {
    this.pessoas = [
      {Id: 1, Nome: 'John Doe', Email: 'johndoe@test.com', Ativo: true},
      {Id: 2, Nome: 'Jane Doe', Email: 'janedoe@test.com', Ativo: true}
    ]
   }

  buscarPessoas(): Pessoa[] 
  {
    return this.pessoas;
  }

  addPessoa(pessoa: Pessoa): Pessoa[]{
    this.pessoas.push(pessoa);
    return this.pessoas;
  }

  buscarPessoa(id: number): Pessoa{
    return this.pessoas.filter(function(item){
      return item.Id === id;
    })[0];
  }

}
