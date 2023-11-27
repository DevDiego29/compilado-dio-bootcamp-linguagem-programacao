// Exemplo de nota fiscal de compra de produtos usando função e variaveis.

var name = "Diego"
var age = 31
var products = ["webcam 1080p", "microfone fifine", "headset xpg "]
var value = [210.9 , 550.87 , 430.67]

notaFiscal(name,age, products, value)

function notaFiscal(name, age, products, value) {
    console.log(`o nome do comprador: ${name}`)
    console.log(`a idade do comprador: ${age}`)
    console.log(`o produto: ${products[0]}`)
    console.log(`o valor do produto: ${value[0]}`)
}


// Estrutura Json que serve como uma "caixa" para transportar todos os dados dentro dele para outro lugar

let invoice = {
    name: "Diego",
    age: 31,
    products: {
        a: ["webcam 1080p", 210.9],
        b: ["microfone fifine", 550.87],
        c: ["headset xpg " , 430.67]
    },
    taxes: 98.90
}

notaFiscal(invoice)

function notaFiscal(invoice) {
    console.log(`o nome do comprador: ${invoice.name}`)
    console.log(`a idade do comprador: ${invoice.age}`)
    console.log(`o produto: ${invoice.products}`)
    
}

// a lista de produtos aparece como "object, object" quando rodo o codigo, para resolver isso temos que fazer a desestruturação da seguinte forma usando o For:
let generateinvoice = {
    name: "Diego",
    age: 31,
    products: {
        a: ["webcam top", 210],
        b: ["microfone fifine", 550],
        c: ["headset xpg" , 430],
        d: ["tv de 100 polegadas" , 2300]
    }
}

notaFiscal(generateinvoice)

function notaFiscal(generateinvoice) {
    console.log(`o nome do comprador: ${generateinvoice.name}`)
    console.log(`a idade do comprador: ${generateinvoice.age}`)

     for (let index in generateinvoice.products) {                  // essa linha é padrao usar o for in para desestruturar um objeto dentro de um json 
       let [productsName, productsValue] = generateinvoice.products[index];   //idem
            
       console.log(`o produto: ${productsName} e custa R$ ${productsValue}`)   // dessa forma posso adicionar quantos produtos eu quiser no meu json sem mudar a estrutura do for
     }
}