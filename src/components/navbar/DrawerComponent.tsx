'use client'
import * as React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getUserData } from '@/utils/GetUserData';
import { mockGeneralClientData } from '../../services/mocks/ClientMocks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export const DrawerComponent = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#9c9c9c',
        height: '90vh',
        borderRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
      }}
      role="presentation"
    >
      <Box mb={5} mt={3}>
        <Avatar
          sx={{
            bgcolor: '#fbc02d',
            width: 80,
            height: 80,
            fontSize: 32,
            margin: '0 auto 10px auto',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          {getUserData(mockGeneralClientData)}
        </Avatar>
      </Box>

      <List sx={{ width: '100%', px: 2 }}>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => router.push('/home')}
            sx={{
              borderRadius: 2,
              px: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#fbc02d',
                color: '#000',
                transform: 'scale(1.03)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => router.push('/userInfo')}
            sx={{
              borderRadius: 2,
              px: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#fbc02d',
                color: '#000',
                transform: 'scale(1.03)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Información del Usuario" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => router.push('/forms')}
            sx={{
              borderRadius: 2,
              px: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#fbc02d',
                color: '#000',
                transform: 'scale(1.03)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Formularios" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerComponent;
