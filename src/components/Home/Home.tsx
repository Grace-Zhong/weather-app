import { Card, Container, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Home = () => {

  let today = new Date().toLocaleDateString();

  return (
    <Card
    raised
    sx={{
      bgcolor: 'background.paper',
      margin: '150px auto',
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
          Date: { today }
        </Typography>
      </Box>
    </Card>
  );
};
export default Home;
