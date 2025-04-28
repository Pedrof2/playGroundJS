const alunos = [
    {
        nome: 'Pedro',
        nota: 9,
        turma: '2A'
    },

    {
        nome: 'Ana',
        nota: 4,
        turma: '2B'
    }
];

function alunosAprovados(arr, num) {

    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (nota >= num) {
            aprovados.push(nome);
        } 
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5)); 