;(function(){

    let _quantidade = 0;
    let contador = 0;

    this.produto = {

        get quantidade() {

            console.log(`quantidade foi consultada ${++contador} vez${contador > 1 ? `es` : ''}`)
            return _quantidade;
        },

        set quantidade(valor) {

            if (valor > 0) {
                _quantidade = valor;
            }
        }
    }
})()

produto.quantidade = 20;
console.log(produto.quantidade);

produto.quantidade = 21;
console.log(produto.quantidade);

produto.quantidade = 22;
console.log(produto.quantidade);