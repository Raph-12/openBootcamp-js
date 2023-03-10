// Operador .valueOf - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a)
console.log(b)
console.log(a + b)

console.log(b.valueOf())

//NaN (not a number) - Infinity
let n = Number('bye')
console.log(n)
console.log(isNaN(n))

//Como convertir los strings a numeros con Number, 

let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log(typeof Number(numero))

//parseInt y parseFloat
console.log(parseInt(numero))
console.log(parseFloat(numero))

//Numeros hexadecimales (base 16)

let numHex = '0x3a5b7';
console.log(parseInt(numHex))

//Obtener valores minimos y maximos en JS
