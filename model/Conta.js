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

export {Conta}