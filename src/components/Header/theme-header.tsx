import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          fontSize: '23px',
          marginLeft: '20px',
          marginRight: '20px',
        }
      }
    }
  },
});