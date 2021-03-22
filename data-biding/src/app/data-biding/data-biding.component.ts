import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

url: string = 'https://loiane.training/';

valorAtual: string = '';
valorSalvo: string = '';
cursoAngular: boolean = true ;
NomeDoCurso: string = 'Angular';

urlImagem: string = 'http://lorempixel.com/g/400/200/';

botaoClicado(){
alert('Botão Clicado')
};

nome: string = 'abc';

pessoa: any = {
  nome: 'def',
  idade: 20
}

isMouseOuverOut: boolean = false ;

SalvarValor(valor){
  this.valorSalvo = valor ;
}

onKeyUp(evento: KeyboardEvent){
console.log()
this.valorAtual = (<HTMLInputElement>evento.target).value;

}

getValor(){
  return 5;
}

getCurso(){
  return true ;
}

onMouseOuverOut(){
 this.isMouseOuverOut =! this.isMouseOuverOut;
}

  constructor() { }

  ngOnInit(): void {
  }

}
