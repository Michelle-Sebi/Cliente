import FORECASTS from './forecasts.js';
import WEATHERS from './weathers.js';

async function fetch(url) {
  const city = new URL(url).searchParams.get('q');
  const random = Math.random();

  if (random < 0.1) {
    return {
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: async () => ({ message: 'City not found' })
    };
  }
  if (random < 0.2) {
    return {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({ message: 'Internal server error' })
    };
  }

  if (url.includes('/weather')) {
    const fakeWeatherData = { ...WEATHERS[Math.floor(Math.random() * WEATHERS.length)], name: city };
    return {
      ok: true,
      status: 200,
      json: async () => fakeWeatherData
    };
  } else if (url.includes('/forecast')) {
    const fakeForecastData = { ...FORECASTS[Math.floor(Math.random() * FORECASTS.length)], city: { name: city } };
    return {
      ok: true,
      status: 200,
      json: async () => fakeForecastData
    };
  }

  return {
    ok: true,
    status: 404,
    json: async () => ({ message: 'Unknown request' })
  };
};

export {
  fetch
}
