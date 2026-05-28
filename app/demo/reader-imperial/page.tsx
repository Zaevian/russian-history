import Image from 'next/image';
import Link from 'next/link';

export default function ImperialReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">IMPERIAL RUSSIA • 1613–1917</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Russian Empire in the Long 19th Century</h1>
        <p className="mt-4 text-xl text-[#3f372f]">From Peter the Great’s heirs to the last Romanov — modernization, reform, reaction, and the slow building of revolutionary pressure.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>The Romanov dynasty that took the throne in 1613 presided over the transformation of Muscovy into a true European great power. By the death of Peter the Great in 1725, Russia had a modern army, a navy, a new capital on the Baltic, and a place at the table of European diplomacy. The next two centuries would test whether that power could be sustained and modernized without destroying the autocratic foundations on which it rested.</p>

        <div className="my-12 border border-[#d4c9b8] bg-white p-8 rounded-xl">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/winter-palace-interior.jpg" alt="Winter Palace" fill className="rounded-lg object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The Winter Palace in St. Petersburg became the symbolic heart of the empire. Its scale reflected both the grandeur and the remoteness of imperial power.</p>
        </div>

        <h2>Enlightened Despotism and Its Limits</h2>

        <p>Peter’s successors — especially Catherine the Great (1762–1796) — continued the work of westernization. Catherine corresponded with Voltaire and Diderot, expanded the empire dramatically into the Black Sea region and Poland, and issued a famous Instruction that spoke the language of Enlightenment reform. Yet the reality remained absolute monarchy backed by serfdom. The Pugachev rebellion of 1773–75, a massive peasant and Cossack uprising, revealed the depth of social tension beneath the glittering surface of the court.</p>

        <p>The Napoleonic Wars marked Russia’s arrival as a full European great power. The defeat of the Grande Armée in 1812 became a national epic. Yet the officers who marched to Paris returned with new ideas. The Decembrist revolt of 1825 — an attempted coup by reform-minded noble officers — was the first open challenge to autocracy from within the elite. Nicholas I crushed it and spent the rest of his reign trying to freeze Russian society in place.</p>

        <h2>The Great Reforms and Their Aftermath</h2>

        <p>The Crimean War (1853–56) exposed how far Russia had fallen behind the industrializing West. Alexander II, who came to the throne in the middle of the war, launched the most ambitious reform program since Peter. The emancipation of the serfs in 1861 was the centerpiece. In theory it freed more than twenty million people. In practice the terms were heavily weighted toward the gentry: peasants received less land than they had worked, had to pay heavy “redemption” dues for forty-nine years, and remained tied to the village commune (mir).</p>

        <p>Other reforms followed — local government (zemstvos), an independent judiciary, military modernization, and expansion of education. For a moment it seemed Russia might evolve into a more modern constitutional state. But the assassination of Alexander II in 1881 by revolutionary terrorists ended the reform era. His son Alexander III and grandson Nicholas II reversed course. The autocracy reasserted control while the social problems created by rapid industrialization and uneven emancipation only grew worse.</p>

        <h2>Industrialization and Revolutionary Pressure</h2>

        <p>From the 1890s, Russia industrialized at breakneck speed under the direction of Finance Minister Sergei Witte. Foreign capital poured in. New factories rose in St. Petersburg, Moscow, the Donbas, and Baku. A small but militant working class appeared. At the same time the countryside remained mired in poverty and land hunger. The intelligentsia split into those who wanted gradual liberal reform and those who believed only revolution could save Russia.</p>

        <p>The 1905 Revolution, triggered by the disastrous war with Japan and Bloody Sunday, forced Nicholas II to grant a parliament (the Duma) and limited civil rights. The regime spent the next decade trying to claw those concessions back. By 1914 Russia was a country of extreme contrasts: a modernizing industrial sector and a still-feudal countryside, a sophisticated high culture and mass illiteracy, a tsar who believed in divine right and a growing population that no longer accepted it.</p>

        <p>The First World War did not create these contradictions — it simply made them unbearable. When the old order finally collapsed in 1917, three centuries of Romanov rule ended in a matter of days.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Continue: <Link href="/demo/reader-revolutionary" className="underline">Revolution and Civil War →</Link>
      </div>
    </div>
  );
}
