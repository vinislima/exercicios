// Desafio conta bancária

class Transferir {
    
    static executar(contaOrigem, contaDestino, valor){

        if(!contaOrigem instanceof ContaBancaria ||
            !contaDestino instanceof ContaBancaria) {
                throw new Error ("precisam herdar de ContaBancaria");
            }
            try {
                contaOrigem.sacar(valor);
                contaDestino.depositar(valor);
            } catch(e) {
                console.log("erro", e.message);
            }
    }
}


class Cliente {

    constructor(nome, documento, tipoDocumento) {
        this.nome = nome;
        this.documento = documento;
        this.tipoDocumento = tipoDocumento;
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPF");
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPNJ");
    }
}

const cliente1 = new PessoaFisica("vinicius", "12.123.123-88");
const cliente2 = new PessoaJuridica("ltda", "123.132.456/0001-01");

class ContaBancaria {

    constructor(cliente, numero){

        if(this.constructor === ContaBancaria) {
            throw new Error ("ContaBancaria é uma classe abstrata");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    }

    get dadosCliente (){

        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
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

const vinicius = new PessoaFisica("Vinicius", 1);
const maria = new PessoaJuridica("Maria", 2);

const cp1 = new ContaPoupanca(vinicius, 1);
const cp2 = new ContaPoupanca(maria, 2);
const cc = new ContaCorrente("Maria", 3);