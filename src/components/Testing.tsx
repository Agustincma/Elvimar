import { Box } from '@mui/material'
import React from 'react'
interface props {
    text: string
}

export const Testing: React.FC<props> = ({ text }) => {
    return (
        <Box sx={{ width: "auto", mb: 1, borderRadius: '28px', padding: 2, backgroundColor: '#1e1e1e', color: '#fff' }}>{text}</Box>
    )
}

export default Testing