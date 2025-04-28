const pessoas = [
    {
        nome: 'Pedro',
        idade: 25,
    },

    {
        nome: 'Ana',
        idade: 25,
    },

]

const animal = [
    {
        nome: 'Spayke',
        idade: 5,
    }
]

function calculaIdade(anos) {

    let pessoaIdade = [];

    for (let i = 0; i < this.length; i++) {
        const { nome, idade } = this[i];
        pessoaIdade.push(`Daqui a ${anos} anos, ${nome} terá ${idade + anos
            } anos de idade.`);
    }

    return pessoaIdade;
}

const umaPessoaCall = calculaIdade.call([pessoas[1]], 10);
const arrPessoasCall = calculaIdade.call(pessoas, 10);
const umaPessoaApply = calculaIdade.apply([pessoas[1]], [10]);
const arrPessoasApply = calculaIdade.apply(pessoas, [10]);
const animalCall = calculaIdade.call(animal, 10);


console.log("Call", umaPessoaCall);
console.log("Call", arrPessoasCall);
console.log("Apply", umaPessoaApply);
console.log("Apply", arrPessoasApply);
console.log("AnimalCall", animalCall);
