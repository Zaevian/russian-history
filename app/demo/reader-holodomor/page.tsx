import Image from 'next/image';
import Link from 'next/link';

export default function HolodomorReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">THEMATIC • SOVIET UNION • 1932–1933</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Holodomor</h1>
        <p className="mt-4 text-xl text-[#3f372f]">The man-made famine that killed millions in Ukraine and other grain-producing regions during Stalin’s collectivization drive.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>In 1932 and 1933, while the Soviet Union was in the midst of Stalin’s crash industrialization and forced collectivization of agriculture, large parts of the grain-producing regions of the USSR — above all Ukraine, but also southern Russia and Kazakhstan — were struck by a famine of almost unimaginable severity. In Ukraine it is remembered as the Holodomor, “death by hunger.”</p>

        <div className="my-12 border border-[#d4c9b8] bg-white p-8 rounded-xl">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/siberian-dawn.jpg" alt="Empty landscape" fill className="rounded-lg object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The famine was not a natural disaster. It was the direct result of policies that seized grain, punished resistance, and prevented starving people from leaving the affected regions.</p>
        </div>

        <h2>Collectivization and Resistance</h2>

        <p>Stalin’s regime had decided that the only way to finance rapid industrialization was to extract a massive surplus from the peasantry. The traditional way of life of the Russian and Ukrainian village — individual or communal farming — was to be replaced by large collective farms (kolkhozy) that would be easier to control and would deliver grain to the state at low fixed prices.</p>

        <p>Many peasants resisted, sometimes violently. The regime responded with extreme brutality. “Kulaks” — a flexible category that could include any peasant who owned a bit more than his neighbors or who opposed collectivization — were deported by the hundreds of thousands to Siberia and Kazakhstan. When the harvest of 1932 proved disappointing, the state increased rather than reduced its grain procurement quotas. Brigades of activists went from village to village seizing whatever food they could find.</p>

        <h2>The Sealing of the Borders</h2>

        <p>As people began to starve, the regime took extraordinary measures to prevent them from fleeing. In January 1933 the borders of Ukraine and the North Caucasus were sealed by internal passport controls and NKVD troops. Peasants who tried to leave the famine zone were turned back. At the same time, the Soviet Union continued to export grain to pay for imported machinery. The combination was lethal.</p>

        <p>Contemporary accounts describe villages where the dead lay unburied in the streets, where entire families died in their homes, where people resorted to eating grass, bark, and in the most desperate cases, the flesh of the dead. The Soviet government denied that any famine existed and blocked foreign aid or investigation.</p>

        <h2>Death Toll and Debate</h2>

        <p>Exact numbers will never be known, but the best current estimates suggest that between 3 and 5 million people died in Ukraine alone, with hundreds of thousands more in other affected regions. The proportion of the population lost in some Ukrainian districts was comparable to the worst losses of the Second World War.</p>

        <p>Historians continue to debate the precise mix of motives: ideological commitment to collectivization at any cost, bureaucratic panic and incompetence, and a deliberate desire to break Ukrainian national identity and resistance. What is not seriously disputed is that the Soviet state knowingly pursued policies that caused mass death on a colossal scale and then concealed the truth for decades.</p>

        <p>The Holodomor remains one of the most painful and politically charged episodes in the history of the Soviet Union and of Ukraine. In 2006 the Ukrainian parliament recognized it as genocide. Russia has consistently rejected that label.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Related: <Link href="/demo/reader-ww2" className="underline">The Great Patriotic War</Link> • <Link href="/demo/reader-collectivization" className="underline">Collectivization &amp; the Soviet Countryside</Link>
      </div>
    </div>
  );
}
