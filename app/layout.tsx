import Navbar from "@/Components/Navbar";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import MouseTrailer from "@/Components/MouseTrailer";

export const metadata = {
  title: "ACosmicWolf",
  description: "Portfolio of ACosmicWolf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MouseTrailer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
