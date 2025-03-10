// const { fetch } = require('node-fetch')

async function posIIS(){

    try {
        let response = await fetch(`http://api.open-notify.org/iss-now.json`);
        console.log (`status: ${response.status}`);
        if(response.status !== 200){
            throw `Respuesta: ${response.status}`;
        }
        let data = await response.json();    
        
        let latitude = parseFloat(data.iss_position.latitude)
        let longitude = parseFloat(data.iss_position.longitude)
        
        let pos = [ latitude, longitude ]

        console.log("Postion:" +  pos)
        return pos
        
    }catch(error){
        console.log(`Error: ${error}`);
        return [0, 0];
    }
}
        
let map
async function drawMap(){

    let position = await posIIS();
    console.log ( "Position: " + position)

    map = L.map('map').setView(position, 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker(position).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    setInterval(async () => {
        const newPosition = await posIIS();
        marker.setLatLng(newPosition);
        map.setView(newPosition);
    }, 10000);
}
drawMap();
        


let divBoton = document.getElementById('boton')
let boton = document.createElement('button');
boton.innerHTML = 'CENTRAR'
boton.style.padding = '10px 20px';
boton.style.backgroundColor = '#09bff';
boton.style.color = '#000000';
boton.style.border = '2px solid #000000';

boton.addEventListener('click', async () => {
    const position = await posIIS();
    map.setView(position, map.getZoom());
});


divBoton.appendChild(boton);
