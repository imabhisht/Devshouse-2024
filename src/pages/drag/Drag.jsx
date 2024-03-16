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
import { updateProjectWorkflow } from "../../api/index";
import Sidebar from './Sidebar';
import PraseJSON from './Algorithm/main';

import './index.css';
import FileUpload from './Custom/FileUpload';
import EmbeddingsNode from './Custom/Embeddings';
import InputPrompt from './Custom/InputPrompt';
import ChatEngine from './Custom/ChatEngine'
import TextLoader from "./Custom/TextLoader";
import { storage } from '../../firebase'; // Import Firebase storage
import CSVLoader from './Custom/CSVLoader';
import JSONLoader from './Custom/JSONLoader';
import OpenAIEmbeddings from "./Custom/OpenAIEmbeddings";
import GeminiEmbeddings from "./Custom/GeminiEmbeddings";
import HuggingFaceEmbeddings from "./Custom/HuggingFaceEmbeddings";
import ChromeVectorStore from "./Custom/ChromaVectorStore";
import AWSComponent from "./Custom/AWSComponent"
import YouTubeComponent from "./Custom/YouTubeComponent";
import GitHubComponent from "./Custom/GithubComponent"
import WebsiteComponenet from  "./Custom/WebComponent";

const initialNodes = [];

let id = 0;
const getId = () => `${id++}`;
const customNodeTypes = {
  fileUpload: FileUpload,
  embeddings: EmbeddingsNode,
  inputPrompt: InputPrompt,
  chatEngine: ChatEngine,
  textLoader: TextLoader,
  csvLoader: CSVLoader,
  jsonLoader: JSONLoader,
  openaiEmbeddings: OpenAIEmbeddings,
  geminiEmbeddings: GeminiEmbeddings,
  huggingfaceEmbeddings: HuggingFaceEmbeddings,
  chromeVectorStore: ChromeVectorStore,
  aws_component: AWSComponent,
  youTubeComponent: YouTubeComponent,
  gitubComponent:GitHubComponent,
  websiteComponenet:WebsiteComponenet
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

  const handleWorkFlowSubmission = async(event) => {
    // event.preventDefault();
    try {
      console.log("Workflow Submitted");
    console.log(nodes);
    console.log(edges);
    const dataxx2 = await PraseJSON(nodes, edges);

    const datax = await updateProjectWorkflow({nodes,edges, dataxx2})

    console.log(datax);

    alert("Code is Updated");
    } catch (error) {
      alert(error);
    }
    

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
            elevateEdgesOnSelect={true}
            nodeTypes={customNodeTypes}
            // edgeTypes=
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
