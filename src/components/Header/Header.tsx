import React from 'react';
import useStyles from './Header.style';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.btn}>
      This is Header Component.
    </div>
  );
};
export default Header;

