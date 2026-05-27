'use client';

import React, { useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

const sampleContent = [
  { 
    id: 1, 
    title: "The Origins of Kievan Rus'", 
    era: "Pre-State & Kievan Rus'", 
    excerpt: "The emergence of Kievan Rus' in the ninth and tenth centuries represents one of the most consequential state-formation processes in medieval Europe.",
    href: "/demo/reader"
  },
  { 
    id: 2, 
    title: "The Mongol Invasion and the Rise of Muscovy", 
    era: "Mongol Yoke & Rise of Muscovy", 
    excerpt: "The Mongol invasion of 1237–1240 fundamentally altered the trajectory of the Rus' lands.",
    href: "/demo/reader-mongol"
  },
  { 
    id: 3, 
    title: "The Normanist Debate", 
    era: "Pre-State & Kievan Rus'", 
    excerpt: "Few questions in early Russian history have generated more scholarly passion than the origins of the term 'Rus''.",
    href: "/demo/reader"
  },
];

export default function SiteSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

  const fuse = new Fuse(sampleContent, {
    keys: ['title', 'excerpt', 'era'],
    threshold: 0.3,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const searchResults = fuse.search(value).map(r => r.item);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search sample content..."
        className="w-full px-4 py-2.5 border border-[#d4c9b8] rounded-lg bg-white focus:outline-none focus:border-[#3f372f] text-sm"
      />

      {results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-[#d4c9b8] rounded-xl shadow-lg overflow-hidden z-50">
          {results.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="block px-4 py-3 hover:bg-[#f8f5f0] border-b last:border-b-0"
              onClick={() => {
                setQuery('');
                setResults([]);
              }}
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-[#5c5146]">{item.era}</div>
              <div className="text-sm text-[#3f372f] line-clamp-2 mt-1">{item.excerpt}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
