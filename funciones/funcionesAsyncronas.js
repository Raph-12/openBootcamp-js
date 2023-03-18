
function miAsync(){
    //Hace una llamada a una base de datos externas
    //puede dar algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //Si esta todo correcto
    if (i !== 0) {
        resolve()
    } else{
        reject()
    }
})
miPromesa
.then(()=> console.log("Se ejecutado correctamente"))
.catch(()=> console.log('Arrojando Error'))
.finally(()=> console.log("Yo siempre me ejecuto"))