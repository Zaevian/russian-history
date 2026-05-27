export default function VisualsGallery() {
  const visuals = [
    { file: "kievan-rus-hero.jpg", title: "Kievan Rus' Settlement", era: "Pre-State & Kievan Rus'" },
    { file: "mongol-steppe.jpg", title: "The Eurasian Steppe", era: "Mongol Period" },
    { file: "winter-palace-interior.jpg", title: "Winter Palace at Twilight", era: "Imperial Russia" },
    { file: "petrograd-1917.jpg", title: "Petrograd, February 1917", era: "Revolutionary Era" },
    { file: "siberian-dawn.jpg", title: "Siberian Landscape", era: "Soviet Period (sensitive)" },
    { file: "primary-source-manuscript.jpg", title: "17th Century Manuscript", era: "Scholarly Apparatus" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-medium mb-4">Complementary Visual Archive</h1>
      <p className="max-w-2xl text-lg text-[#3f372f] mb-10">
        All images on this site are strictly atmospheric and mnemonic. They are generated or curated to support the reading experience, never to replace the text, citations, or historiographical debate.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {visuals.map((v, i) => (
          <div key={i}>
            <img 
              src={`/assets/visuals/${v.file}`} 
              alt={v.title}
              className="w-full rounded shadow-lg"
            />
            <div className="mt-3">
              <div className="font-medium">{v.title}</div>
              <div className="text-sm text-[#5c5146]">{v.era}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-sm text-[#5c5146]">
        Full production rules, prompts, and historian review status are maintained in the Visual Assets Tracker.
      </div>
    </div>
  );
}
