// Una función sin parámetros que devuelva siempre "true"

function alwaysTrue() {
    return true
}
console.log(alwaysTrue())

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function  saludar(){
  await new Promise(resolve => setTimeout(resolve, 5000))
  console.log("Hola soy una promesa")  
}
saludar()

// Una función generadora de índices pares automáticos

function* generarindex(){
    let index = 0
    while(true){
        yield index += 2
    }
}
const indexGenerator = generarindex()
console.log(indexGenerator.next())