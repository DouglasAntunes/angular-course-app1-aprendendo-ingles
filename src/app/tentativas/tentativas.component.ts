import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
    // console.log(this.coracoes);
  }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas - 1;
      this.coracoes[indice].cheio = false;
    }
  }

  ngOnInit() {
    // console.log('tentativas recebidas pelo painel: ' + this.tentativas);
  }

}
