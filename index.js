import { Titular, buscartTitulares } from "./model/Titular.js";
import { Conta } from "./model/Conta.js";

let titulares = buscartTitulares()

let c1 = new Conta(1000, 1234, 4142, 2221342, titulares[0])
let c2 = new Conta(4271, 4212, 4142, 4218212, titulares[1])
let c3 = new Conta(8321521908, 5038, 4142, 4534245, titulares[2])

let contas = [c1, c2, c3]
