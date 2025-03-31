class Titular {

    constructor(nome, cpf, endereco, telefone, email, dataNasc){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.dataNasc = dataNasc
    }
}

function buscartTitulares() {
    let titular1 = new Titular('fulano pobre','40028922-22','81','11 9328338','falano@gmail.com','22.02.1999')
    
    let titular2 = new Titular('sicrano rico','43278324-55','4F','11 87527835','sicrano@gmail.com','3.05.2004')
    
    let titular3 = new Titular('beltrano','43278324-55','avenida brasil','11 53253223','beltranoo@gmail.com','21.03.2006')

    let titulares = [titular1, titular2, titular3]
    return titulares
}




export {Titular, buscartTitulares}