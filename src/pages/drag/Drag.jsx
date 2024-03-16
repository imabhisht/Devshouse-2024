import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';

import './index.css';
import FileUpload from './Custom/FileUpload';
import EmbeddingsNode from './Custom/Embeddings';
import InputPrompt from './Custom/InputPrompt';
import ChatEngine from './Custom/ChatEngine'
import TextLoader from "./Custom/TextLoader";
import { storage } from '../../firebase'; // Import Firebase storage
import CSVLoader from './Custom/CSVLoader';
import JSONLoader from './Custom/JSONLoader';

const initialNodes = [];

let id = 0;
const getId = () => `dndnode_${id++}`;
const customNodeTypes = {
  fileUpload: FileUpload,
  embeddings: EmbeddingsNode,
  inputPrompt: InputPrompt,
  chatEngine: ChatEngine,
  textLoader: TextLoader,
  csvLoader: CSVLoader,
  jsonLoader: JSONLoader
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance,  setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  const handleWorkFlowSubmission = (event) => {
    // event.preventDefault();
    console.log("Workflow Submitted");
    console.log(nodes);
    console.log(edges);
  }

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div style={{ height: 800 }} className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            nodeTypes={customNodeTypes}
          >
            <Controls />
            <Background color="#aa3" gap={16} />

          </ReactFlow>
        </div>
        <Sidebar HandleSubmission={handleWorkFlowSubmission} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
