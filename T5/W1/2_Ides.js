


function createIDGenerator(long){
    let count= 0;
    return function lenId(){
        let id = "";
        for(let i=0; i <= long; i ++){
            id +="0";
        }
        id = id + count; 
        count++;
        return id;
    }
}



const generateID5 = createIDGenerator(5); 
console.log(generateID5());
console.log(generateID5());
console.log(generateID5());