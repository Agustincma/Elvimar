import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import { Observations } from '../../types/GeneralClient.types';
import { mockObservations } from '../../services/mocks/ClientMocks';

export const UserClientBioComponent: React.FC<{ data?: Partial<Observations>}> = ({data = mockObservations }) => {

    return (
        <Card sx={{ width:'auto', borderRadius: '28px', backgroundColor: '#1e1e1e', color: '#fff', padding: 2 }}>
            <CardContent sx={{ textAlign: 'start' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Dato: </Typography>
                <Typography variant='h6'>{mockObservations[0].text}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserClientBioComponent;
