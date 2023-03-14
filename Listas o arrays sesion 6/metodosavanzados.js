//.map() .filter() .reduce()

const array = [ 'USA', 'Canada', 'SV', 'Costa Rica'];

const countries = array.forEach( c => {
    console.log(c)
}) // no hace nada este codigo

const newArray = array.map((valor, indice) => `${indice + 1} ${valor}`
)
console.log(newArray)

// Metodo Filter
const listaObjetos = [
    { nombre: 'Rafael', edad: 30 },
    { nombre: 'Gabriela', edad: 26},
    { nombre: 'Reyna', edad: 47},
    { nombre: 'Elmer', edad: 49},
    { nombre: 'Caro', edad: 28}
]

// const personasMayores = listaObjetos.filter(obj =>{
//     if(obj.edad > 30){
//         return true
//     } else {
//         return false
//     }
// }) 
const personasMayores = listaObjetos.filter (obj => obj.edad >30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== 'Elmer')
console.log(nuevaLista);

//Metodo .reduece()
const valores = [3,56,23,5,90,100]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma);


















