function* generarId(){
    let id = 0;
    while(true){
        id++
        if (id === 10){
            return id
        }
        yield id //Esperando hasta que se llame de nuevo
    }
}
const gen = generarId();
console.log(gen.next().value) // value para deje de mostrarse como objeto
console.log(gen.next().value)
console.log(gen.next().value)

