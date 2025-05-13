function combineArrays(a,b){
    return [...a,...b];
}

let p =[1,2,5,6];
let l =['d','t','y'];

let result = combineArrays(p,l);
console.log(result); 