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
}

export function GenealogyTree() {
  const [rawData, setRawData] = useState<RulerData[]>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Load structured data from JSON
  useEffect(() => {
    fetch('/data/genealogy/rurikids.json')
      .then(res => res.json())
      .then((data: RulerData[]) => {
        setRawData(data);

        // Convert JSON data to React Flow nodes
        const flowNodes: Node[] = data.map(ruler => ({
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
            background: '#f8f5f0', 
            border: '1px solid #3f372f',
            borderRadius: '8px',
            padding: '4px 8px',
            minWidth: '140px'
          }
        }));

        setNodes(flowNodes);

        // Generate edges from parent relationships in the data
        const flowEdges: Edge[] = data
          .filter(ruler => ruler.parent)
          .map(ruler => ({
            id: `e-${ruler.parent}-${ruler.id}`,
            source: ruler.parent!,
            target: ruler.id,
            animated: true,
            style: { stroke: '#d4c9b8' }
          }));

        setEdges(flowEdges);
      })
      .catch(() => {
        console.log('Genealogy data not found - using empty tree');
      });
  }, [setNodes, setEdges]);

  const onConnect = (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="h-[420px] border border-[#d4c9b8] rounded-xl overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap />
        <Controls />
        <Background gap={16} color="#d4c9b8" />
      </ReactFlow>
    </div>
  );
}
