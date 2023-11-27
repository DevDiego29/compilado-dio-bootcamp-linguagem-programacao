class formaDeBolo{
    constructor(saborDaMassa , saborDoRecheio ){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }   // criação da classe
    
    escrever(){              // podemos criar uma função aqui para imprimir uma mensagem padrao, concatenando as variaves
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
    assar(){
        console.log(`assando o bolo de ${this.saborDaMassa}`)
    }
}

let boloDaFesta = new formaDeBolo ("baunilha" , "doce de leite")  // esse é o objeto, onde dou valor para as variaveis e usamos ela
let boloExclusivo = new formaDeBolo("nuttela" , "sonho de valsa") // posso criar novos sabores (variaveis) aqui

boloDaFesta.escrever() // chamando a variavel "boloDeFesta" junto com o valor da função "escrever"
boloExclusivo.escrever() // posso chamar a nova variavel por aqui
boloExclusivo.assar()


class sorcerer{
    constructor(poderComW , poderComS , poderComA , poderSpecialComD) {
        this.poderComW = poderComW
        this.poderComS = poderComS
        this.poderComA = poderComA
        this.poderSpecialComD = poderSpecialComD
    }

    cura(){
        console.log(`ao apertar a tecla W, ${this.poderComW} `)
    }
    fire(){
        console.log(`ao apertar a tecla S, ${this.poderComS} `)
    }
    shock(){
        console.log(`ao apertar a tecla A, ${this.poderComA} `)
    }
    damage(){
        console.log(`ao apertar a tecla D, ${this.poderSpecialComD} `)
    }
}

let poderes = new sorcerer ("cura a vida" , "ataque bola de fogo" , "ataque onda de choque" , "poder especial" )


poderes.cura()
poderes.fire()
poderes.shock()
poderes.damage()