/*
// cria uma função que soma dois valores
// a função se chama soma e recebe 2 parâmetros
function soma(a, b){
    let result = a + b
    console.log(`Resultado da soma ${result}`)
}
// chamar a função criada
soma(4, 9)
// função que recebe 2 parâmetros e retorna a multiplicação deles
function multiplicacao(a, b){
    let result = a * b
    return result
} 
// chama a função e mostra o resultado
console.log(`Resultado da multiplicação ${multiplicacao(4, 9)}`)

// função que não recebe parâmetro
function boaNoite(){
    console.log("Boa Noite !!!")
}
boaNoite()

// funções anônimas - função sem nome
// variável passa a ser uma função
let subtracao = function (a, b){
    let result = a - b
    console.log(`Resultado da subtração ${result}`)
}
subtracao(10, 2)

// criar uma função durante a chamada de uma outra função
setTimeout( function () {
    console.log("Esta frase foi executada após 5 segundos")
}, 5000)

// arrow function ou função com seta
// não tem necessidade de usar a palavra function, no lugar 
// usamos a seta
let divisao = (a, b) => {
    let result = a / b
    console.log(`Resultado da divisão ${result}`)
}
divisao(10, 2)

// função vai ter uma única linha de código
let boaTarde = () => console.log("Boa tarde")
boaTarde()

/* Crie uma arrow function chamada somarPares.
A função deve iterar sobre os números de 1 a 20.
Dentro dessa função, some todos os números pares (sem 
usar vetores). A função deve retornar o resultado da 
soma.*/

/*
let somarPares = () => {
    let soma = 0
    for(let i=1;i<=20;i++){
        if (i % 2 == 0){
            soma = soma + i
        }
    }
    return soma
}
console.log(somarPares())

// função que recebe um nome (string), a posição inicial e a final desejada
let pedaco = (nome, posInicio, posFinal) => {
    return nome.slice(posInicio, posFinal)
}

console.log(pedaco("Carlos Eduardo", 0, 6)) // carlos
console.log(pedaco("Carlos Eduardo", 7, 14)) // eduardo
console.log(pedaco("Carlos Eduardo", 7, 32)) // eduardo
*/
/*
let carros = ["Onix", "Palio", "Gol", "Uno"]

carros.map( carro => console.log(carro))

let numeros = [10, 20, 30, 40]
// multiplica por 2 todos os elementos do vetor
// map retorna um novo vetor
let dobrado = numeros.map(numero => numero * 2)
console.log(dobrado)

carros.map( (carro, posicao) => console.log(carro + " " + posicao))

let maiscula = carros.map( carro => carro.toUpperCase())
console.log(maiscula)

let concatena = carros.map( carro => carro.concat(" - Processada"))
console.log(concatena)
*/

let parImpar = (numero) => {
    if (numero % 2 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(parImpar(4))
console.log(parImpar(5))
// usando o operador ternário
let parImparOT = (numero) => {
    return (numero % 2 == 0) ? true : false
}
console.log(parImparOT(4))
console.log(parImparOT(5))
// deixando mais clean code
let parImparCC = (numero) => numero % 2 == 0
console.log(parImparCC(4))
console.log(parImparCC(5))

let media = (a, b, c) => {
    return (a + b + c) / 3
}
console.log(media(4, 5, 6))

// diferença entre map e filter
let vetor = [1, 2, 3, 4]
let soma10 = vetor.map( numero => numero + 10)
console.log(soma10)

let imparesMap = vetor.map(numero => numero % 2 == 1)
console.log(imparesMap)

let imparesFilter = vetor.filter(numero => numero % 2 == 1)
console.log(imparesFilter)

let nome = " Japão "
console.log(nome.trim())