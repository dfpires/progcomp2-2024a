const prompt = require('prompt-sync')();

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
for(let i = 0; i< 3;i++){
    console.log(mat[i][i])
}
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