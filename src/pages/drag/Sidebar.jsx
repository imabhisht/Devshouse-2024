// import React from 'react';

// export default () => {
//   const onDragStart = (event, nodeType) => {
//     event.dataTransfer.setData('application/reactflow', nodeType);
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <aside className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Component Toolbox</h2>
//       <div className="grid grid-cols-2 gap-4">

//       </div>
//       {/* Button for Save & Proceed */}
//       <div className="mt-4 border-t pt-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700"
//           onClick={() => {
//             // Handle save and proceed action
//           }}
//         >
//           Save & Proceed
//         </button>
//       </div>
//     </aside>
//   );
// };

import React from 'react';

export default ({HandleSubmission}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className=" h-full bg-gray-800 text-black p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Component Toolbox</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Your draggable components */}
          <div
            className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
            onDragStart={(event) => onDragStart(event, 'fileUpload')}
            draggable
          >
            <span className="ml-2">File Upload</span>
          </div>
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
        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'textLoader')}
          draggable
        >
          <span className="ml-2">TextLoader</span>
        </div>

        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'csvLoader')}
          draggable
        >
          <span className="ml-2">CSVLoader</span>
        </div>

        <div
          className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, 'jsonLoader')}
          draggable
        >
          <span className="ml-2">JSONLoader</span>
        </div>
          
        </div>
      </div>
      {/* Button for Save & Proceed */}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700 mt-4"
          onClick={(e) => {
            // e.preventDefault();
            HandleSubmission();
          }}
        >
          Save & Proceed
        </button>
      </div>
    </aside>
  );
};