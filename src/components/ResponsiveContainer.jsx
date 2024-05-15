import React from "react";
import { Container, useTheme, useMediaQuery } from "@mui/material";

export default function ResponsiveContainer({ children, isHeader, page }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isWide = useMediaQuery(theme.breakpoints.up("lg"));

  let maxWidth;

  if (isMobile) {
    maxWidth = "sm";
  } else if (isTablet) {
    maxWidth = "md";
  } else if (isDesktop) {
    maxWidth = "lg";
  } else if (isWide) {
    maxWidth = "xl";
  } else if (isWide) {
    maxWidth = "xl";
  }

  return (
    <Container maxWidth={maxWidth} sx={{ px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 0 } }}>
      {children}
    </Container>
  );
}
