const fecha = new Date()
console.log(fecha)

//Atencion- Los meses inicializan en 0
const fecha2 = new Date(1992, 11, 12)
console.log(fecha2)

//se puede iniciar la fecha con los milisegundos
const fecha3 = new Date(1000000000000)
console.log(fecha3)

//strings
const fecha4 = new Date('october 8, 1950 12:12:12')
console.log(fecha4)

// Mayor o mas tarde en tiempo
console.log(fecha2 > fecha3)

// para comparar fechas deben cambiarse a milisegundos usando get time
console.log(fecha2.getTime() === fecha3.getTime)

// metodo .localString()
console.log(fecha2.toLocaleString("en-US"))