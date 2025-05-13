
import { selectFavoritas } from './redux/climaSlice'
import { useSelector } from 'react-redux';

export default function CiudadesFavoritas() {
    const favoritas = useSelector(selectFavoritas) 
  
    return (
        <div id="favorite-cities">
            <h2>Ciudades Favoritas</h2>
            {favoritas.map((ciudad, index)=>(
                <ul id="fav-cities-list" key={index}>{ciudad}</ul>
            ))}
        </div>
    )
}

    
