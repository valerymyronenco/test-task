import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 400,
    h1: {
      fontFamily: ["Clash Grotesk", "sans-serif"].join(","),
      fontSize: { xs: 40, sm: 54, md: 68, lg: 96, xl: 120 },
      fontWeight: 500,
      lineHeight: '100%',
      background: 'linear-gradient(108.88deg, #b53ea4, #fc6f32 38.9%, #ff4a59)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline',
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: { xs: 16, sm: 14, md: 16, lg: 20, xl: 24 },
      fontWeight: 400,
      color: '#FFFFFF'
    },
    dataDigit: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: { xs: 32, sm: 32, md: 36, lg: 48, xl: 64 },
      fontWeight: 700,
      color: '#FFFFFF'
    },
    dataText: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: { xs: 14, sm: 14, md: 18, lg: 20, xl: 24 },
      fontWeight: 400,
      color: '#FFFFFF'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
