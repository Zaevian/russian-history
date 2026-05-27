import type { Metadata } from "next";
import "./globals.css";

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
        <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50 text-sm">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="font-medium">RussiaHistory.org</a>
            <div className="flex gap-5 text-[#5c5146]">
              <a href="/demo/reader">Reader</a>
              <a href="/demo/interactive">Interactive</a>
              <a href="/demo/genealogy">Genealogy</a>
              <a href="/visuals">Visuals</a>
              <a href="/about">About</a>
              <a href="/design">Design</a>
            </div>
          </div>
        </nav>
        {children}

        <footer className="border-t mt-20 py-10 text-xs text-[#5c5146]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-y-4">
              <div>
                RussiaHistory.org — A scholarly digital reference built according to the plan in <a href="/design" className="underline">the design document</a>.
              </div>
              <div className="flex gap-5">
                <a href="/about">About the Project</a>
                <a href="/visuals">Visual Archive</a>
                <span>CC-BY-NC-SA for core content</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
