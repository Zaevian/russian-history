'use client';

import React from 'react';
import Image from 'next/image';

const timelineEvents = [
  {
    year: "1240",
    title: "Mongol Sack of Kyiv",
    description: "The city is devastated. Political center shifts northeast.",
    visual: "/assets/visuals/mongol-steppe.jpg",
    era: "Mongol Yoke",
  },
  {
    year: "1380",
    title: "Battle of Kulikovo",
    description: "First major Russian victory against the Horde under Dmitry Donskoy.",
    visual: "/assets/visuals/siberian-dawn.jpg",
    era: "Rise of Muscovy",
  },
  {
    year: "1480",
    title: "Standing on the Ugra River",
    description: "Traditional end of Mongol suzerainty over the Russian lands.",
    visual: "/assets/visuals/kievan-rus-hero.jpg",
    era: "Muscovite Consolidation",
  },
  {
    year: "1547",
    title: "Ivan IV Crowned Tsar",
    description: "Moscow declares itself the Third Rome and adopts imperial title.",
    visual: "/assets/visuals/winter-palace-interior.jpg",
    era: "Tsardom",
  },
];

export default function InteractiveTimeline() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const currentEvent = timelineEvents[selectedIndex];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1816]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="uppercase tracking-[2px] text-xs text-[#5c5146]">INTERACTIVE DEMO</div>
          <h1 className="text-5xl font-medium tracking-tight mt-1">The Long Road to Empire</h1>
          <p className="text-lg text-[#3f372f] mt-2 max-w-2xl">
            Click the timeline to explore key moments. Visuals update in sync — exactly the kind of bidirectional linking described in the design document.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="sticky top-6 space-y-3">
              {timelineEvents.map((event, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex gap-4 items-start ${
                    selectedIndex === index 
                      ? 'bg-white border-[#3f372f] shadow-sm' 
                      : 'bg-white/60 hover:bg-white border-[#d4c9b8]'
                  }`}
                >
                  <div className="font-mono text-2xl font-medium text-[#3f372f] w-16 shrink-0">
                    {event.year}
                  </div>
                  <div>
                    <div className="font-medium text-xl leading-tight">{event.title}</div>
                    <div className="text-sm text-[#5c5146] mt-1">{event.era}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail Panel with Visual */}
          <div className="lg:col-span-3">
              <div
                key={selectedIndex}
                className="bg-white rounded-2xl overflow-hidden border border-[#d4c9b8] shadow-sm"
              >
                <div className="relative aspect-[16/9]">
                  <Image 
                    src={currentEvent.visual} 
                    alt={currentEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 p-8 text-white">
                    <div className="text-sm opacity-80 mb-1">{currentEvent.era}</div>
                    <div className="text-4xl font-medium tracking-tight">{currentEvent.title}</div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-xl leading-tight text-[#1a1816]">
                    {currentEvent.description}
                  </p>

                  <div className="mt-8 pt-6 border-t text-sm text-[#5c5146]">
                    This moment is explored in depth in the full scholarly chapters (see design document for content plan).
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-[#5c5146] max-w-prose">
          In the real site this component would sync with the main map, search results, and article text using a global Zustand store — exactly as specified in Key Decision #18.
        </div>
      </div>
    </div>
  );
}
