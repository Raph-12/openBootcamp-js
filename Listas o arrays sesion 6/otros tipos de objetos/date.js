// La fecha de hoy
const today = new Date()
console.log(today)

//  La fecha de tu nacimiento
const dob = new Date(1992, 11, 12)
console.log(dob);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const latedate = today > dob;
console.log(latedate);

//Una variable que contenga el día de tu nacimiento
const dayOfBirth = dob.getDate()
console.log(dayOfBirth)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const monthOfBirth = dob.getMonth()
console.log(monthOfBirth)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearOfBirth = dob.getFullYear()
console.log(yearOfBirth)