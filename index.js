import { Titular, buscartTitulares } from "./model/Titular.js";
import { Conta, pegarContas } from "./model/Conta.js";
import express from 'express'

const app = express()

app.get('/', function (req, res){
    
    let titulares = buscartTitulares()
    let contas = pegarContas(titulares)
    res.json(contas)

})

app.get('/autenticar/:agencia/:digito/:senha', function (req, res) {
    // obter da requisição os dados
    let agencia = parseInt(req.params.agencia)
    let digito = parseInt(req.params.digito)
    let senha = parseInt(req.params.senha)

    
    // // buscar dados das contas
    let titulares = buscartTitulares()
    let contas = pegarContas(titulares)

    contas.forEach(conta =>{
       if (conta.agencia == agencia && conta.senha == senha && conta.digito == digito) {
        res.json({resp: true})
       }
    })
    res.json({resp: false})
})

app.listen(3000)