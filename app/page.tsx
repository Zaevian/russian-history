import { getVisualMeta } from '@/lib/visuals';

export default function RussiaHistoryLanding() {
  const kievanHero = getVisualMeta('kievan-rus-hero');

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1816]">
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[3px] text-sm mb-3 text-[#5c5146]">
            A SCHOLARLY DIGITAL REFERENCE
          </div>
          <h1 className="text-7xl font-serif tracking-tight mb-6">
            The History of Russia
          </h1>
          <p className="text-2xl text-[#3f372f] leading-tight mb-8">
            From the pre-state Slavic world to the present day.<br />
            Built to the standard of a university-level reference work.
          </p>

          <div className="flex gap-4 text-sm">
            <a 
              href="/design" 
              className="px-6 py-3 border border-[#1a1816] hover:bg-[#1a1816] hover:text-white transition-colors"
            >
              Read the Design Document
            </a>
            <a 
              href="https://github.com" 
              className="px-6 py-3 border border-[#1a1816]/30 hover:bg-white transition-colors"
            >
              View on GitHub (Coming Soon)
            </a>
          </div>
        </div>

        {/* Demonstration of a complementary visual from our generated library */}
        <div className="mt-20">
          <div className="text-xs uppercase tracking-widest text-[#5c5146] mb-2">
            COMPLEMENTARY VISUAL — SLOT {kievanHero.slot}
          </div>
          <div className="relative aspect-[16/9] bg-black overflow-hidden rounded-sm">
            <img 
              src={`/assets/visuals/${kievanHero.file}`} 
              alt={kievanHero.altText}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <div className="max-w-2xl text-sm leading-relaxed">
                {kievanHero.extendedDescription}
              </div>
              <div className="text-[10px] mt-3 opacity-60">
                This image is atmospheric only. All historical claims are made in the text with full citations.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-xs text-[#5c5146]">
          This project is in early foundation stage (PR 1 of the plan). <br />
          Full design document and visual production rules live in <code>design-artifacts/</code>.
        </div>
      </main>
    </div>
  );
}
