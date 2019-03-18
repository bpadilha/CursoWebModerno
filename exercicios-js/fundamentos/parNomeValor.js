// par nome/valor

const saudacao = 'Opa' // contexto téxico 1 - onde a variável foi definida fisicamente no codigo

function exec() { 
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valores

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente)