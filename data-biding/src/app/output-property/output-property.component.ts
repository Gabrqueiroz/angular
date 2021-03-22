import { viewClassName } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorInicial: number = 15;

  @Output() mudouValor = new EventEmitter()

  @Input() valor:number =0;

 //2 @viewClassName('campoInput') campoValorInput : HTMLElement;

  incrementa(){
    this.valor ++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }

  onMudouValor(evento){
    console.log(evento);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
