'use client'
import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandableSectionProps {
    title: string;
    children: React.ReactNode;
}

const ExpandableSectionComponent: React.FC<ExpandableSectionProps> = ({ title, children }) => {
    return (
        <Accordion
            disableGutters
            elevation={0}
            square={false}
            sx={{
                borderRadius: '28px',
                mb: 2,
                '&::before': {
                    display: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                aria-controls="panel-content"
                id="panel-header"
                sx={{
                    height: 100,
                    backgroundColor: '#ccc',
                    border: 'none',
                    color: 'white',
                    borderRadius: '28px',
                    '&:hover': {
                        backgroundColor: '#bbb',
                    },
                }}
            >
                <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default ExpandableSectionComponent;
