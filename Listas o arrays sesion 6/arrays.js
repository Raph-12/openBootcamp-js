let array = [1,2,3,4,5,6]
// acceder a los valores del array con su posicion
console.log(array[0])

//Metodos para introducir nuevos valores en arrays
// Push() para pponer valores al final
array.push('added at the end')
console.log(array)
//.Unshift()
array.unshift('added at the beginning')
console.log(array)

//Metodo para eliminar valores
// valores al final .pop()
let array1 = [12,24,48]
array1.pop()
console.log(array1)

// valores al inicio
let array2 = [12,24,48]
array2.shift()
console.log(array2)

//Metodo para nodificar eliminar o añadir
//.splice()
let array3 = [2,4,6,8,10]
// eliminar valores (indice, numValoresAEliminar)
array3.splice(0,2)
console.log(array3)

// Añadir valores .splice(indice, 0, 'hola)
array3.splice(3,0,'hola')
console.log(array3)

//Modificar valores .splice(indice, 1, valores)
array3.splice(3,1,12)
console.log(array3)

// como unir 2 listas
 const lista = ['hola',2, false, null]
 const lista1= ['adios', 8, true, undefined]
 const lista2= lista.concat(lista1)
console.log(lista2)


// Como unir 2 listas con Spread
console.log(...lista2)
const lista3 = [...lista1, ...lista2]
console.log(lista3)

//ERROR! 
const lista4 = [lista1, lista2]
console.log(lista4);

// Como obtener una lista a partir de otra lista .slice()
 const arr = [1,2,3, true, null, 'adios']
// SLICE NO MODIFICA EL VALOR ORIGINAL
console.log(arr.slice(0,-2))

// Iterar los valores de una lista
// Forma antigua y poco eficiente (for)
const arr1 = ['hola', 12,24,48, false];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

//FORMA ES6 (MAS EFICIENTE) .forEach()
let suma = 0;
const arraySum = [2,5,6,8,5,6,9]
arraySum.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma)


// Busqueda de un valor dentro de un array .find()
const arraySum1 = [2,5,6,8,5,6,9,12]
const variable = arraySum1.find(valor =>{
    if( valor === 12){
        return true
    }
})
console.log(variable)

const listaObjetos = [
    { nombre: 'Rafael', edad: 30 },
    { nombre: 'Gabriela', edad: 26},
    { nombre: 'Reyna', edad: 47},
    { nombre: 'Elmer', edad: 49},
    { nombre: 'Caro', edad: 28}
]

// const objeto = listaObjetos.find(o =>{
//     if(o.nombre === 'Rafael'){
//         return true
//     }
// })

//Manera mas eficas y corta
const objeto = listaObjetos.find(o => o.nombre === 'Gabriela')
console.log(objeto.edad)







