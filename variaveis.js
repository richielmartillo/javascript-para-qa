
// var nome = "Richard" // Var é uma forma antiga do Java Script


let nome = "Richard" // Let é a forma atual do Java Script de definir uma variável
let idade = 36
let profissao = "QA"
const nacionalidade = "Brasileira"
console.log(nome, idade, profissao)

nome = "Richard Marlon Balestrim"
idade = 46
// nacionalidade = "Australiano" // Este trecho retorna erro, pois a constante não pode ser alterada

// Concatenação 
console.log("---------------------")
console.log("Nome: " + nome + ", ", idade + ", Teste")


// Interpolação
console.log("---------------------")
console.log(`Nome: ${nome}, Idade: ${idade}, Teste, Horário: ${new Date().toLocaleTimeString()}`)

// Strings com aspas simples, duplas e backeticks (crases)
const stringSimples = 'Eu sou "Richard"'
const stringDuplas = "Eu sou 'Richard Marlon Balestrim'"
const stringBacketicks = `Eu sou o "Richard" 'da Silva'`
const stringEscape = "Eu sou o \"Richard Marlon Balestrim\""

document.getElementById('variaveis').innerHTML = `
Nome: ${nome} <br>
Idade: ${idade} <br>
Profissão: ${profissao} <br>
Nacionalidade: ${nacionalidade} <br>
Horário: ${new Date().toLocaleTimeString()} <br>
Mensagem com strings: ${stringEscape}
 `