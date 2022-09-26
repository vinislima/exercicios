class AlunosService {
    constructor() {
        this.alunos = []
        this.updateAlunosFromLocalStorage()
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw TypeError("aluno têm que ser instância de AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    edit(aluno) {
        return aluno
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }
    
    updateAlunosFromLocalStorage() {
        const local = localStorage.getItem("alunos")
        if(local) {
            const local = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}