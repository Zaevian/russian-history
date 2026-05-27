export default function ReaderDemo() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">PRE-STATE &amp; KIEVAN RUS' • NARRATIVE</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Origins of Kievan Rus'</h1>
        <div className="text-[#3f372f] text-sm">c. 750 – 1050 • Historians cited: Kollmann, Kivelson, Plokhy, Hosking</div>
      </div>

      <div className="prose text-[#1a1816] max-w-none">
        <p>The emergence of Kievan Rus' in the ninth and tenth centuries represents one of the most consequential state-formation processes in medieval Europe.</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <div className="uppercase text-xs tracking-widest text-[#5c5146] mb-2">PRIMARY SOURCE</div>
          <h5 className="font-medium mb-4">Primary Chronicle (Laurentian Codex), entry for 859</h5>
          <blockquote className="border-l-4 border-[#3f372f] pl-6 italic text-lg">
            The Varangians from beyond the sea imposed tribute upon the Chuds, the Slavs, the Merians, the Ves', and the Krivichians.
          </blockquote>
          <div className="mt-4 text-sm text-[#3f372f]">
            <strong>Provenance:</strong> Compiled in Kyiv in the early twelfth century from earlier oral and written traditions. The Laurentian manuscript dates to 1377.
          </div>
        </div>

        <h2>The Normanist Controversy</h2>
        <p>Few questions in early Russian history have generated more scholarly passion than the origins of the term "Rus'" and the role of Scandinavian elites in the formation of the first East Slavic state.</p>

        <div className="my-8 border-l-4 border-[#3f372f] bg-[#f8f5f0] p-6 rounded-r">
          <div className="uppercase text-xs tracking-widest text-[#5c5146] mb-1">HISTORIOGRAPHICAL DEBATE</div>
          <h4 className="text-xl font-medium mb-1">The Normanist Debate</h4>
          <p className="text-[#3f372f] italic mb-4">To what extent was the Rus' polity founded by Scandinavian (Varangian) elites?</p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border bg-white p-4 rounded">
              <div className="font-medium mb-2">Traditional Normanist Position</div>
              <div>Scandinavian warrior-traders played a decisive role in organizing the first East Slavic polities.</div>
              <div className="text-xs mt-2 text-[#5c5146]">Kollmann, Kivelson</div>
            </div>
            <div className="border bg-white p-4 rounded">
              <div className="font-medium mb-2">Indigenous Emphasis</div>
              <div>Local East Slavic populations drove the fundamental development, with Scandinavians playing a secondary role.</div>
              <div className="text-xs mt-2 text-[#5c5146]">Plokhy, Hosking</div>
            </div>
          </div>
        </div>

        <p>By the reign of Yaroslav the Wise, Kyiv had become a major European capital. The foundations laid in these centuries would prove remarkably durable.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        This is a demonstration of the scholarly reader experience described in the design document. 
        All interpretive claims are supported by multiple prominent historians with explicit presentation of historiographical debates.
      </div>
    </div>
  );
}
