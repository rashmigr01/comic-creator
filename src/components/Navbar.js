import React from 'react';
import Toggler from './Toggler';
import { Box, Typography } from '@mui/material';

export default function Navbar({ darkMode, handleClick }) {

  return (
    <Box component={'nav'} width={'100%'}>
      <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={{ xs: '2rem', md: '8rem' }} fontSize={'1rem'}>
          <Box>
            <Typography variant="h2"
                        component="h2"
                        textAlign="center"
                        color="primary"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        fontSize="2.5rem">
                Comic Creator
            </Typography>
          </Box>
        <Toggler darkMode={darkMode} handleClick={handleClick} />
      </Box>
    </Box>
  );
}
