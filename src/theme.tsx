import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffccbc',
      light: '#ffffee',
      dark: '#cb9b8c',
    },
    secondary: {
      main: '#a5d6a7',
      light: '#d7ffd9',
      dark: '#75a478',
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 374, // phone
      md: 1024, // tablet
      lg: 1440, // desktop
      xl: 1920,
    },
  },
});
