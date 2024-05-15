'use client';

import ContentSection from "@/components/ContentSection";
import {ThemeProvider} from "@mui/material";
import { theme } from "@/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <ContentSection />
      </main>
    </ThemeProvider>
  );
}