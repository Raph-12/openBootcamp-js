// Strings

let str = "I am a text";
let str_single = 'I am a text single';

console.log(str,str_single);

//Metodos mas comunes de los strings
// Como saber la longitud de una cadena de caracteres

let strr = "Hola soy un string"
console.log(strr.length)

//Obtener partes de cadenas de caracteres
let slice_strr = strr.slice(0,5)
console.log(slice_strr)


// Reemplazar contenido en una cadena
let cadena = "Hola mi nombre es Rafa"
console.log(cadena)

//Al utilizar strings solo reemplaza la primera instancia
console.log(
    cadena.replace('Rafa','Gabriela' ))

let texto_largo = 'Cuando tú factorizas un número, tú estás multiplicando ese número por cada  número consecutivo menos uno.'

// Al usar expresion regular global /g reemplaza todas las instancias
console.log(texto_largo.replace('tú', 'vos'))
console.log(texto_largo.replace(/tú/g, 'vos'))

let input = 'Sagitario'
let db = 'escorpio'

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())

// Eliminar espacion al inicio y al final
let str1 = "   Este texto tiene espacios al final    "
console.log(str1.length)
console.log(str1.trim().length)
console.log(str1.trimEnd().length)
console.log(str1.trimStart().length)

//Obtener el caracter en cierta posicion
let str2 = "Hola soy el string 2"
console.log(str2.charAt(2))

// Obtener la posicion de una palabra dentro de una cadena
let str3 = "Hola soy Rafa y amo el futbol y Rafa"
console.log(str3.indexOf('Rafa'))
console.log(str3.lastIndexOf('Rafa'))

//Metodos de cadenas de texto usando regex/
let texto_largo1 = 'Cuando tú factorizas un número, tú estás multiplicando tú ese número por cada  número consecutivo menos uno.'

console.log(texto_largo1.match(/tú/g))

//Existe la palbra dentro del texto?
console.log(texto_largo1.includes('rafa'))

//Saber si empieza con una palabra
console.log(texto_largo1.startsWith('Cuando'))

//Saber si termina con una palabra
console.log(texto_largo1.endsWith('uno.'))