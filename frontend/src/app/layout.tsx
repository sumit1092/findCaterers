import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "findCaterers",
  description: "Discover top-rated caterers for your events and celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
