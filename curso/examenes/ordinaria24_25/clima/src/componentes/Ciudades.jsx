import React from 'react'
import {  useSelector } from 'react-redux';
import { selectFavoritas } from '../redux/climaSlice';

export default function Ciudades() {
    const favoritas = useSelector(selectFavoritas)
  
  return <>
    <h2>Ciudades Favoritas</h2>
    {favoritas.map((favorita, index)=>(
        <ul key={index} id="fav-cities-list">{favorita}</ul>
    ))}
    
  </>
}
