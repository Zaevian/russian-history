import Link from 'next/link';

export default function NinetiesReformsReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">POST-SOVIET RUSSIA • 1990s</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The 1990s: Shock Therapy and the Oligarchs</h1>
        <p className="mt-4 text-xl text-[#3f372f]">The radical attempt to create a market economy overnight — and the social and political consequences that followed.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>The economic reforms launched in 1992 under Acting Prime Minister Yegor Gaidar were the most ambitious and rapid attempt in history to dismantle a command economy and replace it with a market system. The program, often called “shock therapy,” combined immediate price liberalization, sharp cuts in government spending, tight monetary policy, and mass privatization of state assets.</p>

        <p>The results were far more painful and long-lasting than the reformers had publicly predicted. Prices skyrocketed. Savings were wiped out. Industrial production collapsed. Real wages fell by more than half in the first two years. Life expectancy for Russian men dropped dramatically as alcoholism, violence, and despair surged. For the great majority of the population, the 1990s felt like a catastrophe rather than a transition.</p>

        <h2>Privatization and the Birth of the Oligarchs</h2>

        <p>The most consequential (and controversial) part of the program was the privatization of state enterprises. In theory, vouchers were distributed to every citizen so that ordinary people could become shareholders. In practice, the process was chaotic and opaque. A small group of well-connected bankers and businessmen acquired controlling stakes in the country’s most valuable assets — oil companies, metals plants, banks — often through loans-for-shares schemes in which they lent money to the state and received the assets as collateral when the loans were not repaid.</p>

        <p>By the late 1990s, a handful of “oligarchs” controlled a huge share of the Russian economy and wielded enormous political influence. The perception that the transition had been a massive transfer of public wealth into a few private hands became one of the most enduring sources of anger and disillusionment with the 1990s reforms.</p>

        <h2>The 1998 Crisis and Political Fallout</h2>

        <p>The Asian financial crisis and falling oil prices exposed the fragility of the new Russian economy. In August 1998 the government defaulted on its domestic debt and devalued the ruble. The crisis wiped out what little progress had been made for many middle-class Russians and destroyed the credibility of the reform team.</p>

        <p>By the end of the decade, the word “reform” had become toxic for large parts of the population. When Vladimir Putin came to power promising stability and the restoration of state authority, he was able to draw on deep popular fatigue with the economic and political disorder of the previous ten years.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        See also: <Link href="/demo/reader-1990s" className="underline">The broader 1990s chapter</Link> • <Link href="/demo/reader-putin" className="underline">The Putin Era</Link>
      </div>
    </div>
  );
}
