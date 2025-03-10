
import Score from './Score'
import Imagen from './Imagen'
import Answers from './Answers'
import { getSprite, setClickado } from '../pokemonSlice'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';

export default function Tablero() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSprite());
    }, [dispatch]);


    function nuevoJuego(){
        dispatch(getSprite())
        dispatch(setClickado(false))
    }

    return <>
        <div id="score">
            <Score/>
        </div>

        <div>
            <Imagen/>
        </div>

        <div id="answers">
            <Answers/>
        </div>

        <div className="next-container">
            <button 
            className="next"
            onClick={nuevoJuego}>
                Next question
            </button>
        </div>
    </>
  
}
