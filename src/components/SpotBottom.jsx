import React from 'react';
import { Box } from '@mui/material';

const SpotBottom = ({ offset }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 200, sm: 200, md: 200, lg: 200, xl: 200 },
        left: -200,
        width: 1300,
        height: { xs: 500, sm: 600, md: 600, lg: 500, xl: 650 },
        backgroundImage: "url('/assets/img/spot-bottom.svg')",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        zIndex: -2,
        transform: `translateY(${offset / 2}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
    </Box>
  );
};

export default SpotBottom;
