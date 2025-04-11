"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/LanguageContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <LanguageProvider>
      {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}