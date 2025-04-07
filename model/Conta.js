import { Titular, buscartTitulares } from "./Titular.js"
class Conta {

    constructor(saldo, senha, agencia, digito, titular){

        this.saldo = saldo
        this.senha = senha
        this.agencia = agencia
        this.digito = digito
        this.titular = titular

    }

    autenticar(agencia, digito, senha){


    }

    visualizarSaldo(){


    }

    saque(valor){

    }

    depositar(valor){

    }

    transferir(contaOrigem, contaDestino){

    }

    cobrarTaxa(){

    }
}

function pegarContas(titulares) {
        
        
        let c1 = new Conta(1000, 1234, 4142, 3321, titulares[0])
        let c2 = new Conta(4271, 4212, 4142, 4218212, titulares[1])
        let c3 = new Conta(10000, 5038, 4142, 4534245, titulares[2])
        
        let contas = [c1, c2, c3]
        
        return contas
}

export {Conta, pegarContas}