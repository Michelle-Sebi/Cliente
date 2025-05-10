export default async function searchDrinks(cadena){
    const url= ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')

    const nuevaCadena= encodeURI(cadena)

    const response = await fetch(url + cadena)
    if(!response.ok){
        throw new Error(
            response.error
        )
    }
    if(response.status !== 200 ){
        throw new Error(
            'Error:', response.status
        )
    }
    const data = await response.json()
    if(!data.drinks){
        return []
    }

    

    const result= data.drinks.map((drink) => {
        const ingredientes = []
        for (let index = 1; index <= 15; index++) {
            const ingrediente = drink[`strIngredient${index}`]
            if(ingrediente){
                ingredientes.push(ingrediente)
            }
        } 

        return{
        name : drink.strDrink,
        image : drink.strDrinkThumb,
        ingredientes : ingredientes}
    });


    console.log(result)
    
}