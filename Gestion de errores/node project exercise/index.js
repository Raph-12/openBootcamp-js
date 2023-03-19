const logger = require('./logger')

const permessage = sum =>{
    if(typeof sum === 'number'){
        return sum * 3
    }
}

const numb = 4;

try {
    console.log('Running properly')
    const result = permessage(numb)
    console.log(result)
} catch (e) {
    logger.error('Este mensaje es para decirle que esta incorrecto')
}finally{
    logger.info('Siempre me ejecuto')
}