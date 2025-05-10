export default async function searchIngredients(arrayIngredientes){
    const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

    const urls = []
    arrayIngredientes.map(ingrediente => {

        const encodeIngrediente = encodeURI(ingrediente)
        const urlCompleta = url + encodeIngrediente 
        urls.push(urlCompleta)
        return  urls
    });

    
    const promesas =  urls.map(peticion =>
        fetch(peticion).then(res =>res.json()))
        
    const resultado =await Promise.all(promesas)
    console.log(resultado)    

}