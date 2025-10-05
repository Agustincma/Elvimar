import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import { GeneralClientData } from '../../types/GeneralClient.types';
import { mockGeneralClientData } from '../../services/mocks/ClientMocks';

export const UserClientFlagComponent: React.FC<{ data?: Partial<GeneralClientData> }> = ({ data = mockGeneralClientData }) => {

    return (
        <Card sx={{ minWidth: 'auto', borderRadius: '28px', backgroundColor: '#1e1e1e', color: '#fff', padding: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>"{data.clientFlag}"</Typography>
            </CardContent>
        </Card>
    );
};

export default UserClientFlagComponent;
