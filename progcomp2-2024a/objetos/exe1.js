const prompt = require('prompt-sync')()
// npm install prompt-sync

let item2 = (vetor) => {
    vetor.forEach(
        obj => console.log(`Nome: ${obj.nome} e Nota: ${obj.nota}`)
    )
}

let item3 = (vetor) => {
    let objMaiorNota = vetor[0]
    vetor.forEach(
        obj => obj.nota > objMaiorNota.nota ? objMaiorNota = obj : null
    )
    console.log(objMaiorNota)
}


let item4 = (vetor) => {
    let soma = vetor.reduce(
        (acum, obj) => acum + obj.nota, 0
    )
    console.log(`A média das notas é ${soma / vetor.length}`)
}


// vamos criar uma função principal, que chama as outras
let principal = () => {
    // vamos tornar o vetor alunos com escopo local
    let alunos = [
        {nome: "Paulo", idade: 17, nota: 10},
        {nome: "Paula", idade: 18, nota: 9},
        {nome: "Pedro", idade: 19, nota: 8},
        {nome: "João", idade: 20, nota: 7},
        {nome: "José", idade: 21, nota: 6},
    ]
    let opcao
    do {
        console.log(`Informe\n 1.Item1 \n 2.Item2 \n 3.Item3 \n 4.Sair`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: item1(alunos);break
            case 2: item2(alunos); break
            case 3: item3(alunos); break
            case 4: item4(alunos); break
            case 5: console.log(`Saindo ...`); break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 4)    
}
principal()