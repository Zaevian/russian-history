import Image from 'next/image';
import Link from 'next/link';

export default function SovietReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">THE SOVIET UNION • 1922–1991</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Soviet Century</h1>
        <p className="mt-4 text-xl text-[#3f372f]">From the ruins of civil war to superpower status and final collapse — seventy years that reshaped Russia and the world.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>The Soviet Union was the great experiment of the twentieth century. Born in the blood of civil war, it set out to build an entirely new kind of society — classless, egalitarian, and free from the exploitation that its founders believed defined all previous human history. What actually emerged was something far more complicated: a powerful industrial state, a repressive dictatorship, a genuine social revolution in everyday life, and ultimately a system that could not adapt and therefore collapsed.</p>

        <div className="my-12 border border-[#d4c9b8] bg-white p-8 rounded-xl">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/siberian-dawn.jpg" alt="Siberian landscape" fill className="rounded-lg object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The Gulag system stretched across the entire country. The most remote and brutal camps were located in the far north and east, where prisoners cut timber, mined gold, and built cities in the permafrost.</p>
        </div>

        <h2>From Lenin to Stalin</h2>

        <p>Lenin died in 1924. The succession struggle that followed was won by the man almost everyone had underestimated: Joseph Stalin. By the late 1920s he had outmaneuvered all his rivals and stood alone at the head of the party. The country he now ruled was still overwhelmingly peasant, economically backward, and exhausted by years of war and revolution.</p>

        <p>Stalin’s answer was a second revolution from above. In 1929 he launched the forced collectivization of agriculture and the first Five-Year Plan for rapid industrialization. Collectivization was a catastrophe. Peasants resisted by slaughtering livestock and hiding grain. The state responded with mass deportations and the confiscation of food. The result, especially in Ukraine and Kazakhstan, was a man-made famine that killed millions. At the same time, the industrial drive turned the Soviet Union into a major manufacturing power in less than a decade — at enormous human cost.</p>

        <h2>The Great Terror</h2>

        <p>The mid-1930s brought the Great Terror. Beginning with the assassination of Sergei Kirov in 1934, the regime turned on itself with astonishing ferocity. The old Bolshevik elite, the officer corps of the Red Army, engineers, writers, ordinary workers and peasants — all were swept up in waves of arrest, torture, show trials, and execution. The NKVD quotas for arrests and shootings were set in Moscow and sent down the chain of command. The Terror was not random paranoia. It was a deliberate policy of social engineering and preemptive destruction of any possible opposition, real or imagined.</p>

        <h2>War and Victory</h2>

        <p>The German invasion of June 1941 nearly destroyed the Soviet state. The Red Army suffered catastrophic defeats in the first months. Leningrad was besieged for 872 days. The country lost some of its richest agricultural and industrial regions. Yet somehow the system held. The regime appealed to Russian patriotism as much as to communist ideology. Factories were evacuated eastward. New armies were raised. After the victories at Stalingrad and Kursk, the Soviet Union went on the offensive and eventually took Berlin in May 1945.</p>

        <p>The war cemented the Soviet Union’s status as a superpower. It also left the country devastated — perhaps twenty-seven million dead, thousands of towns and villages destroyed, and a generation permanently scarred.</p>

        <h2>The Long Decline</h2>

        <p>The postwar decades brought stability of a sort. Under Khrushchev the worst excesses of Stalinism were denounced and millions of prisoners were released from the camps. Living standards rose. The Soviet Union achieved spectacular successes in space and nuclear weapons. But the underlying problems — inefficiency, corruption, the inability to innovate, the growing gap with the West — only deepened under Brezhnev and his successors.</p>

        <p>When Mikhail Gorbachev came to power in 1985, he tried to reform the system from within. Glasnost opened the press and allowed honest discussion of the past. Perestroika attempted to restructure the economy and the political system. Instead of controlled renewal, the reforms unleashed forces that the regime could no longer contain. Nationalist movements in the republics, economic collapse, and the loss of the party’s will to use force brought the Soviet Union to an end in December 1991.</p>

        <p>Seventy years after the Bolshevik Revolution, the great experiment was over. Russia, and the fourteen other newly independent states, faced an uncertain future.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Continue: <Link href="/demo/reader-putin" className="underline">Post-Soviet Russia →</Link>
      </div>
    </div>
  );
}
