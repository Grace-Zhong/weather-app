import { Card, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchWeather } from '../../utils/apiUtils';

interface IWeather {
  id: number,
  main: string,
  description: string,
  icon: string,
}
interface IWeatherData {
  coord: object,
  weather: IWeather[],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  clouds: object,
  wind: object,
  visibility: number,
  dt: string,
  sys: object,
  timezone: number,
  id: number,
  name: string,
  cod: number
}

const Home = () => {

  let today = new Date().toLocaleDateString();

  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [city, setCity] = useState('Adelaide');

  const fetchData = async () => {
    const response = await fetchWeather(city);
    setWeatherData(response.data as IWeatherData);
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (event : React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter') {
      console.log('abc');
      fetchData();
    }
  }

  return (
    <Card
      raised
      sx={{
        bgcolor: 'background.paper',
        margin: '100px auto',
        height: 500,
        width: 800,
        borderRadius: '3%',
        opacity: '55%'
      }}>
      <Box
        sx={{
          margin: '15px 0px 0px 15px',
          fontSize: '30px',
        }}
      >
        <TextField
          variant="standard"
          placeholder="Search City Here..."
          sx={{
            marginTop: "10px"
          }}
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={handleKeyPress}
        />
        <IconButton size="large">
          <SearchOutlinedIcon />
        </IconButton>

        <Typography
          component="span"
          sx={{
            fontSize: '25px',
            position: 'relative',
            left: '340px'
          }}
        >
          Date: {today}
        </Typography>
      </Box>
      <Box
      sx={{
        // display: 'flex',
        padding: '15px',
      }}
      >
        {weatherData &&
          (
            <div>
              <p>{weatherData.name}</p>
              <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather img"/>
              <p>{weatherData.weather[0].main}</p>
              <p>{Math.round(weatherData.main.temp)}°F</p>
            </div>
          )}
      </Box>
    </Card>
  );
};
export default Home;
