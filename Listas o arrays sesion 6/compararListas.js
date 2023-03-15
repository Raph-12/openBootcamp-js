//como podemos comparar listas
// .every()

const array = [6,5,8,9,5,4,,12,-8]
// const result = array.every(valor =>{
//     if (typeof valor > 0){
//         return true
//     } else {
//          return false
//     }
// })
const result = array.every(valor => valor > 0)
console.log(result)

//Comparacion de listas
const arr1 = [1,2,3,4]
const arr2 = [1,2,3,4]


const compararArrays = (arr_1, array_2) => {
    if (arr_1.length !== array_2.length) return false
    const res = arr_1.every((valor,i) => valor === array_2[i])
    return res
} 

console.log(compararArrays(arr1,arr2))