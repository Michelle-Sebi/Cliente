import  { useState, useEffect } from "react";
import Loading from "./Loading";
import {getSpeciesSprite} from "./pokemon_api.js"

function PokeData(props) {
    const { id } = props; // Extraer el id de las props
    const [spriteUrl, setSpriteUrl] = useState(null); // Estado para la URL del sprite
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar el spinner

   
    // Efecto para cargar la imagen cuando cambia el id
    useEffect(() => {
        const fetchSprite = async () => {
            setIsLoading(true); // Mostrar el spinner
            const url = await getSpeciesSprite(id); // Obtener la URL del sprite
            setSpriteUrl(url); // Guardar la URL en el estado
            setIsLoading(false); // Ocultar el spinner
        };

        fetchSprite(); // Llamar a la función
    }, [id]); // Ejecutar cada vez que cambie el id

    return (
        <>
            {isLoading ? (
                <Loading /> // Mostrar el spinner si isLoading es true
            ) : (
                
                spriteUrl && (
                <>
                    <h2>PokeData</h2>
                    <div className='pokedata'>
                        <img src={spriteUrl} alt={`Pokémon con ID ${id}`} /> 
                    </div>
                </>
            )
        )}
        </>
    );
}

export default PokeData;