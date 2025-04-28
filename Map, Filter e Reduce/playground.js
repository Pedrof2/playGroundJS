const maca = {
    value: 2,
};

const orange = {
    value: 3,
};

//multiplicação de números com this

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg)
}

const nums = [2, 3]

console.log('this -> maçã (map) ', mapComThis(nums, maca))

console.log('this -> orange (map)', mapComThis(nums, orange))


//multiplicação de números sem this
const nums2 = [2, 3, 4, 5]

function mapsemThis(arr) {
    return arr.map((item) => item * 3)
}

console.log('no this ->', mapsemThis(nums2))

//some todos os números de um array

const nums3 = [2, 3, 4, 5]

const callbackFn = function (accumulator, currentValue, index, array) {
    return accumulator + currentValue
}

const soma = nums3.reduce(callbackFn, 0)
console.log('somar um array (Reduce) ->', soma)

const soma2 = nums3.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log('soma2 (arrowfunction) ->', soma2)

//retornando todos os numeros pares de um array utilizando filter
const nums4 = [2, 3, 4, 5]

const numerosPares = nums4.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
})

console.log('filtrando numeros pares ->', numerosPares)
//Criando uma lista de preços

const callbackFn2 = function (accumulator, currentValue, index, array) {
    return accumulator + currentValue.preco
}

const lista = [
    {
        nome: 'pasta de dente',
        preco: 2.90,
    },

    {
        nome: 'Detergente',
        preco: 3.50,
    }
]

const saldoDisponivel = 50.00

const somaLista = lista.reduce(callbackFn2, 0)

const result = saldoDisponivel - somaLista
console.log('resultado lista de compras ->', result)



