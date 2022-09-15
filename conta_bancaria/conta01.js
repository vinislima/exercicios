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

    depositar() {

        this.saldo += valor;
    }

    sacar() {
        throw new Error("método sacar() precisa ser implementado")
    }
}

const conta = new ContaBancaria("Vinícius", 1);