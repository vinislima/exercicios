function quantoFaltaPara(m, d) {

    const dataAtual = new Date();
    
    dataAtual.setHours(0);
    dataAtual.setMinutes(0);
    dataAtual.setSeconds(0);
    dataAtual.setMilliseconds(0);

    let anoAtual = dataAtual.getFullYear();

    let nascimento = new Date(anoAtual, m - 1, d);

    const dataAtualTS = dataAtual.getTime();
    const nascimentoTS = nascimento.getTime();

    if(nascimentoTS < dataAtualTS) {
        nascimento.setFullYear(++anoAtual);
        nascimentoTS = +nascimento;
    }

    const dia = 24 * 60 * 60 * 1000;
    const diferenca = nascimentoTS - dataAtualTS;

    return parseInt(diferenca / dia);

}
