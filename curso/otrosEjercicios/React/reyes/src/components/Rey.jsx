import { useEffect } from "react";
import { useState } from "react";

function Rey({datos, onAction}){
    const {nombre, vacas, imagen}= datos
    const [voto, setVoto]=useState(0)

    const votar=()=>{
        setVoto(voto+1)
    }

    useEffect(()=>{
        onAction(nombre, voto)
    }, [voto])

    return<>
        <div className="cadaRey">
            <h1>{nombre}</h1>
            <div className="dieta">
                Come {vacas} vacas al día
            </div>
            <div>
                <img src={imagen}/>
            </div>
            <div className="cajaVotacion">
                <button onClick={votar}>Vota</button>
                <div className="votacion">{voto}</div>
            </div>
            
        </div>
    </>
}

export default Rey;

