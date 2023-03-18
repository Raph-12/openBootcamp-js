 function saludar(name){
    console.log('Hola', name)
 }

saludar('Rafa')

// Parametros por defecto
 function printNumbers(numbers = 12){
    console.log(numbers)
}
printNumbers(15)

// Funciones tipo flecha.
const array = [1,5,8,7,9,5,2];
const array2 = array.map((valor) => valor * 2)
console.log(array2);

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(12));

