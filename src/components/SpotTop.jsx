import React from 'react';
import { Box } from '@mui/material';

const SpotTop = ({ offset }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: -900,
        left: 0,
        width: 1300,
        height: '1000px',
        backgroundImage: "url('/assets/img/spot-top.svg')",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        transform: `translateY(-${offset / 2}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
    </Box>
  );
};

export default SpotTop;
