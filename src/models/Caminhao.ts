import {veiculo} from "./Veiculo";

export class Caminhao extends veiculo {
    
    constructor(modelo: string, ano: number, private capacidadeCarga: number) {
        super(modelo,ano);
    }

    public obterDescricao(): string {
        return `Caminhão: ${this.modelo}, Ano: ${this.ano}, Capacidade de Carga: ${this.capacidadeCarga}kg.`;
    }
}