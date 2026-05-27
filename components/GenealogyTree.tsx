'use client';

import React from 'react';

interface Ruler {
  id: string;
  name: string;
  years: string;
  x: number;
  y: number;
  children?: string[];
}

const rulers: Ruler[] = [
  { id: 'rurik', name: 'Rurik', years: '862–879', x: 100, y: 50 },
  { id: 'oleg', name: 'Oleg', years: '879–912', x: 250, y: 50, children: ['igor'] },
  { id: 'igor', name: 'Igor', years: '912–945', x: 400, y: 50 },
  { id: 'olga', name: 'Olga (regent)', years: '945–962', x: 550, y: 50 },
  { id: 'sviatoslav', name: 'Sviatoslav I', years: '962–972', x: 700, y: 50 },
  { id: 'vladimir', name: 'Vladimir the Great', years: '980–1015', x: 400, y: 180 },
  { id: 'yaroslav', name: 'Yaroslav the Wise', years: '1019–1054', x: 550, y: 180 },
];

export function GenealogyTree() {
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <div className="p-8 bg-white border rounded-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-medium">Rurikid Dynasty (Early)</h3>
        <p className="text-sm text-[#5c5146]">Click a ruler to highlight lineage. Full interactive version will use React Flow + portraits.</p>
      </div>

      <div className="relative h-[320px] bg-[#f8f5f0] rounded overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Simple connecting lines */}
          <line x1="175" y1="80" x2="325" y2="80" stroke="#d4c9b8" strokeWidth="2" />
          <line x1="325" y1="80" x2="475" y2="80" stroke="#d4c9b8" strokeWidth="2" />
          <line x1="475" y1="80" x2="625" y2="80" stroke="#d4c9b8" strokeWidth="2" />
          <line x1="700" y1="80" x2="700" y2="160" stroke="#d4c9b8" strokeWidth="2" />
          <line x1="700" y1="160" x2="475" y2="160" stroke="#d4c9b8" strokeWidth="2" />
        </svg>

        {rulers.map((ruler) => (
          <div
            key={ruler.id}
            onClick={() => setSelected(ruler.id)}
            className={`absolute cursor-pointer p-3 rounded-xl border transition-all ${
              selected === ruler.id ? 'bg-white border-[#3f372f] shadow-lg scale-105' : 'bg-white/80 border-[#d4c9b8] hover:border-[#3f372f]'
            }`}
            style={{ left: ruler.x, top: ruler.y }}
          >
            <div className="font-medium text-sm">{ruler.name}</div>
            <div className="text-xs text-[#5c5146] font-mono">{ruler.years}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-[#5c5146]">
        This is a simplified interactive prototype. The full version (per design) will use React Flow with custom portrait nodes, marriage links, and bidirectional sync with the main timeline/map.
      </div>
    </div>
  );
}
