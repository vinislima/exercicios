class AlunoModel {
    constructor({nome, _id, notas} = {notas: {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.generateId()

        if(this._id > AlunoModel.maxId) {
            AlunoModel.maxId = this._id
        }
    }

    generateId() {
        return AlunoModel.maxId + 1
    }
}

AlunoModel.maxId = 0