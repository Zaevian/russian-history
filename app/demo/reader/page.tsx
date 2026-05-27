'use client';

import React from 'react';

export default function ReaderDemo() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="fixed top-0 left-0 right-0 h-px bg-[#d4c9b8] z-50">
        <div className="h-px bg-[#3f372f] transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="text-xs tracking-[2px] text-[#5c5146]">PRE-STATE &amp; KIEVAN RUS' • NARRATIVE</div>
          <h1 className="text-5xl font-medium tracking-tight mt-2">The Origins of Kievan Rus'</h1>
        </div>

        <div className="prose text-[#1a1816]">
          <p>The emergence of Kievan Rus' represents one of the most consequential state-formation processes in medieval Europe.</p>

          <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
            <div className="uppercase text-xs tracking-widest text-[#5c5146] mb-2">PRIMARY SOURCE</div>
            <blockquote className="border-l-4 border-[#3f372f] pl-6 italic">
              The Varangians from beyond the sea imposed tribute upon the Chuds, the Slavs, the Merians, the Ves', and the Krivichians.
            </blockquote>
          </div>

          <h2>The Normanist Controversy</h2>
          <p>Few questions have generated more scholarly passion.</p>

          <div className="my-8 border-l-4 border-[#3f372f] bg-[#f8f5f0] p-6 rounded-r">
            <div className="uppercase text-xs tracking-widest text-[#5c5146] mb-1">HISTORIOGRAPHICAL DEBATE</div>
            <h4 className="text-xl font-medium mb-1">The Normanist Debate</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
              <div className="border bg-white p-4 rounded">
                <div className="font-medium">Traditional Normanist Position</div>
                <div className="text-xs mt-1">Scandinavian elites played a decisive role.</div>
              </div>
              <div className="border bg-white p-4 rounded">
                <div className="font-medium">Indigenous Emphasis</div>
                <div className="text-xs mt-1">Local Slavic development was primary.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
          Demonstration of the scholarly reader. All claims backed by multiple historians.
        </div>

        <div className="mt-8">
          <button 
            onClick={() => {
              navigator.clipboard.writeText("Plokhy, Serhii. \"The Origins of Kievan Rus'.\" RussiaHistory.org, 2026.");
              alert("Citation copied (demo)");
            }}
            className="text-sm px-4 py-2 border border-[#3f372f] rounded hover:bg-white"
          >
            Export Citation (Chicago)
          </button>
        </div>
      </div>
    </div>
  );
}
