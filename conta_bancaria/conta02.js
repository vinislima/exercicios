// Desafio conta bancária

class ContaBancaria {

    constructor(cliente, numero){

        if(this.constructor === ContaBancaria) {
            throw new Error ("ContaBancaria é uma classe abstrata");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    }

    depositar(valor) {

        this.saldo += valor;
    }

    sacar() {
        if(valor > this.saldo) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor;
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor (cliente, numero){
        super(cliente, numero)
        this.aniversario = Date.now()
    }
}

class ContaCorrente extends ContaBancaria {

    constructor (cliente, numero){
        super(cliente, numero)
        this.limite = 0;
    }

    sacar(valor) {

        let disponivel = this.saldo + this.limite;
        if(valor > disponivel){
            throw new Error ("Saldo insuficiente")
        }
        this.saldo -= valor;
    }
}

const cp1 = new ContaPoupanca("Vinícius", 1);
const cp2 = new ContaPoupanca("João", 2);
const cc = new ContaCorrente("Maria", 3);