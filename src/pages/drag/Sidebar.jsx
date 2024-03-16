import React from 'react';

// Reusable SVG component
const Icon = ({ path }) => (
  <svg className="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside style={{ backgroundColor: '#222933' }} className="text-white p-10 fixed inset-y-0 right-0 w-80 top-[64px]">
      <h2 className="text-xl font-bold mb-2 p-4">Component Toolbox</h2>
      <div className="space-y-4">
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'fileUpload')}
          draggable
        >
          <Icon path="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <span className="text-sm ">File Upload</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'embeddings')}
          draggable
        >
          <Icon path="M21 15.4c-2.1-.8-3.6-2.5-4.2-4.6m-.8-3.1c-.6-2.1-2-3.8-4-4.6m-6.9 4.1V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4.7c0 1.4.7 2.7 1.9 3.5L12 20l-9-7.2V4c0-1.1.9-2 2-2h3l9 7-3.8 3" />
          <span className="text-sm">Embeddings</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'inputPrompt')}
          draggable
        >
          <Icon path="M6 9l6 6 6-6" />
          <span className="text-sm">Input Prompt</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'chatEngine')}
          draggable
        >
          <Icon path="M20.768 14.217l1.179 4.718-4.718-1.179-8.497 2.833 2.833-8.497-1.179-4.718 4.718 1.179 2.833-8.497 2.833 8.497zM12 14l-8 4 4-8 8-4-4 8z" />
          <span className="text-sm">Chat Engine</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'input')}
          draggable
        >
          <Icon path="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <span className="text-sm">Input Node</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
        >
          <Icon path="M9 5l7 7-7 7" />
          <span className="text-sm">Default Node</span>
        </div>
        <div
          className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'output')}
          draggable
        >
          <Icon path="M9 5l7 7-7 7" />
          <span className="text-sm">Output Node</span>
        </div>
      </div>
    </aside>
  );
};
