import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1500,
          height: 1800,
          textAlign: 'center',
          mx: 'auto',
        },
      }}
    >
        <Paper sx={{ m: -225 }}>
            <h1> Welcome to my Website.</h1>
        </Paper>
    </Box>
  );
}