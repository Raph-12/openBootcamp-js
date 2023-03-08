//tipos
12;

"Hola;"

true;
false;

null;
undefined;

//null, undefined, false, 0 ==> todas son falsy
console.log(null ===  undefined)
if (null) {
    console.log("cumple")
} else {
    console.log("No cumple")
}

//notacion
// ; delimitar el final de una linea pero ya no es un requisito
// . El punto se usa en los objetos para acceder a los atributos
//[] Se usa para los arreglos y listas
// () los parentesis se usan para funciones
//{} Se usan para los objetos, funciones y estructuras de control

//[] Se usa para los arreglos y listas
const lista = ['hola', 1, true, undefined]
console.log(lista)

//{} Se usan para los objetos, funciones y estructuras de control
const movil = {
    altura: 12,
    anchura: 10,
    Marca: "Kia",
    tarjeta : {
        marca: "sandisk",
        gb: 20
    }
}
console.log(movil.tarjeta.gb)

//fechas se puede usar librerias de apoyo como moment.js 
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis)

const dia = ahora.getDate()
console.log(dia)
const mes = ahora.getMonth()
console.log(mes)
const year = ahora.getFullYear()
console.log(year)