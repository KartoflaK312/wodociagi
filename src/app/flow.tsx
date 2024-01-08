"use client";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType
} from 'reactflow';
 
import 'reactflow/dist/style.css'
 
const initialNodes = [
  { id: '1', position: { x:300, y:30 }, data: { label: 'Oczyszczalnia wielka' },sourcePosition: Position.Bottom,
  targetPosition: Position.Bottom },
  { id: '2', position: { x: 400, y: 150 }, data: { label: 'Źródło czerwone' } ,sourcePosition: Position.Left,
  targetPosition: Position.Left,
  },
  { id: '3', position: { x: 200, y: 150 }, data: { label: 'Stacja przesyłowa' },sourcePosition: Position.Left,targetPosition: Position.Right},
  { id: '4', position: { x: 30, y: 150 }, data: { label: 'Oczyszczalnia mała' },sourcePosition: Position.Top,
  targetPosition: Position.Right },
  { id: '5', position: { x: 0, y: 30 }, data: { label: 'Żródło zielone' },sourcePosition: Position.Bottom,
  targetPosition: Position.Bottom },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' ,type: 'straight',markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e2-3', source: '2', target: '3' ,type: 'straight',markerStart: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e3-4', source: '3', target: '4' ,type: 'straight',markerStart: {
    type: MarkerType.ArrowClosed,
  },markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e1-3', source: '1', target: '3', type: 'straight',markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e4-5', source: '4', target: '5', type: 'straight',markerEnd: {
    type: MarkerType.ArrowClosed,
  },},

];
 
export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
 
  return (
    <div style={{ width: '80vw', height: '45vh', border:'3px solid black', margin:"30px", borderRadius:"4px"}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />  
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}