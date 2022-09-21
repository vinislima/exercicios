alunos.forEach(aluno => {
    aluno.media = {}

    for(let materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia])

    }
})

const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlheaderMateriais = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return "<td>" + materia + "</td>"
}).join("")
console.log(htmlheaderMateriais)
htmlHeader.innerHTML += htmlheaderMateriais

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)