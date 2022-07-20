
function calcImc (peso, altura) {

    if (typeof peso !== "number" || typeof altura !== "number") {
        throw Error("Informar apenas números");
    } else if (peso === undefined || altura === undefined) {
        throw Error("Faltou informar um parâmetro")
    } 
    return peso / (altura ** 2);
}

function classImc (imc) {
    if (imc <= 18.5) {
        return "Abaixo do peso";
    } else if (imc <= 24.9) {
        return "Peso normal";
    } else if (imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}

let imc = calcImc(85,1.85);
console.log(imc);
console.log(classImc(imc))