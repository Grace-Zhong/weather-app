import React from 'react';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import useStyles from './App.style';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contact} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
