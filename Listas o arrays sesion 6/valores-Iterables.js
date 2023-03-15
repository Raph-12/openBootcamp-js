// .some()

const array = [,9,4,6,8,7,1,2,6,6,44,-1]
const res = array.some(valor => valor < 0)
console.log(res)

const listaObjetos = [
    { nombre: 'Rafael', edad: 30 },
    { nombre: 'Gabriela', edad: 26},
    { nombre: 'Reyna', edad: 47},
    { nombre: 'Elmer', edad: 49},
    { nombre: 'Caro', edad: 28}
]

const existeRafael = listaObjetos.some
(persona => persona.nombre === 'Rafael')
console.log(existeRafael)

// Como obtener una lista a partir de un objeto iiterable
const str = 'Hi this is Raf'
console.log(str[0])

const str_ar = Array.from(str);
console.log(str_ar)

const keys = array.keys()
const ar_key = Array.from(keys)
console.log(ar_key)