import Link from 'next/link';
import Image from 'next/image';

const eras = [
  { slug: 'pre-state-kievan', label: 'Pre-State & Kievan Rus', years: 'c. 750–1240' },
  { slug: 'mongol-muscovy', label: 'Mongol Yoke & Rise of Muscovy', years: '1240–1613' },
  { slug: 'tsardom-empire', label: 'Tsardom & Early Empire', years: '1613–1801' },
  { slug: 'imperial', label: 'Imperial Russia', years: '1801–1917' },
  { slug: 'revolutionary', label: 'Revolutionary Era', years: '1905–1922' },
  { slug: 'soviet', label: 'Soviet Union', years: '1922–1991' },
  { slug: 'post-soviet', label: 'Post-Soviet Russia', years: '1991–present' },
];

export default function RussiaHistoryLanding() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1816]">
      <nav className="border-b border-[#d4c9b8] bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 text-sm">
          <div className="font-medium">RussiaHistory.org</div>
          <div className="flex gap-6 text-[#5c5146]">
            <a href="#eras">Eras</a>
            <Link href="/demo/reader">Reader Demo</Link>
            <Link href="/visuals">Visuals</Link>
            <Link href="/about">About</Link>
            <Link href="/design">Design</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="max-w-4xl">
          <div className="uppercase tracking-[3px] text-sm mb-3 text-[#5c5146]">
            A SCHOLARLY DIGITAL REFERENCE
          </div>
          <h1 className="text-7xl font-serif tracking-[-2px] mb-6 leading-none">
            The Complete History<br />of Russia
          </h1>
          <p className="text-2xl text-[#3f372f] max-w-2xl">
            From the pre-state Slavic world through the Mongol invasion, Imperial Russia, 
            the Soviet century, and the present day — written to the standard of a major university reference work.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a href="#eras" className="inline-block px-8 py-3 bg-[#1a1816] text-white rounded text-sm tracking-wide">
            Begin Reading
          </a>
          <Link href="/demo/reader" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            View Live Reader Demo
          </Link>
          <Link href="/demo/interactive" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Interactive Timeline + Visuals
          </Link>
          <Link href="/demo/genealogy" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Genealogy Tree Demo
          </Link>
          <Link href="/design" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Read the Full Design Document
          </Link>
        </div>

        {/* Hero Visual - using one of our generated complementary assets */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-widest text-[#5c5146] mb-2">
            COMPLEMENTARY VISUAL — KIEVAN RUS ERA
          </div>
          <div className="relative aspect-[16/9] bg-black overflow-hidden rounded-sm shadow-2xl">
            <Image 
              src="/assets/visuals/kievan-rus-hero.jpg" 
              alt="Atmospheric view of a medieval Slavic river settlement with wooden churches at sunset."
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-10">
              <div className="max-w-2xl text-white text-lg">
                A tranquil golden-hour scene of an early medieval East Slavic trading settlement along the Dnieper. Multiple wooden churches with characteristic onion domes rise among thatched buildings.
              </div>
              <div className="text-[10px] mt-3 text-white/70">
                This image is atmospheric only. All historical claims are made in the text with full citations.
              </div>
            </div>
          </div>
        </div>

        {/* Eras Navigation */}
        <div id="eras" className="mt-20">
          <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-6">EXPLORE BY ERA</div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {eras.map((era, index) => {
              const hrefs = [
                "/demo/reader",
                "/demo/reader-mongol",
                "/demo/reader-imperial",
                "/demo/reader-reforms",
                "/demo/reader-revolutionary",
                "/demo/reader-soviet",
                "/demo/reader-1990s",
              ];
              return (
                <Link 
                  key={era.slug}
                  href={hrefs[index] || "/demo/reader"}
                  className="group block border border-[#d4c9b8] p-6 rounded hover:border-[#3f372f] transition-colors"
                >
                  <div className="flex justify-between items-baseline">
                    <div className="text-xl group-hover:underline">{era.label.replace("'", "")}</div>
                    <div className="text-xs text-[#5c5146] font-mono">{era.years}</div>
                  </div>
                  <div className="text-sm text-[#5c5146] mt-1">View sample chapter with visuals →</div>
                </Link>
              );
            })}

            {/* Thematic & Deep Soviet Essays */}
            <div className="col-span-2 mt-4">
              <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-3">Thematic &amp; Deeper Soviet Essays</div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/demo/reader-collectivization" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Collectivization &amp; Holodomor</Link>
                <Link href="/demo/reader-ww2" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Eastern Front / Great Patriotic War</Link>
                <Link href="/demo/reader-thaw" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Khrushchev Thaw</Link>
                <Link href="/demo/reader-stagnation" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Brezhnev Stagnation</Link>
                <Link href="/demo/reader-perestroika" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Perestroika &amp; Collapse</Link>
                <Link href="/demo/reader-nationality" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Nationality Question</Link>
                <Link href="/demo/reader-autocracy" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">The Nature of Russian Autocracy</Link>
                <Link href="/demo/reader-holodomor" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">The Holodomor (Thematic)</Link>
                <Link href="/demo/reader-everyday-soviet" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Everyday Life in Late Socialism</Link>
                <Link href="/demo/reader-1990s-reforms" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">1990s Shock Therapy &amp; Oligarchs</Link>
                <Link href="/demo/reader-putin" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">The Putin Era</Link>
                <Link href="/demo/reader-orthodoxy" className="px-4 py-2 border border-[#d4c9b8] rounded hover:border-[#3f372f]">Orthodoxy and the State (Thematic)</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div>
            <div className="relative aspect-[16/9]">
              <Image src="/assets/visuals/winter-palace-interior.jpg" alt="Winter Palace interior" fill className="rounded shadow object-cover" />
            </div>
            <div className="text-xs mt-2 text-[#5c5146]">Late Imperial power and isolation</div>
          </div>
          <div>
            <div className="relative aspect-[16/9]">
              <Image src="/assets/visuals/siberian-dawn.jpg" alt="Siberian landscape" fill className="rounded shadow object-cover" />
            </div>
            <div className="text-xs mt-2 text-[#5c5146]">The scale of the Gulag system (use with care)</div>
          </div>
          <div>
            <div className="relative aspect-[16/9]">
              <Image src="/assets/visuals/petrograd-1917.jpg" alt="Petrograd 1917" fill className="rounded shadow object-cover" />
            </div>
            <div className="text-xs mt-2 text-[#5c5146]">February 1917 — the old world cracking</div>
          </div>
        </div>

        <div className="mt-16 text-xs text-[#5c5146] max-w-prose">
          This is a rapidly advancing build toward a complete scholarly platform. 
          All sample content follows the strict standards in the design document. 
          Visuals are purely complementary — the knowledge lives in the text.
        </div>
      </main>

      <footer className="border-t py-8 text-xs text-[#5c5146]">
        <div className="max-w-6xl mx-auto px-6">
          RussiaHistory.org — In development according to the detailed plan in <code>design-artifacts/design-doc-08f36848.md</code>
        </div>
      </footer>
    </div>
  );
}
