const pai = {

    nome: "pai",
    falar: function (msg) {
        console.log(`${this.nome} está falando`)
    }
}

const filho = Object.create(pai, {nome: {value: "junior", enumerable: true}})

const obj1 = {

    a: "a",
    b: "b",
    c: "c"
}

const obj2 = {

    b: "b2",
    d: "d2"
}

// Object.defineProperty(obj2, "naoEnumeravel", {

//     value: "nao enumeravel"
// })

Object.defineProperties(obj2,  {

    naoEnumeravel: {
        value: "não enumeravel"
    },

     enumeravel: {
        value: "enumeravel",
        enumerable: true
     }
})

const filha = Object.assign({}, obj1, filho)

// const clone = Object.assign(obj2, obj1)
const obj5 = Object.assign({}, obj2)
console.log(obj5)

obj2.teste = "teste"

const obj3  = { ...obj1, ...obj2 }
console.log(obj3)

console.log(Object.keys(obj2));