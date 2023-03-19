const logger = require('./logger')

const permessage = sum =>{
    if(typeof sum === 'number'){
        return sum * 3
    }
}

const numb = 'h';

try {
    console.log('Running properly')
    const result = permessage(numb)
    console.log(result)
} catch (e) {
    logger.error('Este mensaje es para decirle que esta incorrecto')
}finally{
    console.log('Siempre me ejecuto')
}