import Link from 'next/link';
import Image from 'next/image';

export default function RussiaHistoryLanding() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1816]">
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[3px] text-sm mb-3 text-[#5c5146]">
            A COMPLETE HISTORY
          </div>
          <h1 className="text-7xl font-serif tracking-[-2px] mb-6 leading-none">
            The History of Russia
          </h1>
          <p className="text-2xl text-[#3f372f] max-w-2xl">
            From the first Slavic settlements on the great rivers of Eastern Europe to the present day.
            A broad, detailed narrative written for the serious reader.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/eras" className="inline-block px-8 py-3 bg-[#1a1816] text-white rounded text-sm tracking-wide hover:bg-[#3f372f]">
            Begin with the Eras
          </Link>
          <Link href="/themes" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Explore Major Themes
          </Link>
          <Link href="/demo/genealogy" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Genealogy Explorer
          </Link>
          <Link href="/demo/maps" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Historical Maps
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

        {/* Quick Start */}
        <div className="mt-20">
          <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-6">START HERE</div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/eras"
              className="group block border border-[#d4c9b8] p-8 rounded-xl hover:border-[#3f372f] transition-colors bg-white"
            >
              <div className="text-2xl font-medium tracking-tight group-hover:underline">Browse all Eras</div>
              <div className="text-lg text-[#3f372f] mt-3">A complete chronological journey through more than a thousand years of Russian history.</div>
              <div className="mt-6 text-sm text-[#3f372f] group-hover:underline">Explore the eras →</div>
            </Link>

            <Link 
              href="/themes"
              className="group block border border-[#d4c9b8] p-8 rounded-xl hover:border-[#3f372f] transition-colors bg-white"
            >
              <div className="text-2xl font-medium tracking-tight group-hover:underline">Explore Major Themes</div>
              <div className="text-lg text-[#3f372f] mt-3">Autocracy, empire, religion, war, economy, and daily life across the centuries.</div>
              <div className="mt-6 text-sm text-[#3f372f] group-hover:underline">Browse the themes →</div>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-6">ATMOSPHERE</div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image src="/assets/visuals/winter-palace-interior.jpg" alt="Winter Palace interior" fill className="object-cover" />
              </div>
              <div className="text-xs mt-2 text-[#5c5146]">Late Imperial Russia</div>
            </div>
            <div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image src="/assets/visuals/siberian-dawn.jpg" alt="Siberian landscape" fill className="object-cover" />
              </div>
              <div className="text-xs mt-2 text-[#5c5146]">The vastness of the Russian land</div>
            </div>
            <div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image src="/assets/visuals/petrograd-1917.jpg" alt="Petrograd 1917" fill className="object-cover" />
              </div>
              <div className="text-xs mt-2 text-[#5c5146]">Revolutionary Petrograd</div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl text-[#3f372f] text-lg">
          This is a complete, self-contained history written for the general reader and student. 
          The visuals are strictly atmospheric. The story is in the text.
        </div>
      </main>
    </div>
  );
}
