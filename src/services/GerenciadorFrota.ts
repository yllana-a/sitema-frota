import { Motorista } from "../models/Motorista";
import { Veiculo } from "../models/Veiculo";

class GerenciadorFrota {
    veiculos: Veiculo[] = [];
    motoristas: Motorista[] = [];

    adicionarVeiculo(veiculo: Veiculo) {
        this.veiculos.push(veiculo);
        console.log(`\nVeículo adicionado com sucesso!`);
    }
    adicionarmotorista(motorista: Motorista) {
        this.motoristas.push(motorista);
        console.log(`\nMotorista adicionado com sucesso!`);
    }
    listaVeiculos(): void {
        this.veiculos.forEach((veiculo, index) => {
            console.log(`${index + 1}. ${veiculo.obterDescricao()}`);
            });
        
    }
}