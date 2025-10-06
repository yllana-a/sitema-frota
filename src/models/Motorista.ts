//Criação da Classe Motorista

//1. Crie uma classe chamada Motorista com atributos privados para nome, cpf e cnh.
//2. O cpf e a cnh devem ser protegidos com getters e setters para garantir que não possam ser alterados após a criação do objeto.
//3. Crie um método chamado dirigir() que exiba uma mensagem como "Motorista[nome] está dirigindo".

class motorista {
    private nome: string;
    private _CPF: number;
    private _CNH: number;

    constructor(nome: string, _CPF: number, _CNH: number) {
      this.nome = nome;
      get this._CPF = _CPF;
      get this._CNH = _CNH;
    }
    dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }
}