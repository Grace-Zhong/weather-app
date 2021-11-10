import axios from 'axios'

const URL= 'https://openweathermap.org/data/2.5/weather';
const API_Key = 'bc6f1ed41c3d305a72056b51885c4b69';

const fetchWeather = async (query: String) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_Key
    }
  });
  return data;
}

export default fetchWeather;