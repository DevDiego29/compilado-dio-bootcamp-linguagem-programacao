//Tipos de variáveis

let nomeDoJogador = "Diego o mago"
let idade = 31
let sexo = 'M'
let numeroTelefone = "(83)99659-2546"
let cpf = "101.409.944-75"
let selecionavel = true

//comando de saída
console.log("digite um nome para o seu jogador: ")

//declarando uma variavel
let nickname = " Diego o mago"
var nome = "o magon Diego"  // var é usado para declarar variavel global

//concatenando uma mensagem fixa mais uma variavel
console.log("bem vindo" + nickname)
// outra forma de concatenar texto com variavel é:
console.log(`bem vindo ${nome} sinta-se avontade`)

//declarando uma constante
const notificacao = "pokemon go diz: "

//concatenando a constante
console.log(notificacao + " tem um novo pokemon na sua area, bora pegar ?")
console.log(notificacao + " você foi derrotado, tente novamente mais tarde")

//mudando o valor da variavel
nickname = "Diego o rei"

//concatenando a variavel com outro valor
console.log(nickname + " você venceu")

let poteCafe = "Café São Braz"
let poteAcucar = "açucar mascavo"
let poteBiscoito = "biscoito de leite"
const vovo = "na cozinha da vovó tem: "


console.log(vovo + poteAcucar + " - " + poteBiscoito + " - " + poteCafe)
poteCafe = "café 3 corações"
console.log(vovo + poteAcucar + " - " + poteBiscoito + " - " + poteCafe)
