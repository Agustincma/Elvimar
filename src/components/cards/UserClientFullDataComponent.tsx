import React from 'react'
import { Client } from '../../types/GeneralClient.types'
import { Card, CardContent, Typography, Box } from '@mui/material'

export const UserClientFullDataComponent: React.FC<{ data?: Partial<Client> }> = ({ data }) => {
  if (!data) 
    return (
      <Card>
        <CardContent>
          <Typography>No data available</Typography>
        </CardContent>
      </Card>
    )

  // Convierte cada sub-objeto en items {propName, value}, excluyendo 'label'
  const getItemsFromObject = (obj: any) => {
    return Object.entries(obj)
      .filter(([key]) => key !== 'label')
      .map(([key, value]) => ({
        propName: key,
        value
      }))
  }

  return (
    <Card sx={{ width: "auto", maxWidth: '100%', mb: 1, borderRadius: '28px', padding: 2, backgroundColor: '#1e1e1e', color: '#fff' }}>
      <CardContent sx={{ textAlign: 'start' }}>
        {Object.entries(data).map(([key, value]) => {
          if (!value) return null

          // Usamos label del objeto si existe, sino usamos la key
          const sectionTitle = (value as any).label || key

          // Convertimos el objeto en items
          const items = typeof value === 'object' && !Array.isArray(value)
            ? getItemsFromObject(value)
            : [{ propName: key, value }]

          // Dividimos en dos columnas
          const middle = Math.ceil(items.length / 2)
          const leftItems = items.slice(0, middle)
          const rightItems = items.slice(middle)

          return (
            <Box key={key} sx={{ marginBottom: 1 }}>
              {/* Título de la sección */}
              <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1, color: '#F8DB46' }}>{sectionTitle}</Typography>

              <Box sx={{ display: 'flex', gap: 4 }}>
                {/* Columna izquierda */}
                <Box sx={{ flex: 1 }}>
                  <ul style={{ paddingLeft: '1em' }}>
                    {leftItems.map((item, index) => (
                      <li key={index}>
                        <Typography variant='body2'><strong>{item.propName}:</strong> {String(item.value)}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                {/* Columna derecha */}
                <Box sx={{ flex: 1 }}>
                  <ul style={{ paddingLeft: '1em' }}>
                    {rightItems.map((item, index) => (
                      <li key={index}>
                        <Typography variant='body2'><strong>{item.propName}:</strong> {String(item.value)}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default UserClientFullDataComponent
