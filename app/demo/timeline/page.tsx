'use client';

import { motion } from 'framer-motion';

const events = [
  { year: "1240", event: "Mongol sack of Kyiv" },
  { year: "1380", event: "Battle of Kulikovo" },
  { year: "1480", event: "End of Mongol suzerainty" },
  { year: "1547", event: "Ivan IV crowned Tsar" },
  { year: "1613", event: "Romanov dynasty begins" },
];

export default function TimelineDemo() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-medium mb-8">Interactive Timeline Demo</h1>
      <p className="mb-8 text-[#3f372f]">A tasteful use of Framer Motion for scholarly comprehension (design requirement: motion only where it helps understanding).</p>

      <div className="space-y-8 border-l-2 border-[#d4c9b8] pl-8">
        {events.map((e, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] w-5 h-5 bg-white border-2 border-[#3f372f] rounded-full" />
            <div className="font-mono text-sm text-[#5c5146]">{e.year}</div>
            <div className="text-xl">{e.event}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-xs text-[#5c5146]">
        In the full site this will be connected bidirectionally to maps and search results.
      </div>
    </div>
  );
}
