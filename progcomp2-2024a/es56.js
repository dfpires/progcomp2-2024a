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