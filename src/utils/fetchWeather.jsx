const API_KEY = 'ca6af1cd673bd6658297ef19e8978bf3';
const units = "metric"

const fetchWeather = (city) => {
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const { lat, lon } = data[0];
      return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`City not found`);
    });
};

export default fetchWeather;