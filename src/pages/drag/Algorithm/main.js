const nodes = [
    {
      "id": "dndnode_0",
      "type": "textLoader",
      "position": {
        "x": -1151.7880347698494,
        "y": 385.81874667294767
      },
      "data": {
        "label": "textLoader node"
      },
      "width": 425,
      "height": 236,
      "selected": false,
      "positionAbsolute": {
        "x": -1151.7880347698494,
        "y": 385.81874667294767
      },
      "dragging": false
    },
    {
      "id": "dndnode_1",
      "type": "geminiEmbeddings",
      "position": {
        "x": -519.0588663526443,
        "y": 569.9639975036301
      },
      "data": {
        "label": "geminiEmbeddings node"
      },
      "width": 291,
      "height": 344,
      "selected": false,
      "positionAbsolute": {
        "x": -519.0588663526443,
        "y": 569.9639975036301
      },
      "dragging": false
    },
    {
      "id": "dndnode_2",
      "type": "chatEngine",
      "position": {
        "x": -14.226523388710575,
        "y": 428.79834000968674
      },
      "data": {
        "label": "chatEngine node"
      },
      "width": 297,
      "height": 110,
      "selected": true,
      "positionAbsolute": {
        "x": -14.226523388710575,
        "y": 428.79834000968674
      },
      "dragging": false
    },
    {
      "id": "dndnode_3",
      "type": "inputPrompt",
      "position": {
        "x": -572.5986929649707,
        "y": 174.4110191998718
      },
      "data": {
        "label": "inputPrompt node"
      },
      "width": 348,
      "height": 314,
      "selected": false,
      "positionAbsolute": {
        "x": -572.5986929649707,
        "y": 174.4110191998718
      },
      "dragging": false
    }
  ];
  
  const edges = [
    {
      "source": "dndnode_0",
      "sourceHandle": null,
      "target": "dndnode_1",
      "targetHandle": null,
      "id": "reactflow__edge-dndnode_0-dndnode_1"
    },
    {
      "source": "dndnode_1",
      "sourceHandle": null,
      "target": "dndnode_2",
      "targetHandle": null,
      "id": "reactflow__edge-dndnode_1-dndnode_2"
    },
    {
      "source": "dndnode_3",
      "sourceHandle": "a",
      "target": "dndnode_2",
      "targetHandle": null,
      "id": "reactflow__edge-dndnode_3a-dndnode_2"
    }
  ];
  
  // Create a mapping of nodes' parents and children
  const parentNodeMap = {};
  const childNodeMap = {};
  
  edges.forEach((edge) => {
    const { source, target } = edge;
    if (!childNodeMap[source]) {
      childNodeMap[source] = [];
    }
    childNodeMap[source].push(target);
  
    if (!parentNodeMap[target]) {
      parentNodeMap[target] = [];
    }
    parentNodeMap[target].push(source);
  });
  
  const getNodeRelations = (nodeId) => {
    const immediateParent = parentNodeMap[nodeId] || [];
    const immediateChild = childNodeMap[nodeId] || [];
    return { immediateParent, immediateChild };
  };


const conversion = (x) => {
    switch (x) {
        case "textLoader":
            return "loader_text"
        case "csvLoader":
            return "loader_csv"
        case "jsonLoader":
            return "loader_json"
        case "openaiEmbeddings":
            return "embedding_openai"
        case "huggingfaceEmbeddings":
            return "embedding_huggingface"
        case "geminiEmbeddings":
            return "embedding_gemini"
        case "chromeVectorStore":
            return "vectorStore_chormaDB"
        case "inputPrompt":
            return "system_prompt"
        case "chatEngine":
            return "llm_gemini"
        default:
            break;
    }
}

const getArguments = (node) => {
    switch (conversion(node.type)) {
        case "loader_text":
            
            break;
    
        default:
            break;
    }
}
 
const nodesWithRelations = nodes.map((node) =>{
    const { immediateParent, immediateChild } = getNodeRelations(node.id)
    return {
        nodeId: node.id,
        nodeName: conversion(node.type),
        childId: immediateChild,
        parentId: immediateParent,
        arguments: getArguments
    }
  });

nodesWithRelations.forEach(x => console.log(x))
  
const lstorate  = {
    "dndnode_2": "llm_gemini",
    "dndnode_0": "https://firebasestorage.googleapis.com/v0/b/buildify-ai.appspot.com/o/uploads%2Fwittyhacks.txt?alt=media&token=74185117-40ec-453e-9165-5177fafdac78",
    "dndnode_3": "Hello This is Prompt",
    "dndnode_1": "embedding_gemini"
}


 
console.log(nodesWithRelations)