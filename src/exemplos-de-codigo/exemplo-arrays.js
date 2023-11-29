//Coleção de dados
 
let pokemon = ["pikachu", "charmander", "bulbasaur"]
console.log(pokemon[1])

let pokemonList = ["pikachu", "charmander", "bulbasaur"]

pokemonList.shift() //remove o primeiro elemento de um array
pokemonList.pop()   //remove o ultimo elemento do array
console.log(pokemonList)

let timePokemon = [
    ["pikachu", "M", "Level 1"],
    ["charmander", "F", "Level 4"]
]

console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2])

//Outro exemplo

const array1 = [1, 2, 3]
const firstElement = array1.shift()

console.log(array1)
//Saída esperada: Array [2, 3]

console.log(firstElement)
//Saída esperada: Array [1]