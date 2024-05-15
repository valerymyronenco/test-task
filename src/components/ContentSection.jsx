import React, { useState, useEffect } from 'react';
import { useTheme, Box } from '@mui/material';
import ResponsiveContainer from './ResponsiveContainer';
import Main from './Main';
import Data from './Data';
import GlobeImg from './GlobeImg';
import SpotTop from "@/components/SpotTop";
import SpotBottom from "@/components/SpotBottom";

function ContentSection() {
  const theme = useTheme();

  const [mainOffset, setMainOffset] = useState(0);
  const [globeImgOffset, setGlobeImgOffset] = useState(0);
  const [dataVisible, setDataVisible] = useState(false);
  const [isMainFixed, setIsMainFixed] = useState(false);
  const [scrollDir, setScrollDir] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const direction = scrollPosition > lastScrollY ? 'down' : 'up';
      setScrollDir(direction);
      lastScrollY = scrollPosition;

      if (direction === 'down' && !isMainFixed && scrollPosition > 0) {
        setMainOffset(130);
        setIsMainFixed(true);
      } else if (direction === 'up' && isMainFixed && scrollPosition === 0) {
        setIsMainFixed(false);
        setMainOffset(0);
      }

      setGlobeImgOffset(scrollPosition);
      setDataVisible(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMainFixed, scrollDir]);

  return (
    <ResponsiveContainer>
      <Box
        sx={{
          mt: { xs: 34, sm: 34, md: 34, lg: 38, xl: 38 },
          zIndex: 99,
          position: 'relative',
          height: '100vh',
          display: "flex",
          flexDirection: 'column',
          gap: 0
        }}>
        <SpotTop offset={globeImgOffset} />
        <SpotBottom offset={globeImgOffset} />
        <GlobeImg offset={globeImgOffset} />
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Main offset={mainOffset} isMainFixed={isMainFixed} />
          <Data visible={dataVisible} />
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}

export default ContentSection;
