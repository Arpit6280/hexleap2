import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// Providers

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <title>HexLeap</title>
      <body className={`${inter.className} bg-[#F7F7F8] dark:bg-[#292b32]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
