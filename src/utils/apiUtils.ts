import axios from 'axios';

export const fetchWeather = (city : String) =>
  axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  });