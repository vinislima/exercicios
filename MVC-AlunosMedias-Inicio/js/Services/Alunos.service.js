class AlunosService {
    constructor() {
        this.alunos = []
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw TypeError("aluno têm que ser instância de AlunoModel")
        }
        this.alunos.push(aluno)
    }

    edit(aluno) {
        return aluno
    }
}