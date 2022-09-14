if (String.prototype.replaceAll) {
    
    String.prototype.replaceAll = function(busca, troca) {

        if (!(busca instanceof String || typeof busca === "string")){

            throw Error("Informar uma string")
        }

        if (!(troca instanceof String || typeof troca === "string")){

            throw Error("Informar uma string")
        }

        return this.valueOf().split(busca).join(troca);
    }
}