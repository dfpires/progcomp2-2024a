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

let vetor = []
// adiciona prod1 no vetor
vetor.push(prod1)
// adiciona prod2 no vetor
vetor.push(prod2)
console.log(vetor)