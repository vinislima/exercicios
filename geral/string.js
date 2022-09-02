let telefone1 = "99548-3576";
let telefone2 = "9954-7852";

function escondeTelefone(numero) {
    let hifemPosicao = numero.indexOf("-");
    let numeroInicio = numero.slice(0, hifemPosicao);
    let numeroFinal = numero.slice(hifemPosicao + 1);
    let doisUltimosNumeros = numeroFinal.slice(-2);
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`;
}
console.log(escondeTelefone(telefone1));

