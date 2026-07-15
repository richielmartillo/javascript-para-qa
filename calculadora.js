
function somar(a, b) {
    return a + b
}
console.log('Soma: ' + somar(10, 5))


// Função de divisão

function dividir(a, b) {

    if (b === 0) {
        return 'Divisão por zero não é permitida'
    }

    return a / b
}
console.log('Divisão: ' + dividir(10, 5))
console.log('Divisão com erro: ' + dividir(10, 0))

// Função de subtração

function subtrair(a, b) {
    return a - b
}

console.log('Subtração: ' + subtrair(10, 5))


// Função de multiplicação

function multiplicar(a, b) {
    return a * b
}

console.log('Multiplicação: ' + multiplicar(10, 5))

