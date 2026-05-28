import Link from 'next/link';

export default function NinetiesReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">POST-SOVIET RUSSIA • 1991–1999</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The 1990s: Collapse, Reform, and Humiliation</h1>
        <p className="mt-4 text-xl text-[#3f372f]">The painful birth of the Russian Federation — economic shock, political violence, the rise of the oligarchs, and the search for a new identity.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>December 25, 1991, was not just the end of the Soviet Union. It was the end of an entire world order that had shaped Russian life for seventy years. The red flag came down over the Kremlin. The republics that had formed the USSR became independent states. Russia itself was suddenly a smaller, poorer, and far more uncertain country than it had been a few months earlier.</p>

        <p>Boris Yeltsin, who had risen to power by opposing the August 1991 coup against Gorbachev, now faced the task of governing a nation in free fall. The economy was collapsing. The old central planning system no longer functioned, but nothing coherent had replaced it. Shops were empty. Wages went unpaid for months. The ruble lost almost all value. Life expectancy for Russian men plummeted as alcoholism, violence, and despair took their toll.</p>

        <h2>Shock Therapy and the Oligarchs</h2>

        <p>The economic program chosen by the new government, under the influence of Western advisors and young Russian reformers, was known as “shock therapy.” Prices were liberalized overnight. Most state enterprises were to be privatized rapidly. The idea was that the pain would be brief and that a functioning market economy would emerge quickly on the ruins of the old system.</p>

        <p>The reality was different. Hyperinflation wiped out savings. The rapid voucher privatization allowed a small group of well-connected insiders — soon called “oligarchs” — to acquire enormous stakes in the country’s most valuable assets (oil, gas, metals, banks) for a fraction of their true worth. While a tiny new class became fabulously rich almost overnight, the great majority of Russians experienced the 1990s as a period of catastrophic decline in living standards.</p>

        <h2>The 1993 Constitutional Crisis</h2>

        <p>Political conflict was equally brutal. Yeltsin and the Supreme Soviet (the old parliament) clashed repeatedly over the pace of reform and the distribution of power. In the autumn of 1993 the confrontation turned violent. Yeltsin ordered tanks to fire on the parliament building — the “White House” — in central Moscow. Dozens were killed. The new constitution that followed greatly strengthened the presidency at the expense of the legislature and judiciary. Many Russians saw the event not as the defense of democracy but as the moment when the new regime showed it was willing to use force against its own people when convenient.</p>

        <h2>Chechnya and National Humiliation</h2>

        <p>The war in Chechnya, which began in 1994, became a symbol of the new Russia’s weakness and brutality. A poorly planned invasion to suppress a separatist movement turned into a bloody quagmire. Russian forces committed well-documented atrocities. Chechen fighters responded with terrorism. The war was deeply unpopular at home and damaged Russia’s international reputation. A second war would begin in 1999 under very different political circumstances.</p>

        <h2>The End of the Yeltsin Era</h2>

        <p>By the late 1990s the country was exhausted. The financial crisis of August 1998 wiped out what little progress had been made. Yeltsin’s health was failing and his popularity was near zero. The “reformers” who had promised a rapid transition to a prosperous democratic Russia were widely discredited. For many ordinary citizens, the words “democracy,” “reform,” and “market” had become associated with poverty, corruption, and national weakness.</p>

        <p>On December 31, 1999, Yeltsin resigned and handed power to an obscure former KGB officer named Vladimir Putin, who had been prime minister for only a few months. The 1990s were over. A new era was beginning — one that would be defined in large part by the desire to overcome the humiliations and chaos of the previous decade.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Continue: <Link href="/demo/reader-putin" className="underline">The Putin Era →</Link>
      </div>
    </div>
  );
}
