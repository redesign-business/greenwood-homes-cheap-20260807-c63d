import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  "title": "Greenwood Homes | Custom Home Builder in Nevada, California, Hawaii, Idaho & Utah",
  "description": "Greenwood Homes is a licensed general contractor building over 50 custom homes since 1998 across Nevada, California, Hawaii, Idaho, and Utah, with eight Tahoe Quarterly Mountain Home Awards."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
