import React from 'react';
import { useTheme, Box } from '@mui/material';
import Link from 'next/link';

const Main = ({ offset, isMainFixed }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2.5, sm: 3, md: 3.5, lg: 3.5, xl: 4.5 },
        transform: `translateY(-${offset}px)`,
        transition: 'transform 0.6s linear',
      }}
    >
      <Box
        component='h1'
        sx={{
          ...theme.typography.h1,
          background: isMainFixed
            ? 'linear-gradient(106.2deg, #ffd6f9, #ffcbb4 49.5%, #ffbec3), rgba(255, 255, 255, 0.2)'
            : 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          transition: 'background 0.6s ease',
        }}
      >
        A new economic primitive for&nbsp;funding decentralized AI
      </Box>
      <Box component='h2' sx={{ ...theme.typography.h2 }}>
        We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
      </Box>
      <Box sx={{ display: 'flex', gap: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 } }}>
        <Link href='#' style={{ color: '#FFFFFF' }}>
          <Box
            className='gradient-border-box'
            sx={{
              py: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 4, md: 6, lg: 6, xl: 6 },
              fontSize: { xs: 14, sm: 16, md: 24, lg: 24, xl: 24 },
              borderRadius: 11,
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, background 0.6s ease',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'inherit',
                border: '2px solid transparent',
                backgroundColor: '#000000',
                backgroundClip: 'padding-box',
                zIndex: -1,
                transition: 'background 0.6s ease',
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'inherit',
                background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
                opacity: 1,
                transition: 'opacity 0.6s ease',
                zIndex: -2,
              },
              '&:hover': {
                background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
                transition: 'background 0.6s ease',
              },
              '&:hover:after': {
                opacity: 1,
                transition: 'opacity 0.6s ease',
              },
            }}
          >
            Buy Salt AI
          </Box>

        </Link>
        <Link href='#'>
          <Box
            sx={{
              py: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 4, md: 6, lg: 6, xl: 6 },
              fontSize: { xs: 14, sm: 16, md: 24, lg: 24, xl: 24 },
              transition: 'color 0.3s ease',
              textDecoration: 'none',
              color: '#FFFFFF',
              '&:hover': {
                background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                transition: 'background 0.6s ease, color 0.6s ease',
              },
            }}
          >
            Try Now
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Main;
