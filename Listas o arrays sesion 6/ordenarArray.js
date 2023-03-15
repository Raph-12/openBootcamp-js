// .sort() => MODIFICA EL ARRAY
const array = [2,5,2,3,6,5,8]
console.log(array);

array.sort((a,b) => {
    if (a < b){
        return +1
    } else if(a > b) {
        return -1
    }else{
        return 0;
    }
})
console.log(array)

//Ordenar unicamente arrays numericos
const arrNumericos = [,9,5,6,2,1,4,6,2,125]
arrNumericos.sort((a,b) => b - a)
console.log(arrNumericos)

// Interesante in arrays de objetos
const listaObjetos = [
    { nombre: 'Rafael', edad: 30 },
    { nombre: 'Gabriela', edad: 26},
    { nombre: 'Reyna', edad: 47},
    { nombre: 'Elmer', edad: 49},
    { nombre: 'Caro', edad: 28}
]

// listaObjetos.sort((a,b) =>{
//     if(a.edad < b.edad){
//         return -1
//     } else if (a.edad > b.edad){
//         return +1
//     } else {
//         return 0
//     }
// })

listaObjetos.sort((a,b)=> a.edad - b.edad)
console.log(listaObjetos)