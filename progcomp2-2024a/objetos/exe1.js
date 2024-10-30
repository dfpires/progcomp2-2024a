let alunos = [
    {nome: "Paulo", idade: 17, nota: 10},
    {nome: "Paula", idade: 18, nota: 9},
    {nome: "Pedro", idade: 19, nota: 8},
    {nome: "João", idade: 20, nota: 7},
    {nome: "José", idade: 21, nota: 6},
]
let item1 = (vetor) => {
    vetor.forEach(
        obj => console.log(`Nome: ${obj.nome} e Nota: ${obj.nota}`)
    )
}
item1(alunos)


let item2 = (vetor) => {
    let objMaiorNota = vetor[0]
    vetor.forEach(
        obj => obj.nota > objMaiorNota.nota ? objMaiorNota = obj : null
    )
    console.log(objMaiorNota)
}
item2(alunos)

let item3 = (vetor) => {
    let soma = vetor.reduce(
        (acum, obj) => acum + obj.nota, 0
    )
    console.log(`A média das notas é ${soma / vetor.length}`)
}
item3(alunos)