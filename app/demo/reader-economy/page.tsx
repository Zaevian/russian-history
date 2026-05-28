export default function EconomyThematicReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">THEMATIC ESSAY</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Russian Economy Across the Centuries</h1>
        <div className="text-[#3f372f] text-sm">From serfdom to oligarchs</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>Russia's economic development has been shaped by its vast territory, harsh climate, and the needs of a strong state. For centuries, the economy was organized around extracting resources and labor to support military power and the court.</p>

        <h2>Serfdom and Industrialization</h2>
        <p>Serfdom provided the labor backbone for both agriculture and early industry. The emancipation of 1861 came late and left peasants with heavy burdens, slowing the development of a modern labor market.</p>

        <p>The Soviet period saw the most rapid industrialization in history, achieved through extreme coercion and at enormous human cost. The command economy delivered heavy industry and military power but chronically failed at consumer goods and innovation.</p>

        <h2>Post-Soviet Transition</h2>
        <p>The 1990s privatization created a highly unequal economy dominated by raw material exports. The 2000s oil boom masked structural weaknesses. Sanctions after 2014 and the 2022 war have accelerated a partial return to autarky and state control.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        This thematic essay traces the long-term patterns of state-dominated extraction and their consequences for Russian society.
      </div>
    </div>
  );
}
