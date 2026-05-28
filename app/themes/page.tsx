import Link from 'next/link';

const themes = [
  {
    title: "The Nature of Russian Autocracy",
    description: "How power has been organized and justified from the princes of Kyiv through the Romanovs and into the Soviet and post-Soviet periods.",
    href: "/demo/reader-autocracy",
  },
  {
    title: "Empire and the Nationality Question",
    description: "The management — and frequent mismanagement — of Russia’s vast multi-ethnic empire from Muscovy to the Soviet Union and the Russian Federation.",
    href: "/demo/reader-nationality",
  },
  {
    title: "Orthodoxy and the State",
    description: "The long, complicated relationship between the Russian Orthodox Church and political power, from the Baptism of Rus’ to the present.",
    href: "/demo/reader-orthodoxy",
  },
  {
    title: "The Russian Economy Through Time",
    description: "From medieval fur tribute and serf agriculture through industrialization, central planning, shock therapy, and the resource economy of today.",
    href: "/demo/reader-economy",
  },
  {
    title: "The Great Patriotic War",
    description: "The Soviet experience of the Second World War — military catastrophe, incredible resilience, staggering cost, and its enduring place in national memory.",
    href: "/demo/reader-ww2",
  },
  {
    title: "The Holodomor and Collectivization",
    description: "The forced collectivization of agriculture and the famine that killed millions in Ukraine and other grain-growing regions in the early 1930s.",
    href: "/demo/reader-holodomor",
  },
  {
    title: "Everyday Life in the Soviet Union",
    description: "What ordinary existence looked like for most citizens across seven decades — housing, work, shortages, culture, and the quiet negotiations of daily survival.",
    href: "/demo/reader-everyday-soviet",
  },
  {
    title: "The 1990s: Collapse and Rebirth",
    description: "The dramatic and painful transition from the Soviet Union to the Russian Federation — privatization, oligarchs, hyperinflation, and the search for a new order.",
    href: "/demo/reader-1990s-reforms",
  },
];

export default function ThemesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="uppercase tracking-[2px] text-sm text-[#5c5146] mb-2">DEEPER THEMES</div>
        <h1 className="text-6xl font-medium tracking-tight">Themes</h1>
        <p className="mt-4 text-xl text-[#3f372f] max-w-3xl">
          Cross-cutting questions that run through the entire Russian story.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {themes.map((theme, index) => (
          <Link 
            key={index}
            href={theme.href}
            className="group block border border-[#d4c9b8] hover:border-[#3f372f] rounded-xl p-8 bg-white h-full transition-all"
          >
            <div className="text-2xl font-medium tracking-tight group-hover:underline">{theme.title}</div>
            <p className="mt-4 text-lg text-[#3f372f] leading-relaxed">
              {theme.description}
            </p>
            <div className="mt-6 text-sm text-[#3f372f] group-hover:underline">Read this essay →</div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-sm text-[#5c5146]">
        Or return to the main chronological <Link href="/eras" className="underline">Eras</Link>.
      </div>
    </div>
  );
}
