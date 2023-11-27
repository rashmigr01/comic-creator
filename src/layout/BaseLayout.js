import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import AppLayout from './AppLayout';

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  return (
    <Box className={darkMode ? 'dark' : 'light'}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <AppLayout />
        </Grid>
      </Grid>
    </Box>
  );
}
