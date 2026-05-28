import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "RussiaHistory.org — The History of Russia",
  description: "A comprehensive, readable history of Russia from the earliest Slavic settlements to the present day. Broad in scope, rich in detail, written for the serious general reader and student.",
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
        <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50 text-sm">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-medium tracking-tight">RussiaHistory.org</Link>
            <div className="flex gap-6 text-[#5c5146]">
              <Link href="/eras" className="hover:text-[#1a1816] transition-colors">Eras</Link>
              <Link href="/themes" className="hover:text-[#1a1816] transition-colors">Themes</Link>
              <Link href="/demo/genealogy" className="hover:text-[#1a1816] transition-colors">Genealogy</Link>
              <Link href="/demo/maps" className="hover:text-[#1a1816] transition-colors">Maps</Link>
              <Link href="/visuals" className="hover:text-[#1a1816] transition-colors">Visuals</Link>
              <Link href="/about" className="hover:text-[#1a1816] transition-colors">About</Link>
            </div>
          </div>
        </nav>
        {children}

        <footer className="border-t mt-20 py-10 text-xs text-[#5c5146]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-y-4">
              <div>
                RussiaHistory.org — A comprehensive history of Russia from the pre-state period to the present.
              </div>
              <div className="flex gap-5">
                <Link href="/about">About</Link>
                <Link href="/visuals">Visual Archive</Link>
                <span>CC-BY-NC-SA</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
