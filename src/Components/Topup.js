import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#673ab7',
      contrastText: '#ffebee',
    },
  },
});

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary" size="lg">
        TOP-UP
        </Button>
    </ThemeProvider>
  );
}


