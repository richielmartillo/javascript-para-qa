let imparOuPar = 14845456121564564867987511234564787984564564895549n
let resultado = ''

if (imparOuPar % 2n === 0n) {
    resultado = 'Número Par'
} else {
    resultado = 'Número Ímpar'
}

let salario = 1000
console.log(salario - 500)

//Operadores de comparação
console.log(10 > 5) // Maior que
console.log(10 < 5) // Menor que
console.log(10 >= 5) // Maior que ou igual
console.log(10 <= 5) // Menor que ou igual
console.log(10 == 10) // Igual a
console.log(10 === 10) // Identico
console.log(10 != 5) // Diferente
console.log('----------------------')
console.log(10 > 10) // Maior que
console.log(10 < 10) // Menor que
console.log(10 >= 10) // Maior que ou igual
console.log(10 <= 10) // Menor que ou igual

//Operadores lógicos

/*
TABELA VERDADE
operador AND - &&
true && true = true
true && false = false
false && true = false
false && false = false

operador OR - || 
true || true = true
true || false = true
false || true = true
false || false = false

operador NOT = !
!true = false
!false = true
*/

let anos = 10
let aconpanhadoDosPais = false
let result = ''

if (anos > 16) {
    result = 'Pode viajar sozinha!'
} else if (anos < 16 && aconpanhadoDosPais) {
    result = 'Pode viajar acompanhado dos pais!'
} else {
    result = 'Não pode viajar!'
}

document.getElementById('operadores').innerHTML = `
    O número ${imparOuPar} é: ${resultado} <br><br>
    Salário com descontos: ${salario - 250}<br>
    Salário em dobro: ${salario + salario}<br>
    Salário triplicado: ${salario * 3}<br>
    Salário dividido: ${salario / 2}<br>
    Salário com aumento de 10 % ${salario + salario * 0.1} <br>
    Idade:${anos} anos <br>
    Acompanhado dos pais: ${aconpanhadoDosPais ? 'Sim' : 'Não'} <br>
    Resultado: ${result}

    `
