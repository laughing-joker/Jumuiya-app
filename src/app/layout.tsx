import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jumuiya ya mtakatifu theresia wa calcutta",
  description: "hii ni jumuiya ya mtakatifu theresia wa calcutta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
