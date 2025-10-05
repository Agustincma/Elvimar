import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import DrawerComponent from '../components/navbar/DrawerComponent';

interface Props {
  children: ReactNode; // permite pasar cualquier JSX o componente
}

export const GeneralLayout: React.FC<Props> = ({ children }) => {
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
          ml: '270px', // deja espacio para el Drawer
          height: '100vh',
          overflowY: 'auto',
          p: 2,
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          User Information
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default GeneralLayout;
