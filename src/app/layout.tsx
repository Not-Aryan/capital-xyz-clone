import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Modern companies are built on Capital",
  description: "Raise, hold, spend, and send funds — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark-bg min-h-screen">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
