import "./globals.css";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";

export const cambria = localFont({
  src: "./fonts/Cambria.ttf",
});

export const dreamCollection = localFont({
  src: "./fonts/Dream Collection.ttf",
});

export const TrajanProBold = localFont({
  src: "./fonts/TrajanPro-Bold.otf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Health Management System</title>
        <link rel="icon" type="image/svg+xml" href="/nia.png" />
      </head>
      <body className={`${cambria.className} antialiased`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
