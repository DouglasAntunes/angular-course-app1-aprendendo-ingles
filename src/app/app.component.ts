import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-inferrable-types
  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    // console.log(tipo);
    this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
