import Image from 'next/image';

export default function SovietReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">SOVIET UNION • NARRATIVE</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">Stalinism and the Great Terror</h1>
        <div className="text-[#3f372f] text-sm">1929 – 1953 • Historians cited: Applebaum, Fitzpatrick, Snyder, Service</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>The Stalin era transformed the Soviet Union from a backward, largely agrarian country into an industrial and military superpower — at the cost of tens of millions of lives.</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/siberian-dawn.jpg" alt="Siberian landscape" fill className="rounded object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The vastness of the Soviet penal system is difficult to convey. The Gulag stretched across the entire country, with the most remote and brutal camps located in the far north and east.</p>
          <p className="text-xs mt-2 text-[#5c5146]">This image is used with extreme restraint and only in the most serious contexts.</p>
        </div>

        <h2>The Great Terror of 1937–38</h2>
        <p>In 1937–1938, the Soviet regime turned on itself with unprecedented ferocity. The NKVD arrested, tortured, and executed hundreds of thousands of people, including the overwhelming majority of the old Bolshevik leadership, senior military officers, and countless ordinary citizens.</p>

        <p>Anne Applebaum and others have shown how the Terror was not simply the product of Stalin's paranoia, but a systematic tool of social engineering and power consolidation.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        Full treatment will cover collectivization, the Holodomor, the Terror, and the wartime experience with the rigor of the Cambridge History of Russia.
      </div>
    </div>
  );
}
