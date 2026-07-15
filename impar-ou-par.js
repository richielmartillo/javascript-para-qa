function verificarParOuImpar() {
    const entrada = prompt('Digite um número inteiro')

    if (entrada === null || entrada.trim() === '') {
        alert('Digite um número válido')
        return
    }

    try {
        const numero = BigInt(entrada)

        if (numero % 2n === 0n) {
            alert('O número digitado é Par')
        } else {
            alert('O número digitado é Ímpar')
        }
    } catch {
        alert('Digite apenas um número inteiro válido')
    }
}