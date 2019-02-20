import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase[] = FRASES;
  // tslint:disable-next-line:no-inferrable-types
  public instrucao: string = 'Traduza a frase:';
  // tslint:disable-next-line:no-inferrable-types
  public resposta: string = '';

  // tslint:disable-next-line:no-inferrable-types
  public rodada: number = 0;
  public rodadaFrase: Frase;

  // tslint:disable-next-line:no-inferrable-types
  public progresso: number = 0;

  // tslint:disable-next-line:no-inferrable-types
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // console.log('Componente painel foi destruido');
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
  }

  public verificarResposta(): void {
    // tslint:disable-next-line:whitespace
    if(this.resposta === this.rodadaFrase.frasePtBr) {
      // acertou
      // alert('Acertou');
      // trocar pergunta da rodada
      this.rodada++;
      // progresso
      this.progresso += (100 / this.frases.length);

      // tslint:disable-next-line:whitespace
      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }
      this.atualizaRodada();
    } else {
      // diminuir a variavel tentativas
      this.tentativas--;
      // tslint:disable-next-line:whitespace
      if(this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    // troca a frase
    this.rodadaFrase = this.frases[this.rodada];
    // limpa a resposta
    this.resposta = '';
  }

}
