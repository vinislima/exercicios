if (String.prototype.replaceAll) {
    
    String.prototype.replaceAll = function(busca, troca) {

        return this.valueOf().split(busca).join(troca);
    }
}