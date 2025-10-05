import { Box } from '@mui/material';
import React from 'react';
import UserCardComponent from '@/components/cards/UserCardComponent';
import UserClientFlagComponent from '../components/cards/UserClientFlagComponent';
import UserClientFullDataComponent from '@/components/cards/UserClientFullDataComponent';
import { mockObservations, mockClient } from '@/services/mocks/ClientMocks';
import UserClientBioComponent from '@/components/cards/UserClientBioComponent';

const UserLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: 'auto',
        p: 1,
        gap: 1,
        boxSizing: 'border-box',
      }}
    >
      {/* Columna derecha (cards) */}
      <Box
        sx={{
          width: { xs: '100%', md: '280px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          flexShrink: 0,
        }}
      >
        <UserCardComponent />
        <UserCardComponent />
      </Box>

      {/* Columna izquierda */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          minWidth: 0,
          overflowX: 'hidden',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '100%' }}>
          <UserClientFlagComponent />
        </Box>

        <Box sx={{ width: '100%', maxWidth: '100%' }}>
          <UserClientBioComponent />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowY: 'auto',
            pr: 1,
          }}
        >
          {mockObservations.map((obs, index) => (
            <UserClientFullDataComponent key={index} data={mockClient} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UserLayout;
