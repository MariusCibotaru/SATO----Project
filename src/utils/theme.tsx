import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: ["CustomFont", "sans-serif"].join(","),
    fontSize: 18,
    h1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 42,
      fontWeight: 500,  
    },
    h2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 38,
      fontWeight: 500, 
    },
    h3: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: 500, 
    },
    h4: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 28,
      fontWeight: 500, 
    },
    h5: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 22,
      fontWeight: 500, 
    },
    h6: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,  
    },
    body1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 500, 
    },
    body2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500, 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'CustomFont',
            fontStyle: 'normal',
            fontWeight: 500,
            src: `
              url('/fonts/Khand/Khand-Medium.ttf') format('truetype'),
            `,
          },
        ],
        body: {
          background: 'linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'linear-gradient(to top, #141416, #200122)', 
    },
    primary: {
      main: '#bb86fc',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: ["CustomFont", "sans-serif"].join(","),
    fontSize: 18,
    h1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 42,
      fontWeight: 500,  
    },
    h2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 38,
      fontWeight: 500, 
    },
    h3: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: 500, 
    },
    h4: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 28,
      fontWeight: 500, 
    },
    h5: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 22,
      fontWeight: 500, 
    },
    h6: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,  
    },
    body1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 500, 
    },
    body2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500, 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'CustomFont',
            fontStyle: 'normal',
            fontWeight: 500,
            src: `
              url('/fonts/Khand/Khand-Medium.ttf') format('truetype'),
            `,
          },
        ],
        body: {
          background: 'linear-gradient(to top,  #200122, #141416)', 
        },
      },
    },
  },
});
