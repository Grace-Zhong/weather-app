import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefa'
    },
    secondary: purple
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
