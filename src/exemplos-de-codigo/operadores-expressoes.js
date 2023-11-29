//Operadores aritméticos

let num1 = 100
let num2 = 20
console.log("Resultado da adição: " + num1 + num2)
console.log("Resultado da subtração: " + num1 - num2)
console.log("Resultado da multiplicação: " + num1 * num2)
console.log("Resultado da divisão: " + num1 / num2)
console.log("Resto da divisão: " + num1 % num2)

let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

//Operadores de incremento e decremento

let contador = 1
contador++        //contador = contador + 1
contador--       //contador = contador - 1

console.log(contador)

//Operadores de atribuição

let preco = 10
preco += 4 //preco = preco + 4
preco -= 2 //preco = preco - 2

console.log(preco)

//Expressões matemáticas

let resultado = 2 * 5 + 5 //resolve-se primeiro a multiplicação

console.log(resultado)

resultado = 2 * (5 + 5) //resolve primeiro os parênteses

console.log(resultado)

//Operadores relacionais ou comparação

let numero = "1"
console.log(numero === 1) //retorna false, pois compara o tipo e valor

let marca = "Apple"
console.log(marca !== "Apple") //retorna false, pois estou negando

marca = "Apple"
console.log(marca !== "Samsung") //retorna true

let valor = marca === "Samsung" //retorna false
console.log(valor)

let nome = "Diego"
console.log(nome === "diego") ////retorna false pois faz diferenciação entre M e n

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario pode embarcar ? " + ehCPFBloqueado)

let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333-02"
let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("É um usuario invalido ? " + ehBloqueado)

//Sinais de Comparação 

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario > idadeMinima

console.log(idadePermitidaValida)

idadeUsuario = 18
idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeDoUsuario = 60
let resultadoEhTerceiraIdade = idadeDeCorte < idadeDoUsuario 

console.log(resultadoEhTerceiraIdade)

//AND (&&) - requisitos: >= 18 e visto está verificado

let idade = 18
let vistoVerificado = true
let resultadoFinal = (idade >= 18) && (vistoVerificado === true)

console.log(resultadoFinal)

//AND (&&) - 100 moedas coletadas E 1 item estrela

let moedasColetadas = 100
let item = "estrela"
let result = (moedasColetadas >= 100) && (item === "estrela")

console.log(result)

//OR (||) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva

let tempo = "chuva"
let itemColetado = "guarda chuva"
let podeSair = (tempo !== "chuva") || (itemColetado === "guarda chuva")

console.log("nosso personagem pode sair ? " + podeSair)

//NOT (!) - nega uma afirmação

let clima = "chuva"
let resultadoDele = clima === "chuva"
console.log(!!resultadoDele)

let tempoAgora = "chuva"
let horario = 8
let resultadoDeste = !((tempoAgora !== "chuva") && (horario > 6))
console.log(resultadoDeste)