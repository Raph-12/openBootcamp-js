
const suma = (a,b) => a + b;

const resta = (a,b) => a - b;

const mult = (a,b) => a * b;

const eleva = (a,b) => a * b;

const factorial = (a) =>{
    let factorial = 1;
for (let i = 2; i <=a ; i++) {
    factorial *= i  
}
return factorial
}



module.exports = {
    suma, 
    resta, 
    mult, 
    eleva,
    factorial
}