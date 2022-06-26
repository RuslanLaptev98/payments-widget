import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#85B6BF',
    },
    secondary: {
      main: '#5BC197',
    },
    error: {
      main: '#B91D1D',
    },
    text: {
      primary: '#85B6BF',
      secondary: 'rgba(133, 182, 191, 0.5)',
    },
    action: {
      disabledBackground: 'rgba(133, 182, 191, 0.5)',
    },
  },
  typography: {
    fontFamily: 'Electrolize, sans-serif',
  },
});

export default customTheme;
