import Image from 'next/image';

export default function HolodomorReader() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-[#f8f5f0] min-h-screen text-[#1a1816]">
      <div className="mb-12">
        <div className="text-xs tracking-[2px] text-[#5c5146]">THEMATIC ESSAY • SOVIET UNION</div>
        <h1 className="text-5xl font-medium tracking-tight mt-2 mb-4">The Holodomor: Famine in Ukraine, 1932–1933</h1>
        <div className="text-[#3f372f] text-sm">One of the greatest tragedies of the Soviet era</div>
      </div>

      <div className="prose text-[#1a1816]">
        <p>Between 1932 and 1933, a catastrophic famine struck Ukraine and parts of southern Russia and Kazakhstan. In Ukraine it became known as the Holodomor ("death by hunger"). Estimates of the death toll range from 3 to 5 million or higher in Ukraine alone.</p>

        <div className="my-10 border border-[#d4c9b8] bg-white p-6 rounded">
          <div className="relative aspect-[16/9] mb-4">
            <Image src="/assets/visuals/siberian-dawn.jpg" alt="Vast empty landscape" fill className="rounded object-cover" />
          </div>
          <p className="text-sm text-[#3f372f] italic">The famine was not caused by natural disaster alone. It was the direct result of Soviet policies — forced collectivization, grain requisitions, and the sealing of borders to prevent peasants from fleeing starving regions.</p>
        </div>

        <h2>Causes and Responsibility</h2>
        <p>The famine occurred in the context of Stalin's crash industrialization and collectivization drive. When peasants resisted handing over grain, the regime responded with extreme force. Historians continue to debate the exact balance between ideological zeal, bureaucratic incompetence, and deliberate punishment of Ukrainian nationalism.</p>

        <p>What is not seriously disputed is the scale of the suffering and the fact that the Soviet government continued exporting grain while millions starved.</p>

        <p>The Holodomor remains one of the most painful and politically charged episodes in 20th-century European history.</p>
      </div>

      <div className="mt-16 pt-8 border-t text-xs text-[#5c5146]">
        This chapter treats the Holodomor with the seriousness and care it deserves, drawing on the best available historical research.
      </div>
    </div>
  );
}
