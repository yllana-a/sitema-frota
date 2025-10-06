//Criação das Classes Filhas (Herança e Polimorfismo)

//1. Crie uma classe Carro que herde de Veiculo.Adicione um atributo específico para numeroPortas.
//2. Crie uma classe Caminhao que também herde de Veiculo. Adicione um atributo específico para capacidadeCarga.
//3. Em ambas as classes, sobrescreva o método obterDescricao() para que ele retorne uma descrição completa e específica do veículo, incluindo seus atributos próprios. Isso é Polimorfismo.

import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
private numeroPortas: number;

constructor(modelo: string, ano: number, numeroPortas: number) {
    super(modelo, ano);
    this.numeroPortas = numeroPortas;
}
public obterDescricao(): string {
    return `Carro: ${this.modelo}, Ano: ${this.ano}, ${this.numeroPortas} portas.`;
}
}