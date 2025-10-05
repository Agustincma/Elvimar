import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { getUserData } from '@/utils/GetUserData';
import {mockGeneralClientData} from '../../services/mocks/ClientMocks'
import { Avatar } from '@mui/material';

export const DrawerComponent = () => {
    return (
        <Box sx={{ width: 250, backgroundColor: '#9c9c9c', height: '96vh', borderRadius: '28px' }} role="presentation" >
            <List>
            <Box mb={5} mt={5}>
                <Avatar sx={{ bgcolor: '#fbc02d', width: 80, height: 80, fontSize: 32, margin: '0 auto 10px auto' }}>
                    {getUserData(mockGeneralClientData)}
                </Avatar>
            </Box>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default DrawerComponent