function soma() {
    
    let numeros = [];

    Array.prototype.forEach.call(arguments, function (argument){
        numeros.push(argument);
    });
    return numeros.reduce(function (sum, atual){
        return sum + atual;
    }, 0);
};
console.log(soma(1, 2, 3, 4, 5));
