import { Card, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchWeather } from '../../utils/apiUtils';

const Home = () => {

  let today = new Date().toLocaleDateString();
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('Sydney');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWeather('London');
      console.log(response);
    }
    fetchData();
  }, []);

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
        // onKeyPress={getWeather}
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
          display: 'flex',
          padding: '5px',
        }}
      >
        WeatherField
      </Box>
    </Card>
  );
};
export default Home;
