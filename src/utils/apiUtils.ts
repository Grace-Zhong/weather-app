import axios from 'axios';

const API_Key = '310664e25db38716c441fd296106f6c9';

export const fetchWeather = (city : String) =>
  axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  });