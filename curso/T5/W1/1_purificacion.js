const MINIMUM = 15;
function mergeValues(arrayOfIntegers) {
let element;
let sum = 0;
let arrayOfIntegersCopy =[...arrayOfIntegers];
while(element = arrayOfIntegersCopy.pop()) {
sum += element
}
sum = Math.max(sum, MINIMUM)
arrayOfIntegersCopy.push(sum);
return console.log("Resultado: " + arrayOfIntegersCopy + " Original: "+ arrayOfIntegers);
}
console.log(mergeValues([10,20,30,40])) // [100]
console.log(mergeValues([1,2,3,4])) // [15] (MINIMUM)



