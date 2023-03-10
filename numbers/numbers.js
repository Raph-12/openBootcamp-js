// Presicion

let a = 0.1;
let b = 0.2;
//Esto es incorrecto js las trata asi debido a la posicion de las variables
console.log(a + b)
//Truco para la suma y obtener valores "Reales"
console.log(Math.round((0.1 + 0.2) * 100) / 100)

//Principales operacion aritmeticas
let ab = 3.5;
let ba = 4.8;

// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = ab.toString();
console.log(a_s)
console.log(typeof a_s)

//Redondeo de numeros decimales
let cd = 3.3
let dc = cd * 3;
console.log(dc)
//.toFix() Limita el numero de decimales al valor X
console.log(typeof dc.toFixed());

// .toPresicion Limita el numero de cifras significaticas
console.log(dc.toPrecision(2))
console.log(typeof dc.toPrecision(2))