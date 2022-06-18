function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} de idade.`
}

const pessoa1 = {
    nome: 'Maria Júlia',
    idade: 30,
}
const pessoa2 = {
    nome: 'Carla Rodrigues',
    idade: 26,
}
const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}

console.log(calcularIdade.apply(pessoa1, [7]))  // Com o apply colocar entre colchetes