
// var nome = "Richard" // Var é uma forma antiga do Java Script


let nome = "Richard" // Let é a forma atual do Java Script de definir uma variável
let idade = 36
let profissao = "QA"
const nacionalidade = "Brasileira"
console.log(nome, idade, profissao)

nome = "Richard Marlon Balestrim"
idade = 46
document.getElementById('variaveis').innerHTML = `
Nome: ${nome} <br>
Idade: ${idade} <br>
Profissão: ${profissao} <br>
Nacionalidade: ${nacionalidade} <br>
`