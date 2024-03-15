import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Component Toolbox</h2>
      <div className="grid grid-cols-2 gap-4">
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'fileUpload')}
          draggable
        >
          <span className="ml-2">File Upload</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'embeddings')}
          draggable
        >
          <span className="ml-2">Embeddings</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'inputPrompt')}
          draggable
        >
          <span className="ml-2">Input Prompt</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'chatEngine')}
          draggable
        >
          <span className="ml-2">Chat Engine</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'input')}
          draggable
        >
          <span className="ml-2">Input Node</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
        >
          <span className="ml-2">Default Node</span>
        </div>
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'output')}
          draggable
        >
          <span className="ml-2">Output Node</span>
        </div>
      </div>
    </aside>
  );
};