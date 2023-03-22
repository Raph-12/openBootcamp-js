//Formas de imporyat / Exportar modulos
// common js - require
// import ES6 - import

// const moduloMath = require('./mod/math.js')
const { factorial, suma} = require('./mod/math.js')

const fact = factorial(5)
console.log(fact)

const sum = suma(6,6)
console.log(sum)

//console.log(module)