const alunos = [
    {
        nome: 'João Rodrigo Nunes',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Sofia Maria Medeiros',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo Siqueira Junior',
        nota: 6,
        turma: '2C',
    },  
    {        
        nome: 'Miguel Jordão da Silva',
        nota: 3,
        turma: '2C', 
    },
   ]
function alunosAprovados(arr, media) {
    let aprovados = []
    for(let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i]

        if(nota >= media) {
            aprovados.push(nome)
        }
    }
        return aprovados
}
        console.log(alunosAprovados(alunos, 7)) //5 se refere a média