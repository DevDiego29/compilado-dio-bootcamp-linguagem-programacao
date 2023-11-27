// Legenda: 
// número 0: Knight
// número 1: Sorcerer
// número 2: Paladin
// número 3: Dwarf
// qualquer outro número inserido, vai trazer mensagem de erro.


class hero {
    constructor(nome , idade , tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(i){
        if ( i >= 0 && i < this.tipo.length){
        let attack;
        
        switch(this.tipo[i]){
            case "Knight":
            attack = "espada"
            break
            
            case "Sorcerer":
            attack = "magia"
            break
            
            case "Paladin":
            attack = "flechas"
            break
            
            case "Dwarf":
            attack = "Machado"
            break

            default:
                attack = "ataque indefinido";
        }
            
                console.log(`o ${this.tipo[i]} ${this.nome} atacou usando ${attack}`)
            
        } else {
            console.log("ERRO -- Por favor, insira o número correto do herói");
        }
        
    }   
}
let heroi = new hero ("Balrog" , "31" , ["Knight" , "Sorcerer" , "Paladin" , "Dwarf"])
heroi.atacar(5)  // -- insirir o número do heroi aqui