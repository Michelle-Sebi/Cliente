diamante("F")

function diamante (letra){
    let abc = [" ","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let posicionLetra = abc.indexOf(letra);
    
    let contador = 0;
    for (let h = 1; h < (posicionLetra*2); h++ ){
        let linea = [];
        for (let l=1; l < (posicionLetra*2); l++ ){
            if ( l==posicionLetra-contador || l==posicionLetra+contador ){
                if ( h < posicionLetra ){
                    linea.push(abc[h]);
                } else {
                    linea.push(abc[(posicionLetra*2)-h]);
                }
            }
            else {
                linea.push("-");
            }
        }
        if ( h < posicionLetra ) { 
            contador++;
        } else { 
            contador--;
        }
        console.log(linea.join(""));
    }
}