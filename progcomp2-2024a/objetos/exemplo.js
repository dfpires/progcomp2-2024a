// vamos criar um objeto
let prod1 = {
    id: 1,
    nome: "Mouse Óptico",
    preco: 90.56,
    qtde: 12
}
let prod2 = {
    id: 2,
    nome: "teclado mecânico",
    preco: 154.00,
    qtde: 20    
}
console.log(prod1)
console.log(`Nome: ${prod1.nome} Qtde: ${prod1.qtde}`)

prod2.qtde = prod2.qtde + 10
prod2.preco = prod2.preco - 3
console.log(prod2)

console.log(prod1)

let produtos = []
// adiciona prod1 no vetor
produtos.push(prod1)
// adiciona prod2 no vetor
produtos.push(prod2)
console.log(produtos)
console.log(`Qtde de prod1 ${produtos[0].qtde}`)
console.log(`Nome de prod2 ${produtos[1].nome}`)
// outra forma de criar um vetor de objetos
let mensagens = [
    {id: 1, autor: "Pedro", conteudo: "bom dia", likes: 23},
    {id: 2, autor: "José", conteudo: "boa tarde", likes: 64},
    {id: 3, autor: "João", conteudo: "boa noite", likes: 90}
]

// faça uma função que recebe um vetor como parâmetro
// e mostre ao usuário apenas as mensagens com mais de 50 likes
let exe1 = (vetor) => {
    vetor.forEach(
        obj => (obj.likes > 50 ? console.log(obj): null)
    )
}
exe1(mensagens)
// faça uma função que recebe um vetor como parâmetro
// e retorna um outro vetor contendo os produtos com estoque crítico
// < 15
let exe2 = (vetor) => {
    return vetor.filter(
        obj => obj.qtde < 15
    )
}
console.log(exe2(produtos))