import {AppBar, Box, Container, Toolbar} from '@mui/material';
import Link from "next/link";

const pages = ['How It Works', 'Buy Salt AI'];

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'none',
        boxShadow: "none",
      }}
    >
      <Container width='lg'>
        <Toolbar
          disableGutters
          sx={{
            py: 4,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: { xs: 1, sm: 3, md: 3, lg: 3, xl: 3 },
          }}
        >
          <Link href="/">
            <Box
              sx={{
                py: 2,
                px: 3,
                fontSize: { xs: 14, sm: 16, md: 18, lg: 18, xl: 18 },
                '&:hover': {
                  background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  transition: 'background 0.6s ease, color 0.6s ease',
                },
            }}>
              How It Works
            </Box>
          </Link>
          <Link href="/">
            <Box
              className='gradient-border-box'
              sx={{
                py: 2,
                px: 3,
                fontSize: { xs: 14, sm: 16, md: 18, lg: 18, xl: 18 },
                borderRadius: 11,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                transition: 'background-color 0.3s ease',
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
                  transition: 'background 0.3s ease'
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
                  zIndex: -2
                },
                '&:hover': {
                  background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
                },
                '&:hover:after': {
                  opacity: 1,
                },
              }}
            >
              Buy Salt AI
            </Box>
          </Link>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;