function fizz(num) {
    return new Promise((resolve, reject) => {
        let randomDelay = Math.random()*(1000 - 100) + 100;
        const contiene3 = num.toString().includes('3');

        setTimeout(function(){
            if(num % 3 === 0 || contiene3){
                resolve('fizz')
            }else{
                resolve(num)
            }
        }, randomDelay);
    })
}

function imprimir(){
    let result = Promise.resolve();

    for (let index = 1; index < 300; index++){
        result = result
        .then(()=>{
            return fizz(index)})
        .then((result)=>{
            console.log(result)}
        )
            
    }
}
            
imprimir();
    