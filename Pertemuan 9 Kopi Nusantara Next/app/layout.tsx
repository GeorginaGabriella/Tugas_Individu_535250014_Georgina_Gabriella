import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara | Secangkir Kopi, Sejuta Cerita",
  description:
    "Jelajahi pilihan kopi dan cerita cita rasa Nusantara bersama Kopi Nusantara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
