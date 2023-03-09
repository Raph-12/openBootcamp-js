function factWithWhile(factnum){
    let result = factnum;
    
    if( factnum === 0 || factnum === 1 )
    return 1;
    
    while (factnum > 1){
        factnum--;
        result = result * factnum;
    }
    return result;
    }
    console.log(factWithWhile(10));