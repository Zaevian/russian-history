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
        Click any ruler to highlight their full lineage (ancestors). A details panel appears with more context and links to related chapters.
        Data is loaded from structured JSON. Portrait cluster from our generated visuals shown below for atmosphere.
      </div>

      <div className="mt-6">
        <img 
          src="/assets/visuals/rurikid-romanov-portrait-cluster.jpg" 
          alt="Historical portraits of Rurikid and Romanov rulers" 
          className="w-full max-w-2xl rounded border border-[#d4c9b8]"
        />
      </div>
    </div>
  );
}
