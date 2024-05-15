import React from 'react';
import { Box } from '@mui/material';

const GlobeImg = ({ offset }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: -180,
        right: { xs: -160, sm: -180, md: -140, lg: -10, xl: -200 },
        width: { xs: 308, sm: 431, md: 472, lg: 525, xl: 616 },
        height: { xs: 414, sm: 580, md: 633, lg: 704, xl: 828 },
        backgroundImage: "url('/assets/img/background-globe.png')",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        zIndex: -99,
        transform: `translateY(-${offset / 2}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
    </Box>
  );
};

export default GlobeImg;