// exe1
let vetParaMat = (vet) => {
    let auxMat = []
    auxMat[0] = vet.slice(0, 3)
    auxMat[1] = vet.slice(3, 6)
    auxMat[2] = vet.slice(6, 9)

    return auxMat
}
let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let mat = vetParaMat(vet)
console.log(mat)
// exe2
let linhaMatriz = (mat, indiceLinha) => {
    return mat[indiceLinha]
}
let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(linhaMatriz(mat, 1))
console.log(linhaMatriz(mat, 0))
console.log(linhaMatriz(mat, 3))
let mat2 = [[1, 2], [3, 4]]
console.log(linhaMatriz(mat2, 1))

// exe3
let colunaMatriz = (mat, indiceColuna) => {
    return mat.map ( 
            vetor => vetor[indiceColuna]
            )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(colunaMatriz(mat, 1))

// exe4
let somaVetores = (mat) => {
    return mat.map(
        vetor => vetor.reduce(
            (acum, elem) => acum + elem, 0
        )
    )
}
let mat = [[2, 3, 4], [9, 8, 1], [3, 4, 5]]
console.log(somaVetores(mat))

// exe5
let prodVetMat = (mat, vetor) => {
    return mat.map (
        (vet, pos) => vet.reduce(
            (acum, elem) => acum + (elem * vetor[pos]), 0
        )
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vet = [1, 2, 3]
console.log(prodVetMat(mat, vet))

// exercício 7
let diagonalPrincipal = (mat) => {
    return mat.map(
        (vetor, i) => vetor.filter (
            (elem, j) => i == j
        )[0]
    )
} 
let mat = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
let novoVet = diagonalPrincipal(mat)
console.log(novoVet)

// exercício 8
let trocaVetorMatriz = (mat, vet, linhaInteresse) => {
    return mat.map(
        (vetor, i) => {
            if (i == linhaInteresse) {
                return vet
            }
            else {
                return vetor
            }
        }
    )
}
let mat = [[2, 3, 4], [6, 7, 8], [1, 5, 9]]
let vet = [10, 10, 10]
let novaMatriz = trocaVetorMatriz(mat, vet, 1)
console.log(novaMatriz)
*/
let nomes = ["zeca", "pedro", "luiz", "lucas", "jorge", "matheus"]
let nomesOrdenados = nomes.sort()
console.log(nomesOrdenados)

// problema 
let numeros = [5, 2, 1, 55, 123, 12]
let numerosOrdenados = numeros.sort(
    (a, b) => a - b
)
console.log(numerosOrdenados)

let ordenaVetorMatriz = (mat) => {
    mat.map(
        vetor => vetor.sort(
            (a, b) => a - b
        )
    )
}