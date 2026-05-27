export default function RevolutionaryReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">REVOLUTIONARY ERA • NARRATIVE</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">1905 and the First Russian Revolution</h1>
        <div className="text-[#3f372f] text-sm">1905 – 1917 • Historians cited: Figes, Pipes, Fitzpatrick, Snyder</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>The Revolution of 1905 was the first major dress rehearsal for the upheavals that would destroy the Romanov autocracy twelve years later.</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <img src="/assets/visuals/petrograd-1917.jpg" alt="Petrograd 1917" className="w-full rounded mb-4" />
          <p className="text-sm text-[#3f372f] italic">The atmosphere in the capital in early 1917 captured the moment when centuries of autocratic rule finally cracked under the weight of war, economic collapse, and popular anger.</p>
        </div>

        <h2>Bloody Sunday and Its Aftermath</h2>
        <p>On January 9, 1905, a peaceful procession of workers led by Father Gapon was fired upon by troops in front of the Winter Palace. The event, known as Bloody Sunday, destroyed the myth of the Tsar as the "Little Father" of the people.</p>

        <p>The 1905 Revolution forced Nicholas II to issue the October Manifesto, creating Russia's first parliament (the Duma) and granting limited civil liberties. However, the concessions were half-hearted, and the fundamental problems of autocracy, land hunger, and national oppression remained unresolved.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        Full chapter will include deep analysis of the 1905 Revolution, the role of the Dumas, and why the regime survived 1905 but collapsed in 1917.
      </div>
    </div>
  );
}
