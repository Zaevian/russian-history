'use client';

import React, { useEffect, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface RulerData {
  id: string;
  name: string;
  reign: string;
  title: string;
  parent?: string;
  x: number;
  y: number;
  description?: string;
  chapterLink?: string;
}

export function GenealogyTree() {
  const [dynasty, setDynasty] = useState<'rurikid' | 'romanov'>('rurikid');
  const [currentData, setCurrentData] = useState<RulerData[]>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lineage, setLineage] = useState<string[]>([]);

  const computeLineage = (id: string, data: RulerData[]): string[] => {
    const path: string[] = [id];
    let current = data.find(r => r.id === id);
    while (current?.parent) {
      path.unshift(current.parent);
      current = data.find(r => r.id === current!.parent);
    }
    return path;
  };

  const loadDynasty = React.useCallback((selected: 'rurikid' | 'romanov') => {
    const file = selected === 'rurikid' ? 'rurikids.json' : 'romanovs.json';
    fetch(`/data/genealogy/${file}`)
      .then(res => res.json())
      .then((data: RulerData[]) => {
        setCurrentData(data);

        const currentLineage = selectedId ? computeLineage(selectedId, data) : [];

        const flowNodes: Node[] = data.map(ruler => {
          const isSelected = selectedId === ruler.id;
          const inLineage = currentLineage.includes(ruler.id);
          return {
            id: ruler.id,
            position: { x: ruler.x, y: ruler.y },
            data: { 
              label: (
                <div className="text-center p-1">
                  <div className="font-semibold text-sm">{ruler.name}</div>
                  <div className="text-xs text-[#5c5146]">{ruler.reign}</div>
                  <div className="text-[10px] text-[#3f372f] mt-0.5">{ruler.title}</div>
                </div>
              ) 
            },
            style: { 
              background: isSelected ? '#e8d9c2' : (inLineage ? '#f4e9d8' : '#f8f5f0'), 
              border: isSelected ? '2px solid #1a1816' : '1px solid #3f372f',
              borderRadius: '8px',
              padding: '4px 8px',
              minWidth: '140px',
              cursor: 'pointer'
            }
          };
        });
        setNodes(flowNodes);

        const flowEdges: Edge[] = data
          .filter(ruler => ruler.parent)
          .map(ruler => ({
            id: `e-${ruler.parent}-${ruler.id}`,
            source: ruler.parent!,
            target: ruler.id,
            animated: true,
            style: { stroke: currentLineage.includes(ruler.id) ? '#1a1816' : '#d4c9b8', strokeWidth: currentLineage.includes(ruler.id) ? 3 : 1 }
          }));
        setEdges(flowEdges);
      })
      .catch(() => {
        console.log('Genealogy data not found');
      });
  }, [selectedId]);

  useEffect(() => {
    loadDynasty(dynasty);
  }, [dynasty, loadDynasty]);

  const onNodeClick = (event: React.MouseEvent, node: { id: string }) => {
    const id = node.id;
    if (selectedId === id) {
      setSelectedId(null);
      setLineage([]);
    } else {
      const newLineage = computeLineage(id, currentData);
      setSelectedId(id);
      setLineage(newLineage);
      // Reload to apply styles
      loadDynasty(dynasty);
    }
  };

  const selectedRuler = currentData.find(r => r.id === selectedId);

  const onConnect = (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setDynasty('rurikid')}
            className={`px-3 py-1 text-sm rounded ${dynasty === 'rurikid' ? 'bg-[#3f372f] text-white' : 'border'}`}
          >
            Rurikids (Early)
          </button>
          <button 
            onClick={() => setDynasty('romanov')}
            className={`px-3 py-1 text-sm rounded ${dynasty === 'romanov' ? 'bg-[#3f372f] text-white' : 'border'}`}
          >
            Romanovs (Imperial)
          </button>
        </div>

        <div className="h-[420px] border border-[#d4c9b8] rounded-xl overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            attributionPosition="bottom-left"
          >
            <MiniMap />
            <Controls />
            <Background gap={16} color="#d4c9b8" />
          </ReactFlow>
        </div>
        <div className="text-xs text-[#5c5146] mt-2">Click a node to highlight lineage and see details →</div>
      </div>

      {/* Details Panel */}
      <div className="lg:w-80 border border-[#d4c9b8] rounded-xl p-4 bg-white min-h-[200px]">
        {selectedRuler ? (
          <>
            <div className="font-semibold text-lg">{selectedRuler.name}</div>
            <div className="text-sm text-[#5c5146]">{selectedRuler.reign} — {selectedRuler.title}</div>
            
            {selectedRuler.description && (
              <p className="mt-3 text-sm">{selectedRuler.description}</p>
            )}

            {selectedRuler.chapterLink && (
              <a 
                href={selectedRuler.chapterLink} 
                className="inline-block mt-4 text-sm underline text-[#3f372f]"
              >
                Read related chapter →
              </a>
            )}
          </>
        ) : (
          <div className="text-sm text-[#5c5146]">
            Select a ruler on the tree to see details and lineage.
          </div>
        )}
      </div>
    </div>
  );
}
