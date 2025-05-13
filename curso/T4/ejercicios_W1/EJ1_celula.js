let celula = {
    clave1: 1,
    clave2: 2,
    clave3: true,
    clave4: 'ARN',
    clave5: 'ARNm',
     mitosis(){
        let celHija1 = {...this};
        let celHija2 = {...this};

        for (let key in this) {
            delete this[key];         
        }
        
        return[celHija1,celHija2];
    }
}