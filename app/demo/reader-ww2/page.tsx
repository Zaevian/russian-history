import Image from 'next/image';
import Link from 'next/link';

export default function WW2Reader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">THE GREAT PATRIOTIC WAR • 1941–1945</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Eastern Front</h1>
        <p className="mt-4 text-xl text-[#3f372f]">The largest and bloodiest conflict in human history — and the defining experience of the Soviet 20th century.</p>
      </div>

      <div className="prose text-[#1a1816] max-w-none text-[17px] leading-relaxed">
        <p>On June 22, 1941, Nazi Germany launched the largest invasion in the history of warfare. Operation Barbarossa sent over three million German and allied troops across the Soviet border in a campaign explicitly designed not merely to defeat the Red Army but to destroy the Soviet state and enslave or exterminate much of its population. Hitler and his planners viewed the war in the East as a war of annihilation and colonial conquest on a continental scale.</p>

        <div className="my-12 border border-[#d4c9b8] bg-white p-8 rounded-xl">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/siberian-dawn.jpg" alt="Vast Russian landscape" fill className="rounded-lg object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The sheer scale of the Eastern Front — the distances, the weather, the human cost — is difficult to grasp. More people died here than in all other theaters of the Second World War combined.</p>
        </div>

        <h2>Catastrophe and Survival</h2>

        <p>The first six months were catastrophic for the Soviet Union. The Red Army, weakened by the purges of the 1930s and caught by surprise, lost millions of men and vast territories. Entire armies were encircled and destroyed. By December 1941 the Germans stood at the gates of Moscow and had laid siege to Leningrad. The Soviet state came closer to total collapse than at any other moment in its history.</p>

        <p>Yet the regime did not fall. Stalin remained in Moscow. The government evacuated hundreds of factories to the Urals and Siberia. New armies were raised from the vast manpower reserves of the country. The winter of 1941–42 halted the German advance before Moscow. The first major Soviet counteroffensive showed that the Wehrmacht was not invincible.</p>

        <h2>Stalingrad and the Turning of the Tide</h2>

        <p>The Battle of Stalingrad (August 1942 – February 1943) became the symbol of Soviet resistance and the turning point of the entire war. In one of the most brutal urban battles in history, the Red Army eventually encircled and destroyed the German Sixth Army. The psychological impact was enormous. From this point the strategic initiative in the East passed permanently to the Soviet side.</p>

        <p>The Battle of Kursk in the summer of 1943 — the largest tank battle ever fought — confirmed the shift. After Kursk the Red Army began the long, grinding advance that would eventually take it to Berlin.</p>

        <h2>The Human Cost</h2>

        <p>The numbers remain almost incomprehensible. Historians now estimate that the Soviet Union lost approximately 27 million people during the war — soldiers and civilians, men and women, old and young. The western republics (Ukraine, Belarus, the Baltic states) and the occupied territories of Russia suffered the worst. The Holocaust was carried out with particular thoroughness on Soviet soil; millions of Soviet Jews were murdered. The siege of Leningrad alone killed roughly one million civilians from starvation and cold.</p>

        <p>The Red Army’s advance into Eastern Europe and Germany in 1944–45 was accompanied by its own atrocities, most notoriously the mass rape of German women. The war brutalized an entire generation on all sides.</p>

        <h2>Victory and Its Legacy</h2>

        <p>The Soviet victory in May 1945 was total. The Red Army captured Berlin. The Nazi regime was destroyed. For the Soviet people the war became the central legitimizing myth of the state — the Great Patriotic War in which the entire nation had united behind the Communist Party to save the Motherland. This narrative contained real truth and was also heavily mythologized. It justified enormous sacrifices and also justified the continued power of the regime after the war.</p>

        <p>The war left the Soviet Union a superpower with the largest army in the world and an empire in Eastern Europe. It also left a country full of widows, orphans, invalids, and ruined cities. The memory of that victory — and the price paid for it — remains one of the most powerful forces in Russian politics and culture to this day.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#d4c9b8] text-sm text-[#5c5146]">
        Related: <Link href="/demo/reader-holodomor" className="underline">The Holodomor</Link> • <Link href="/demo/reader-ww2-homefront" className="underline">The Soviet Home Front</Link>
      </div>
    </div>
  );
}
