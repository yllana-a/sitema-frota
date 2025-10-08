//Criação da Classe Motorista

//1. Crie uma classe chamada Motorista com atributos privados para nome, cpf e cnh.
//2. O cpf e a cnh devem ser protegidos com getters e setters para garantir que não possam ser alterados após a criação do objeto.
//3. Crie um método chamado dirigir() que exiba uma mensagem como "Motorista[nome] está dirigindo".

export class Motorista {
  private nome: string;
  private _cpf: string;
  private _cnh: string;

  constructor(nome: string, _cpf: string, _cnh: string) {
    this.nome = nome;
    this._cpf = _cpf;
    this._cnh = _cnh;
  }

  public get cnh(): string {
    return this._cnh;
  }
  public get cpf(): string {
    return this._cpf;
  }
  dirigir(): void {
    console.log(`Motorista ${this.nome} está dirigindo.`);
  }
}