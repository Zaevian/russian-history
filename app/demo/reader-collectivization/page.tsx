export default function CollectivizationReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">SOVIET UNION • THEMATIC ESSAY</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">Collectivization and the Holodomor</h1>
        <div className="text-[#3f372f] text-sm">1929 – 1933 • Historians cited: Applebaum, Fitzpatrick, Snyder, Plokhy</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>Stalin's forced collectivization of agriculture (1929–1933) was one of the most catastrophic policies of the 20th century. It destroyed the traditional peasant way of life and led to the deaths of millions through famine, particularly in Ukraine (the Holodomor).</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <img src="/assets/visuals/siberian-dawn.jpg" alt="Siberian landscape" className="w-full rounded mb-4" />
          <p className="text-sm text-[#3f372f] italic">The human cost of rapid industrialization and collectivization was borne disproportionately by the peasantry. The regime treated the countryside as a resource to be extracted.</p>
        </div>

        <h2>Why Collectivization?</h2>
        <p>Stalin believed that the Soviet Union needed to industrialize at breakneck speed to survive in a hostile capitalist world. To pay for machines and factories, the state needed grain from the peasants at low prices. When peasants resisted selling at those prices, the regime labeled them "kulaks" and liquidated them as a class.</p>

        <p>The resulting famine in 1932–33 killed an estimated 5–7 million people. The Holodomor in Ukraine is recognized by many historians and governments as a deliberate act of genocide.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        This thematic essay draws on the work of Anne Applebaum (Red Famine) and Timothy Snyder (Bloodlands). The design document calls for explicit treatment of the historiographical debate over whether the famine was intentional.
      </div>
    </div>
  );
}
