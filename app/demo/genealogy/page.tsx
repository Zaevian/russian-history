import { GenealogyTree } from '@/components/GenealogyTree';

export default function GenealogyDemo() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="uppercase tracking-[2px] text-xs text-[#5c5146]">INTERACTIVE DEMO</div>
        <h1 className="text-5xl font-medium tracking-tight mt-1">Rurikid Genealogy Explorer</h1>
        <p className="mt-3 text-lg text-[#3f372f] max-w-2xl">
          Early rulers of the Rurikid dynasty. This component will eventually use React Flow with rich portrait nodes, marriage connections, and real-time linking to articles and maps.
        </p>
      </div>

      <GenealogyTree />

      <div className="mt-8 text-sm text-[#5c5146]">
        Uses Framer Motion for interactions. In the full site this will pull from structured JSON data in <code>/data/genealogy/</code> and sync with the main reader.
      </div>
    </div>
  );
}
