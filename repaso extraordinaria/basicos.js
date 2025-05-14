//LINTER (Falta paquete eslint-plugin-react)
yarn add eslint-plugin-react --dev

//FETCH GENERICO
async function fetchURL(url) {
    const respuesta = await fetch(url)
    if (!respuesta.ok) {
        throw new Error(`HTTP error! estatus : ${respuesta.status}`)
    }
    return respuesta.json()
}

//ASYNC THUNK

//Con llamadas en paralelo
export const peticionInfoPokemon = createAsyncThunk(
    'peticionInfoPokemon',
    async function () {
        const pokemonIds = randomPokemonIds(4)
        
        const indiceCorrecto = Math.floor(Math.random()* 4)

        const promesas = pokemonIds.map(async id =>{
            const peticion = await fetchURL(`${server}/${id}`);
            const nombre = peticion.name
            const sprite = peticion.sprites.other["official-artwork"].front_default
            return {nombre: nombre, sprite: sprite }
        })

        const infoPokemons = await Promise.all(promesas)
        
        const respuesta = {infoPokemons, indiceCorrecto}
        console.log(respuesta)
        return respuesta
    }
)

//Sin llamadas en paralelo
export const peticionInfoBanderas = createAsyncThunk(
    'peticionInfoBanderas',
    async function () {
        const respuesta = await fetchURL(server)
        const infoBanderas = respuesta.map((pais) =>{
            const nombre = pais.name.common
            const flag = pais.flags.png
            return { nombre: nombre, bandera: flag}
        })
        
        const infoCuatroBanderas = [...infoBanderas]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

        const respuestas = infoCuatroBanderas.map(pais =>
           pais.nombre 
        )

        return {infoCuatroBanderas, respuestas}
    }
)

//EXTRAREDUCERS
extraReducers(builder){
    builder
    .addCase(peticionInfoBanderas.pending, (state, _action) => {
        state.loading = true
        state.error = null
    })
    .addCase(peticionInfoBanderas.fulfilled, (state, action) => {
        let indiceCorrecto = Math.floor(Math.random()* 4)
        state.loading = false
        state.infoBanderas = action.payload.infoCuatroBanderas
        console.log(state.infoBanderas) 
        state.respuestaCorrecta = state.infoBanderas[indiceCorrecto].nombre
        console.log(state.respuestaCorrecta)
        state.imagen = state.infoBanderas[indiceCorrecto].bandera
        console.log('imagen', state.imagen)
        state.respuestas = action.payload.respuestas
        console.log('respuestas', state.respuestas)
    })
    .addCase(peticionInfoBanderas.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
}


//INPUT Y BOTON
const [inputCiudad,setInputCiudad]= useState('')
function buscandoClima(){
    dispatch(setCiudad(inputCiudad)) 
}
return (
    <div>
        <input 
        type="text" 
        id="city-input" 
        placeholder="Ingresa una ciudad"
        value={inputCiudad}
        onChange={(e)=>setInputCiudad(e.target.value)}    
        />
        <button 
        id="search-btn"
        onClick={()=>buscandoClima()}>
            Buscar Clima
        </button>
        </div>
  )


  //USEEFFECT PARA PETICION (sustituye al setLoquesea del extrareducer y soluciona la asincronia del cambio de estado)

  useEffect(()=>{
    if(ciudad !== ''){
        dispatch(setClickado(true))
        dispatch(peticionClima(inputCiudad, unidadTemperatura))
        console.log('ciudad', ciudad) 
    }
},[ciudad,dispatch, inputCiudad, unidadTemperatura])


//EJEMPLOS DE ESTILO
<div id="forecast-info" style={{display:clickado?"block" : "none"}}>

style={{backgroundColor: color}}
{infoPokemons.map((pokemon, index)=>{
        let clase = 'answer'
        const esCorrecto = respuestaCorrecta === pokemon.nombre;
        const esSeleccionado = respuestaSeleccionada === pokemon.nombre;
        if(respondido && esSeleccionado){
          if(esCorrecto ){
            clase = 'correct'
          }else if(!esCorrecto){
            clase = 'wrong'
          }
        }

//QUE NO SE ROMPA POR OBJETO UNDEFINED
return (
    <div>
        {console.log(clima)}
        {clima?.main ? (
            <div 
            id="weather-info" 
            style={{display:clickado?"block" : "none"}}>
                <h2>Clima Actual</h2>
                <p id="city-name">{clima.name}, {clima.sys.country}</p>
                <p id="temperature">Temperatura: {clima.main.temp}</p>
                <p id="description">Descripción: {clima.weather[0].description}</p>
                <p id="humidity">Humedad: {clima.main.humidity}</p>
                <p id="wind-speed">Velocidad del viento: {clima.wind.speed}</p>
            </div>
        ) : (
            <p>Cargando Clima...</p>
        )}
    </div>
  )

  //O ASI
  <div>
            <li id="id">{name}, {country}</li>
            <p id="temperature">Temperatura: {clima?.main?.temp ?? "N/A"}</p>
            <p id="description">Descripción: {clima?.weather?.[0]?.description ?? "N/A"}</p>
            <p id="humidity">Humedad: {clima?.main?.humidity ?? "N/A"}%</p>
            <p id="wind-speed">Velocidad del viento: {clima?.wind?.speed ?? "N/A"} m/s</p>
      </div>

//LOADING
const loading = useSelector(selectLoading)
return <>
    <div>
      {loading 
        ? <img id="image" className="black" src="./question_mark.png" alt="Pokemon image"/>
        
        : <img id="image" className= {respondido? "":"black"} src={imagen} alt="Pokemon image"/>
      }
    </div>

</>  

//TRABAJAR CON COPIA DE ARRAY

function guardandoFavoritas(){
        
        console.log('ciudad', ciudad) 
        let nuevasFavoritas = [...favoritas]
        if (inputCiudad !== '' && !nuevasFavoritas.includes(inputCiudad)){
            nuevasFavoritas.push(inputCiudad)
        }
        dispatch(setFavoritas(nuevasFavoritas))
}
