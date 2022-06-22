const lista = [
    {
        nome : ' Sabão em pó',
        preco: 30,
    },
    {
        nome: 'Cereal',
        preco: 12,
    },
    {
        nome: 'Toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calcularSaldo(saldoDisponivel, lista));














/* Atividade 1

function somaNumeros(arr) {
   return arr.reduce(function(prev, current){
    console.log({prev});
    console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));

*/