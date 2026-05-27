import Link from 'next/link';
import { getVisualMeta } from '@/lib/visuals';

const eras = [
  { slug: 'pre-state-kievan', label: 'Pre-State & Kievan Rus\'', years: 'c. 750–1240' },
  { slug: 'mongol-muscovy', label: 'Mongol Yoke & Rise of Muscovy', years: '1240–1613' },
  { slug: 'tsardom-empire', label: 'Tsardom & Early Empire', years: '1613–1801' },
  { slug: 'imperial', label: 'Imperial Russia', years: '1801–1917' },
  { slug: 'revolutionary', label: 'Revolutionary Era', years: '1905–1922' },
  { slug: 'soviet', label: 'Soviet Union', years: '1922–1991' },
  { slug: 'post-soviet', label: 'Post-Soviet Russia', years: '1991–present' },
];

export default function RussiaHistoryLanding() {
  const kievanHero = getVisualMeta('kievan-rus-hero');

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1816]">
      <nav className="border-b border-[#d4c9b8] bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 text-sm">
          <div className="font-medium">RussiaHistory.org</div>
          <div className="flex gap-6 text-[#5c5146]">
            <a href="#eras">Eras</a>
            <a href="/design">Design</a>
            <a href="https://github.com" target="_blank">GitHub</a>
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
          <a href="/demo/reader" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            View Live Reader Demo
          </a>
          <a href="/design" className="inline-block px-8 py-3 border border-[#1a1816] rounded text-sm tracking-wide hover:bg-white">
            Read the Full Design Document
          </a>
        </div>

        {/* Hero Visual */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-widest text-[#5c5146] mb-2">
            COMPLEMENTARY VISUAL — KIEVAN RUS' ERA
          </div>
          <div className="relative aspect-[16/9] bg-black overflow-hidden rounded-sm shadow-2xl">
            <img 
              src={`/assets/visuals/${kievanHero.file}`} 
              alt={kievanHero.altText}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-10">
              <div className="max-w-2xl text-white text-lg">
                {kievanHero.extendedDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Eras Navigation */}
        <div id="eras" className="mt-20">
          <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-6">EXPLORE BY ERA</div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {eras.map((era) => (
              <Link 
                key={era.slug}
                href={`/${era.slug}/origins-of-kievan-rus`}
                className="group block border border-[#d4c9b8] p-6 rounded hover:border-[#3f372f] transition-colors"
              >
                <div className="flex justify-between items-baseline">
                  <div className="text-xl group-hover:underline">{era.label}</div>
                  <div className="text-xs text-[#5c5146] font-mono">{era.years}</div>
                </div>
                <div className="text-sm text-[#5c5146] mt-1">Begin with sample chapter →</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-xs text-[#5c5146] max-w-prose">
          This is an early but functional build of the platform described in the design document. 
          All content follows strict scholarly standards (minimum two historians per interpretive claim, 
          explicit debate presentation, full primary source apparatus). 
          Visuals are complementary only.
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
