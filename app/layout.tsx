import "./globals.css";

import {Anaheim} from 'next/font/google';

import NavBar from "./ui/Navbar";

const anaheim = Anaheim({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anaheim.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
