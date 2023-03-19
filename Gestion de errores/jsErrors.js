
const miFuncion = val =>{
    if (typeof val === 'number'){
        return val * 2;
    }
    throw new Error('El valor debe ser numerico')
}

const num = 12
try {
    // Codigo que puede fallar
    console.log("Esta ejecutando Bien!")
    const doble = miFuncion(num)
    console.log(doble)
} catch (e) {
    // En caso de fallar quiero que ejecutes
    console.error('ERROOOOOOOOOOOOOR!!!')
    console.log(`El valor de e es: ${e}`)
} finally{
    console.log('Esto se ejecuta ya sea que funciones o no')
}

// Errores mas comunes InternalError, SyntaxError, TypeError,RangeError y ReferenceError
