export default function ImperialReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">IMPERIAL RUSSIA • NARRATIVE</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Autocracy of the Romanovs</h1>
        <div className="text-[#3f372f] text-sm">1613 – 1917 • Historians: Lieven, Figes, Hosking, Pipes</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>The Romanov dynasty ruled Russia for over three centuries. Their autocratic system combined immense personal power with a vast bureaucracy and a nobility that was both privileged and dependent on the throne.</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <img src="/assets/visuals/winter-palace-interior.jpg" alt="Winter Palace interior" className="w-full rounded mb-4" />
          <p className="text-sm text-[#3f372f] italic">The Winter Palace symbolized both the grandeur and the isolation of the imperial court. Decisions affecting millions were made in rooms like these.</p>
        </div>

        <h2>The Emancipation and Its Limits</h2>
        <p>The emancipation of the serfs in 1861 was the most significant reform of the 19th century. Yet the terms of emancipation left peasants with inadequate land and heavy redemption payments, sowing seeds of future discontent.</p>

        <p>By the early 20th century, the autocracy faced challenges it could no longer contain: rapid industrialization, peasant unrest, and the rise of revolutionary movements.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        Sample content for the Imperial era. Full treatment will include deep analysis of the 1861 reform and the 1905 Revolution.
      </div>
    </div>
  );
}
