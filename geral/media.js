
function media() {

    let total = 0;
    let qtd = arguments.length;

    for (let i = 0; i < qtd; i++) {
        if (typeof arguments[i] !== "number") {
            throw Error("Informar apenas números"); 
        }
        total += arguments[i];
    }
    return total / qtd;
}

let resultado = media();
console.log(resultado);