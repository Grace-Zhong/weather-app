import {  Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.style';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Toolbar>
        <Button>
          <Link to='/'>
            Home
          </Link>
        </Button>
        <Button>
          <Link to='/contact'>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </div>
  );
};
export default Header;

