//Desafio: calculadora-partida-rankeadas 

function partidas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function rank(){
    let resultadoRanke = partidas(70,30)
    let nivelHeroi = ""
    if(resultadoRanke <= 10){
        nivelHeroi = "Ferro"
    }else if(resultadoRanke <= 20){
        nivelHeroi = "Bronze"
    }else if(resultadoRanke <= 50){
        nivelHeroi = "Prata"
    }else if(resultadoRanke <= 80){
        nivelHeroi = "Ouro"
    }else if(resultadoRanke <= 90){
        nivelHeroi = "Diamante"
    }else if(resultadoRanke <= 100){
        nivelHeroi = "Lendário"
    }else if(resultadoRanke >= 100){
        nivelHeroi = "Imortal"
    }
    return `O herói tem saldo de ${resultadoRanke} e está no nível ${nivelHeroi}`
}

console.log(rank())