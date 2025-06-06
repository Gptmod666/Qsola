import { Fira_Code as FontMono, Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
