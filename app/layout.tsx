import Navbar from "@/Components/Navbar";
import "./globals.css";

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

        {children}
      </body>
    </html>
  );
}
