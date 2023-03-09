
// let saldo = 50;
// let cash = 25;

// if (cash < saldo) {
//     console.log("Tenemos Dinero")
// }else {
//     console.log("A trabajar que no hay dinero")
// }

// // Comparaciones

// if(5==='5'){
//     console.log("Si es igual")
// } else{
//     console.log('No es igual')
// }


// if(5 !== '5'){
//     console.log(" Es diferente")
// } else{
//     console.log('Es igual')
// }

// let max = 10 ;
// let min = 5;

// if(max > min){
//     console.log("Es mayor")
// } else {
//     console.log('Es Menor')
// }

//Bucles o ciclos
for (let i = 0; i < 10; i++) {
    console.log(i)
    
}

let list = [1,2,3,4,5,6,7,8,9,12,15,17]
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

//for of
for (const valor of list) {
    console.log(valor)
}

//for each
list.forEach(valor => {
    console.log(valor)
});

//for in

let persona = {
    nombre: "Rafael",
    apellido: "Peraza",
    edad: 30,
    isDeveloper: true
}

for (const key in persona) {
    console.log(key)
    console.log(persona[key])        
}

//while
let i = 0
let maz = 10;
while (i < maz) {
    console.log(i)
    i++ //la actualizacion se realiza dentro del ciclo
}

//Do...while este siempre se ejecuta la primera vez
i = 15;
do {
    console.log('Estoy en el do while')
} while (i < maz);

//AMbito de un bucle