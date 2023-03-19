const obj = {
    id: 4,
    name: 'Rafa',
    lastname: 'Peraza',
    isDeveloper: true,
    favBooks: ['ydnJS', 'El codigo limpio'],
    '4-juegos': [1,2,3,4]
}

console.log(obj['4-juegos']);

// Llamamos a propiedades
const prop = 'isDeveloper';
console.log(obj[prop])
// no copia el obj si no que toma el mismo valor en nums no aplica
const obj2 = obj;
console.log(obj2)

obj2.name = 'David'
console.log(obj2.name)

// para copiar
const obj3 = {...obj}
console.log(obj3.name)

obj3.name = 'Stark'
console.log(obj.name)
console.log(obj3.name)

// Como ordenar listas de objetos en funcion de propiedad
const movieList = [
    { titulo: 'IronMan', year: 2008 },
    { titulo: 'Titanic', year: 1997 },
    { titulo: 'El Juez', year: 2010 },
    { titulo: 'Ted', year: 2012 },
    { titulo: 'Avengers', year: 2021 },
]
console.log(movieList)

//Ordenar de la mas antigua a la mas nueva con sort
const orderedList = movieList.sort((a,b) => a.year - b.year )
console.log(orderedList);
