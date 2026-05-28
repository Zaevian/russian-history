import { GenealogyTree } from '@/components/GenealogyTree';

export default function GenealogyDemo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="uppercase tracking-[2px] text-xs text-[#5c5146]">INTERACTIVE DEMO — PER DESIGN DOCUMENT</div>
        <h1 className="text-5xl font-medium tracking-tight mt-1">Rurikid Genealogy Explorer</h1>
        <p className="mt-3 text-lg text-[#3f372f] max-w-3xl">
          Early rulers of the Rurikid dynasty. Built with React Flow (@xyflow/react) exactly as specified in the design document (Key Decision on genealogy visualization).
          Nodes are interactive (drag, zoom, connect). In the full site this will include rich portrait nodes from our generated assets, marriage links, reign metadata, and bidirectional sync with the main timeline and maps.
        </p>
      </div>

      <GenealogyTree />

      <div className="mt-8 text-sm text-[#5c5146]">
        Switch between dynasties above. Data loads from real JSON files (<code>rurikids.json</code> and <code>romanovs.json</code>). This is the foundation for a much richer genealogy explorer with portraits and deeper connections.
      </div>
    </div>
  );
}
