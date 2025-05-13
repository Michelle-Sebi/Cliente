
import Loading from "./Loading";
import { useEffect } from "react";
import { useState } from "react";

async function getSpeciesSprite(id){
  try{
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if(!respuesta.ok){
      throw new console.error(`${respuesta.status}`);
    }
  
    const datos = await respuesta.json();
    return datos.sprites.front_default;
    
  }catch(error){
    console.error('Error con la petición', error);
    return null;
  }

}

function PokeData({id}) {
  const [sprite, setSprite] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(()=>{
    setLoading(true);
    getSpeciesSprite(id).then((url)=>{
      setSprite(url);
      setLoading(false);
    })
  })

  return (
    <>
      <h2>PokeData</h2>
      <div className='pokedata'>
          {loading ? <Loading/> : <img src={sprite} alt="pokemon image" />}
      </div>
    </>
  )
}

export default PokeData
