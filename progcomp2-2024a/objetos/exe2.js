const prompt = require('prompt-sync')();

let produtos = [
    {nome: "sabonete", quantidade: 10, preco: 5.80},
    {nome: "shampoo", quantidade: 5, preco: 15.80},
    {nome: "condicionador", quantidade: 15, preco: 25.80},
    {nome: "perfume", quantidade: 8, preco: 55.80}
]
let item1 = (vetor) => {
    vetor.forEach(
        obj => console.log(`Nome: ${obj.nome} e qtde: ${obj.quantidade}`)
    )
}
item1(produtos)

let item2 = (vetor) => {
    let objMenorQtde = vetor[0]
    vetor.forEach(
        obj => obj.quantidade < objMenorQtde.quantidade ? objMenorQtde = obj: null
    )
    console.log(objMenorQtde)
} 
item2(produtos)

let item3 = (vetor) => {
    return vetor.reduce(
        (acum, obj) => acum + (obj.quantidade * obj.preco), 0
    )
}
console.log(item3(produtos))

let item4 = (vetor) => {
    vetor.push(
        {
            nome: prompt(`Informe nome`), 
            quantidade: Number(prompt(`Informe qtde`)),
            preco: Number(prompt(`Informe preço`))
        }
    )
    console.log(`Produto adicionado com sucesso`)
}
item4(produtos)

let item5 = (vetor) => {
    return vetor.filter(
        obj => obj.quantidade <= 5
    )
}
console.log(item5(produtos))