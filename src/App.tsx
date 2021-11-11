import React from 'react';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import { Box } from '@mui/system';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
          }}
        >
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/contact' component={Contact} />
          </Switch>
          {/* <Footer /> */}
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
