import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import { GeneralClientData } from '../../types/GeneralClient.types';
import { mockGeneralClientData } from '../../services/mocks/ClientMocks';
import { getUserData } from '@/utils/GetUserData';

export const UserProfileCard: React.FC<{ data?: Partial<GeneralClientData> }> = ({ data = mockGeneralClientData }) => {
    return (
        <Card sx={{ maxWidth: 250, borderRadius: '28px', backgroundColor: '#1e1e1e', color: '#fff', padding: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#fbc02d', width: 80, height: 80, fontSize: 32, margin: '0 auto 10px auto' }}>
                    {getUserData(mockGeneralClientData)}
                </Avatar>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{data.firstName} {data.lastName}</Typography>
                <Typography variant='body2' sx={{ color: '#bbb', marginBottom: 2 }}>Job Rol And Company</Typography>
                <Box sx={{ textAlign: 'left', marginTop: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Details</Typography>

                <Typography variant="body2">Company Name: {data.companyName}</Typography>
                <Typography variant="body2">Email: {data.email}</Typography>
                <Typography variant="body2">Phone: {data.phone}</Typography>

                </Box>

            </CardContent>
        </Card>
    );
};

export default UserProfileCard;
