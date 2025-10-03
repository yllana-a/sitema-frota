// Criação da Classe Veiculo (Abstração)
// 1. Crie uma classe abstrata (ou base) chamada Veiculo. Ela terá atributos comuns a
// todos os veículos, como modelo, ano e um status de ligado (privado).
// 2. Crie um método ligar() e outro desligar() para controlar o status, aplicando o
// Encapsulamento.
// 3. Crie um método abstrato obterDescricao() que será obrigatório nas classes
// filhas.
// 4. Crie um método acelerar() que exiba uma mensagem genérica de aceleração.

export abstract class Veiculo {
    protected modelo: string;
    protected ano: number;
    private ligado: boolean = false;

    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
    }
    public ligar(): void {
        this.ligado = true;
        console.log("veículo ligado.");
    }
    public desligar(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log("veículo desligado.");
        } else {
            console.log("veículo já está desligado");
        }
    }

    public abstract obterDescricao(): string;

    public acelerar(): string {
        return `estou acelerando.`
    }
}



