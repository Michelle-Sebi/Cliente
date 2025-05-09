import { fetch } from './fakeFetch.js';

const apiKey = 'superduperdupersuper';

let favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

const searchButton = document.getElementById('search-btn');
const saveFavButton = document.getElementById('save-fav-btn');
const cityInput = document.getElementById('city-input');
const tempUnitSelect = document.getElementById('temp-unit');
const weatherInfo = document.getElementById('weather-info');
const forecastInfo = document.getElementById('forecast-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const forecastList = document.getElementById('forecast-list');
const favCitiesList = document.getElementById('fav-cities-list');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const fetchWeatherData = (city, unit) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

const fetchForecastData = (city, unit) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

const displayWeather = (data) => {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperatura: ${data.main.temp}°`;
    description.textContent = `Descripción: ${data.weather[0].description}`;
    humidity.textContent = `Humedad: ${data.main.humidity}%`;
    windSpeed.textContent = `Velocidad del viento: ${data.wind.speed} m/s`;

    weatherInfo.style.display = 'block';
};

const displayForecast = (data) => {
  forecastList.innerHTML = '';
  data.list.slice(0, 5).forEach((item) => {
      const listItem = document.createElement('li');

      // Crear el icono del clima
      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      icon.alt = item.weather[0].description;

      // Crear la información del clima
      const date = new Date(item.dt * 1000).toLocaleString();
      const temp = `${item.main.temp}°`;
      const description = item.weather[0].description;

      listItem.innerHTML = `
          ${icon.outerHTML}
          <p>${date}</p>
          <p>${temp}</p>
          <p>${description}</p>
      `;

      forecastList.appendChild(listItem);
  });

  forecastInfo.style.display = 'block';
};

const displayFavoriteCities = () => {
    favCitiesList.innerHTML = '';
    favoriteCities.forEach((city) => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        favCitiesList.appendChild(listItem);
    });
};

const searchWeather = async () => {
  const city = cityInput.value.trim();
  if (city === '') return;

  const unit = tempUnitSelect.value;

  // Realiza ambas peticiones en paralelo
  try {
      const [weatherData, forecastData] = await Promise.all([
          fetchWeatherData(city, unit),  // Obtiene el clima actual
          fetchForecastData(city, unit)   // Obtiene la predicción
      ]);

      // Muestra los resultados
      displayWeather(weatherData);
      displayForecast(forecastData);

  } catch (error) {
      console.error("Error al obtener los datos del clima:", error);
  }
};

const saveFavoriteCity = () => {
    const city = cityInput.value.trim();
    if (city !== '' && !favoriteCities.includes(city)) {
        favoriteCities.push(city);
        localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
        displayFavoriteCities();
    }
};

// searchButton.addEventListener('click', searchWeather);
searchButton.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    searchWeather();
});
saveFavButton.addEventListener('click', saveFavoriteCity);

// Inicializa la vista con las ciudades favoritas
displayFavoriteCities();
