function soma() {
    let numbers = [...arguments];
    return numbers.reduce(function (soma, atual) {
        return soma + atual
    }, 0);
};

let numeros = soma(1, 2, 3, 4, 5);
console.log(numeros);

function media () {
    return soma(...arguments) / arguments.length
}

let mediana = media(1, 2, 3, 4, 5);
console.log(mediana);


