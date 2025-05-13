import { useSelector } from 'react-redux';
import { selectClickado, selectPrediccion } from './redux/climaSlice';

export default function Prediccion() {
    const clickado =useSelector(selectClickado)
    const prediccion=useSelector(selectPrediccion)

    
    return (
        
      <div id="forecast-info" style={{display:clickado?"block" : "none"}}>
            <h2>Predicción</h2>
            <ul id="forecast-list">
                {prediccion?.list?.slice(0, 5).map((item,index) => {
                    const iconSrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                    const iconAlt = item.weather[0].description;
                    const date = new Date(item.dt * 1000).toLocaleString();
                    const temp = item.main.temp;
                    const description = item.weather[0].description;
                
                    return(
                        <li key={index}>  
                            <img src={iconSrc} alt={iconAlt}/>
                            <p>{date}</p>
                            <p>{temp}</p>
                            <p>{description}</p>
                        </li> 
                    )    
                })}
            </ul>
        </div>
    )
}
