// Un nuevo Set con los nombres de tu familia
const family = ['Gabriela', 'Reyna', 'Elmer', 'Caro', 'Rafael']
const famSet = new Set(family)
console.log(famSet)

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo).
const modifiedSet = famSet.add('Rafael')
console.log(modifiedSet)

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const modifiedSet2 = famSet.add('Javascript')
console.log(modifiedSet2)