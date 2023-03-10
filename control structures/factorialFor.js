


function factorialize(n){
    let facnumber = 1
    for (let i = 1; i <= n; i++) {
        facnumber = facnumber * i;
    }
    return facnumber;
}
console.log(factorialize(5))
