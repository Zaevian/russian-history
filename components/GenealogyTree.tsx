'use client';

import React, { useCallback } from 'react';
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

const initialNodes: Node[] = [
  { id: '1', position: { x: 100, y: 50 }, data: { label: 'Rurik\n862–879' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '2', position: { x: 300, y: 50 }, data: { label: 'Oleg\n879–912' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '3', position: { x: 500, y: 50 }, data: { label: 'Igor\n912–945' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '4', position: { x: 700, y: 50 }, data: { label: 'Olga (regent)\n945–962' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '5', position: { x: 400, y: 200 }, data: { label: 'Sviatoslav I\n962–972' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '6', position: { x: 600, y: 200 }, data: { label: 'Vladimir the Great\n980–1015' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
  { id: '7', position: { x: 800, y: 200 }, data: { label: 'Yaroslav the Wise\n1019–1054' }, style: { background: '#f8f5f0', border: '1px solid #3f372f' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },
];

export function GenealogyTree() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

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
