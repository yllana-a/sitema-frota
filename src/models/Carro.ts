import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
private numeroPortas: number;
constructor(modelo: string, ano: number, numeroPortas: number) {
    super(modelo, ano);
    this.numeroPortas = numeroPortas;
}
public obterDescricao(): string {
    return `carro: ${this.modelo}, ${this.ano}, ${this.numeroPortas}`;
}
}