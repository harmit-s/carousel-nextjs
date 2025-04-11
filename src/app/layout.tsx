
import "@/styles/partials/globals.scss";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "@/components/Providers"

export const metadata: Metadata = {
  title: "Cozey Carousel",
  description: "A modern, responsive video carousel built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
