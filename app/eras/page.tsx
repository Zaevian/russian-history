import Link from 'next/link';

const eras = [
  {
    title: "The Origins of Russia",
    period: "c. 750 – 1240",
    description: "The Slavic world before the state. The rise of Kievan Rus', the Varangian princes, the adoption of Christianity, and the flowering of medieval East Slavic civilization.",
    href: "/demo/reader",
    eraLabel: "Pre-State & Kievan Rus'"
  },
  {
    title: "Mongol Conquest and the Rise of Muscovy",
    period: "1240 – 1613",
    description: "The destruction of Kyiv, two and a half centuries under the Golden Horde, and the slow emergence of Moscow as the center of a new Russian state.",
    href: "/demo/reader-mongol",
    eraLabel: "Mongol Yoke & Muscovy"
  },
  {
    title: "The Tsardom and Early Empire",
    period: "1613 – 1801",
    description: "The Romanov dynasty, the Time of Troubles, the dramatic westernizing reforms of Peter the Great, and the consolidation of autocratic power.",
    href: "/demo/reader-imperial",
    eraLabel: "Tsardom & Early Empire"
  },
  {
    title: "Imperial Russia in the 19th Century",
    period: "1801 – 1914",
    description: "The Napoleonic Wars, the Decembrists, the Great Reforms of Alexander II, industrialization, revolutionary movements, and the last decades of the Romanov monarchy.",
    href: "/demo/reader-reforms",
    eraLabel: "19th Century Imperial Russia"
  },
  {
    title: "Revolution and Civil War",
    period: "1905 – 1922",
    description: "The 1905 Revolution, the collapse of the old order in 1917, the Bolshevik seizure of power, and the brutal civil war that followed.",
    href: "/demo/reader-revolutionary",
    eraLabel: "Revolutionary Era"
  },
  {
    title: "The Soviet Century",
    period: "1922 – 1991",
    description: "The building of the Soviet state under Lenin and Stalin, the Great Patriotic War, the Khrushchev Thaw, Brezhnev stagnation, Gorbachev's reforms, and the final collapse.",
    href: "/demo/reader-soviet",
    eraLabel: "The Soviet Union"
  },
  {
    title: "Post-Soviet Russia",
    period: "1991 – Present",
    description: "The chaotic 1990s, the rise of Vladimir Putin, the reassertion of state power, economic transformation, and Russia's changing place in the world.",
    href: "/demo/reader-putin",
    eraLabel: "Post-Soviet Russia"
  },
];

export default function ErasPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-2">BROWSE THE HISTORY</div>
        <h1 className="text-6xl font-medium tracking-tight">Eras</h1>
        <p className="mt-4 text-xl text-[#3f372f] max-w-3xl">
          Russia’s story unfolds across more than a thousand years. Begin with any period.
        </p>
      </div>

      <div className="space-y-4">
        {eras.map((era, index) => (
          <Link 
            key={index}
            href={era.href}
            className="group block border border-[#d4c9b8] hover:border-[#3f372f] rounded-xl p-8 transition-all bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <div>
                <div className="text-sm text-[#5c5146] tracking-widest">{era.eraLabel.toUpperCase()}</div>
                <div className="text-3xl font-medium tracking-tight mt-1 group-hover:underline">{era.title}</div>
              </div>
              <div className="font-mono text-sm text-[#5c5146] shrink-0 md:text-right">{era.period}</div>
            </div>
            <p className="mt-4 text-lg text-[#3f372f] leading-relaxed">
              {era.description}
            </p>
            <div className="mt-4 text-sm text-[#3f372f] group-hover:underline">Read this era →</div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-sm text-[#5c5146]">
        Looking for a particular theme instead? <Link href="/themes" className="underline">Browse by theme</Link>.
      </div>
    </div>
  );
}
