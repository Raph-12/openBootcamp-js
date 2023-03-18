// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const info = {
        name: 'Rafael',
        lastname: 'Peraza',
        age: 30,
        height: 5.3,
        isDeveloper: true
    }

// Una variable que obtenga tu edad a partir del objeto anterior
const propAge = 'age'
console.log(info[propAge]);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const meAndFriends = [
    {info},
    {
        name: 'Josue',
        lastname: 'Mata',
        age: 36,
        height: 7,
        isDeveloper: false
    },
    {
        name: 'Gerardo',
        lastname: 'Marroquin',
        age: 34,
        height: 7.5,
        isDeveloper: false
    }
]
console.log(meAndFriends)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const theOldest = meAndFriends.sort((a,b)=> a.age - b.age)
console.log(theOldest)