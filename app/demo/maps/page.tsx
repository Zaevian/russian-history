'use client';

import React, { useState } from 'react';
import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const periods = [
  { year: '1050', label: 'Kievan Rus\' peak', file: 'kievan-rus-1050.json' },
  { year: '1500', label: 'Early Muscovy', file: 'muscovy-1500.json' },
];

export default function HistoricalMapsDemo() {
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [geojson, setGeojson] = useState<any>(null);

  React.useEffect(() => {
    const period = periods[currentPeriod];
    fetch(`/data/maps/${period.file}`)
      .then(res => res.json())
      .then(setGeojson)
      .catch(() => setGeojson(null));
  }, [currentPeriod]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="uppercase tracking-[2px] text-xs text-[#5c5146]">BIGGER INTERACTIVE PIECE — START</div>
        <h1 className="text-5xl font-medium tracking-tight mt-1">Historical Maps Explorer</h1>
        <p className="mt-3 text-lg text-[#3f372f] max-w-3xl">
          Early prototype of the MapLibre historical maps component from the design document. 
          Time slider to switch periods. Real GeoJSON layers will be added with historian-approved boundaries.
        </p>
      </div>

      <div className="flex gap-4 mb-4">
        {periods.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurrentPeriod(i)}
            className={`px-4 py-2 rounded text-sm border ${currentPeriod === i ? 'bg-[#1a1816] text-white border-[#1a1816]' : 'border-[#d4c9b8] hover:bg-white'}`}
          >
            {p.year} — {p.label}
          </button>
        ))}
      </div>

      <div className="h-[520px] border border-[#d4c9b8] rounded-xl overflow-hidden bg-black">
        <Map
          initialViewState={{
            longitude: 35,
            latitude: 55,
            zoom: 4
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="https://demotiles.maplibre.org/style.json"
        >
          {/* GeoJSON layer would go here with proper source + layer once data loads */}
          {geojson && (
            <div className="absolute top-4 left-4 bg-white/90 p-3 rounded text-sm max-w-xs">
              <strong>{periods[currentPeriod].label}</strong>
              <p className="text-xs mt-1 text-[#5c5146]">
                This is a simplified demo polygon. Full version will use accurate, sourced historical boundaries from the Map Production workflow.
              </p>
            </div>
          )}
        </Map>
      </div>

      <div className="mt-6 text-sm text-[#5c5146]">
        Next steps for this component: Load real historian-approved GeoJSON for 8–10 key periods, add time slider with smooth transitions, layer toggles for political/cultural/economic boundaries, and bidirectional linking with the main timeline and genealogy.
      </div>
    </div>
  );
}
