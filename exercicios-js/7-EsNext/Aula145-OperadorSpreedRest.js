// Operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função 

//usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12345.99
}

const clone = {
    ativo: true,
    ...funcionario
}

console.log(clone)

//usar spread com array

const grupoA = ["João", "Pedro", "Gloria"]
const grupoFinal = ['Maria', ...grupoA, 'raphaela']

console.log(grupoFinal)