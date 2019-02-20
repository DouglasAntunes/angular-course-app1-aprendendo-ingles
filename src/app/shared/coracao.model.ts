export class Coracao {
    constructor(
        public cheio: boolean = true,
        public urlCoracaoCheio: string = './assets/coracao_cheio.png',
        public urlCoracaoVazio: string = './assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(): string {
        // tslint:disable-next-line:whitespace
        if(this.cheio) {
            return this.urlCoracaoCheio;
        } else {
            return this.urlCoracaoVazio;
        }
    }
}
