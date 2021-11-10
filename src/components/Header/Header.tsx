import {  Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.style';

const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar
      sx={{
        backgroundColor: 'rgba(138, 138, 138, 0.2)'
      }}
    >
      <Button
        sx={{
          fontSize: '23px'
        }}
      >
        <Link to='/' className={classes.link}>
          Home
        </Link>
      </Button>
      <Button
        sx={{
          fontSize: '23px',
          paddingLeft: '30px',
        }}
      >
        <Link to='/contact' className={classes.link}>
          Contact
        </Link>
      </Button>
    </Toolbar>
  );
};
export default Header;

