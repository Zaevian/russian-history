import Image from 'next/image';
import Link from 'next/link';

export default function RevolutionaryReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">REVOLUTIONARY ERA • 1905–1922</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">Revolution and the End of the Old Order</h1>
        <p className="mt-4 text-xl text-[#3f372f]">The long crisis of the Romanov monarchy, the explosions of 1905 and 1917, and the civil war that gave birth to the Soviet state.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>By the beginning of the twentieth century, the Russian Empire was the largest state on earth and one of the most fragile great powers. It stretched from the Baltic to the Pacific, from the Arctic to the deserts of Central Asia. It contained over a hundred different peoples. It was ruled by an autocracy that claimed absolute power from God but was increasingly unable to govern the society it had helped to create.</p>

        <div className="my-12 border border-[#d4c9b8] bg-white p-8 rounded-xl">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/petrograd-1917.jpg" alt="Revolutionary Petrograd" fill className="rounded-lg object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The capital in the final months of the old regime. War, inflation, and hunger had turned Petrograd into a powder keg.</p>
        </div>

        <h2>The Crisis of the Old Regime</h2>

        <p>The problems were structural and deepening. The vast majority of the population were still peasants, many of them land-hungry and resentful of the gentry estates that survived the emancipation of 1861. Rapid industrialization after 1890 had created a new urban working class concentrated in a handful of big cities — St. Petersburg, Moscow, the new industrial centers of the south. These workers lived in miserable conditions and had almost no legal way to improve them.</p>

        <p>The educated classes — the intelligentsia — were deeply alienated. Many believed that only the complete overthrow of the autocracy could bring Russia into the modern world. Revolutionary parties of every stripe — Socialist Revolutionaries, Mensheviks, Bolsheviks, anarchists — operated in the underground, arguing about tactics and the shape of the future while the police tried, with mixed success, to suppress them.</p>

        <h2>1905: The First Revolution</h2>

        <p>The spark came from an unexpected place. Russia’s disastrous war with Japan exposed the regime’s incompetence. In January 1905, a peaceful procession of workers led by the priest Father Gapon marched to the Winter Palace in St. Petersburg to present a petition to the Tsar. Troops opened fire. Hundreds were killed. “Bloody Sunday” shattered the myth that the Tsar was the “Little Father” who would protect his people if only he knew their suffering.</p>

        <p>The country exploded. Strikes spread across the empire. Peasants seized land and burned manor houses. Non-Russian nationalities demanded rights or independence. In October a general strike brought the capital to a standstill. Nicholas II, facing the complete breakdown of authority, issued the October Manifesto. It promised a constitution, an elected parliament (the Duma), and basic civil liberties. For the first time, the autocracy had conceded that it could not rule without some form of popular consent.</p>

        <p>The concessions were real but limited. The new Duma had little real power. The regime recovered its nerve, used the army to crush the remaining centers of rebellion, and clawed back many of the promised freedoms. The fundamental problems — land, labor, nationality, and the nature of power itself — remained unsolved.</p>

        <h2>War and Collapse</h2>

        <p>The First World War finished what 1905 had begun. The conflict placed impossible strains on an already creaking system. The army suffered catastrophic losses. The home front collapsed under the weight of inflation, food shortages, and transport breakdown. In February 1917, strikes and demonstrations in Petrograd again spiraled out of control. This time the troops sent to suppress them refused to fire on the crowds. The monarchy fell almost without resistance. Nicholas II abdicated. A Provisional Government formed from the Duma tried to steer Russia toward a constitutional republic while continuing the war.</p>

        <h2>The Bolshevik Seizure of Power</h2>

        <p>Alongside the Provisional Government sat the Petrograd Soviet, representing workers and soldiers. The situation of “dual power” could not last. In April, Vladimir Lenin returned from exile in Switzerland and called for the immediate overthrow of the Provisional Government and the transfer of all power to the Soviets. For months the Bolsheviks remained a minority. Then the summer and autumn brought military defeat, economic breakdown, and peasant seizures of land. In October 1917 the Bolsheviks, now commanding majorities in the key Soviets, seized power in Petrograd with almost no bloodshed.</p>

        <h2>Civil War and the Birth of the Soviet State</h2>

        <p>What followed was not the peaceful construction of socialism but four years of brutal civil war. The Bolsheviks faced enemies on every side: monarchists, liberals, rival socialists, Ukrainian nationalists, foreign intervention forces, and peasant rebels who wanted no government at all. The Red Army, built from nothing by Leon Trotsky, eventually prevailed through a combination of ruthless centralization, terror, and the fact that the anti-Bolshevik forces were deeply divided among themselves.</p>

        <p>By 1921 the old Russian Empire lay in ruins. Millions were dead from war, famine, and epidemic. The economy had collapsed. Yet the Bolsheviks had survived, and in the process they had created a new kind of state — highly centralized, ideologically driven, and willing to use unlimited violence to achieve its goals. The Soviet Union, formally proclaimed in 1922, was born in the fire of civil war. The era of revolutions had ended. The era of Soviet power had begun.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Continue: <Link href="/demo/reader-soviet" className="underline">The Soviet Century →</Link>
      </div>
    </div>
  );
}
