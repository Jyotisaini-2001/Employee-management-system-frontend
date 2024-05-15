import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "../utils/cn";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="hsl(217, 100%, 97%)" />
      </head>
      <body className={cn( inter.className)}>{children}</body>
    </html>
  );
}
