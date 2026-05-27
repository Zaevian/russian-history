import type { Metadata } from "next";
import "./globals.css";

// Per design document: Inter (UI) + Crimson Pro (body) variable fonts
import "@fontsource-variable/inter";
import "@fontsource-variable/crimson-pro";

export const metadata: Metadata = {
  title: "RussiaHistory.org — A Scholarly History of Russia",
  description: "A comprehensive, university-level digital reference for the full history of Russia, from the pre-state period to the present. Every claim backed by multiple prominent historians.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-serif">
        {children}
      </body>
    </html>
  );
}
