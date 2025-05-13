let control = false

function fizz(num){
    return new Promise((resolve) => {
        let randomDelay = Math.random()*(10000 - 100) + 100;

        setTimeout(function(){
            let contiene3 = num.toString().includes('3');
            if(num % 3 === 0 || contiene3){
                resolve('fizz');
            }else{
                resolve(num);
            }
        }, randomDelay);
    })
}

function prueba(){
    let result = Promise.resolve(); 
    
    for(let i = 1; i < 300; i++){
        result = result
        .then(()=>{
            return fizz(i)})
        .then((result)=>{
            console.log(result);
        })
    }
}

prueba();
