import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import DrawerComponent from '../components/navbar/DrawerComponent';
import UserLayout from '@/layouts/UserLayout';

export const GeneralLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden', // evita scroll en el layout principal
      }}
    >
      {/* Drawer fijo a la izquierda */}
      <Box
        sx={{
          width: 250,
          height: '100vh',
          flexShrink: 0,
          position: 'fixed',
          left: 10,
          top: 10,
        }}
      >
        <DrawerComponent />
      </Box>

      {/* Contenido principal con scroll */}
      <Box
        sx={{
          flexGrow: 1,
          ml: '250px',
          height: '100vh',
          overflowY: 'auto',
          p: 2,
          bgcolor: 'background.default',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography variant='h2'>User Information</Typography>
        <UserLayout />
      </Box>
    </Box>
  );
};

export default GeneralLayout;
