// Set Es un conjunto no ordenado no permite repetir elementos
//nos permite que no se repitan los valores.
const array  = [1,2,3,4,5,1,2,{id: 12}]

const miSet = new Set(array)
console.log(array)
console.log(miSet)

// .add() es para agregar valores
miSet.add(9)
console.log(miSet)

// eliminar valores .delete()
miSet.delete(1)
console.log(miSet)

// eliminar todos los valores del set .clear()

// .has() similar to include in arrays
console.log(miSet.has(4))

// .size
console.log(miSet.size)

miSet.forEach(valor =>{valor
    console.log(valor)
})

const it_miset = miSet.values()
console.log(it_miset)

// convertir de nuevo a array
const ar_miSet = [...miSet]
console.log(ar_miSet)

