import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";

export const cambria = localFont({
  src: "./fonts/Cambria.ttf",
});

export const metadata: Metadata = {
  title: "Health Management System",
  description: "A system storing health information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/nia.png" />
      </head>
      <body className={`${cambria.className} antialiased`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
