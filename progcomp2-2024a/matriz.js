const prompt = require('prompt-sync')();
/*
// entrada dados matriz
let mat = []
for(let i=0;i<3;i++){
    console.log(`Informe os elementos da linha ${i}`)
    mat[i] = [] // criando um vetor dentro da matriz
    for(let j=0;j<3;j++){
        mat[i][j] = prompt(`Informe elemento da coluna ${j}: `)
    }
} 
// calcula diagonal principal
console.log(`Elementos da diagonal principal`)
let soma = 0
for(let i = 0; i< 3;i++){
    console.log(mat[i][i])
    soma = soma + mat[i][i]
}
console.log(`Soma da DP ${soma}`)

console.log(`Elementos da diagonal secundária`)
for(let i = 0; i < 3; i++){
    console.log(mat[i][2-i])
}
console.log(`Apresente apenas os elementos da linha 1`)
for(let j = 0; j < 3; j++){
    console.log(mat[1][j])
}
console.log(`Apresente apenas os elementos da coluna 2`)
for(let i = 0; i < 3; i++){
    console.log(mat[i][2])
}


let vetor = [1, 2, 3, 4]
vetor.forEach(
    elemento => console.log(elemento)
)

let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
// percorre a matriz
matriz.forEach( 
        vet =>vet.forEach( 
                elemento => console.log(elemento) 
            ) 
        )
// cria nova matriz com o valor dobrado da original
let novaMatriz = matriz.map ( 
    vet => vet.map (
        elemento => elemento * 2        
    )
)
console.log(novaMatriz)

// para apenas percorrer e exibir dados, usamos o forEach
// ao invés do map. Exemplos:
matriz.forEach( 
    vet =>vet.forEach( 
            elemento => console.log(elemento) 
        ) 
    )
// criar uma nova matriz contendo apenas elementos pares da original
let matrizPares = matriz.map(
    vet => vet.filter(
        elemento => elemento % 2 == 0
    )
)
console.log(matrizPares)

// mostrar a soma da matriz 
let soma = 0
matriz.forEach ( 
    vet => vet.forEach (
        elemento => soma = soma + elemento)
    )
console.log(`A soma total é ${soma}`)

// mostrar a soma de cada uma das linhas do vetor
matriz.forEach( 
    vet => {   
        soma = 0
        vet.forEach ( 
            elemento => soma = soma + elemento
        )
        console.log(`Somas parciais ${soma}`)
    }
)
*/
let mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vetSoma = mat1.map(
    vetor => vetor.reduce(
        (acum, elem) => acum + elem, 0
    )
)
console.log(vetSoma)
