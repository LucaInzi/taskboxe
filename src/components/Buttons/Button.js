// Button.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes({ color = 'primary', variant = 'text', size = 'medium' }) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Button color={color} variant={variant} size={size}>
        {size}
      </Button>
    </Box>
  );
}
