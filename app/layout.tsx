import type { Metadata } from "next";
import { Teko, Hind } from "next/font/google";
import "./globals.css";

const tekoFont = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-teko',
});

const hindFont = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-hind',
});


export const metadata: Metadata = {
  title: "Voice by iAccess Life",
  description: "The Tech-Powered Feedback Solution for Venue Accessibily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${tekoFont.variable} ${hindFont.variable} text-xl`}>
        {children}
      </body>
    </html>
  );
}
