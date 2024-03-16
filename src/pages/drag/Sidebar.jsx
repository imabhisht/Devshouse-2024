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
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'fileUpload')}
//           draggable
//         >
//           <span className="ml-2">File Upload</span>

//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'embeddings')}
//           draggable
//         >
//           <span className="ml-2">Embeddings</span>
//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'inputPrompt')}
//           draggable
//         >
//           <span className="ml-2">Input Prompt</span>
//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'chatEngine')}
//           draggable
//         >
//           <span className="ml-2">Chat Engine</span>
//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'input')}
//           draggable
//         >
//           <span className="ml-2">Input Node</span>
//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'default')}
//           draggable
//         >
//           <span className="ml-2">Default Node</span>
//         </div>
//         <div
//           className="border-2 hover:bg-slate-100 border-black text-black p-4 rounded-md cursor-move flex items-center justify-center"
//           onDragStart={(event) => onDragStart(event, 'output')}
//           draggable
//         >
//           <span className="ml-2">Output Node</span>
//         </div>
//       </div>
//     </aside>
//   );
// };



















// import React from 'react';

// export default () => {
//   const onDragStart = (event, nodeType) => {
//     event.dataTransfer.setData('application/reactflow', nodeType);
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <aside className="md:bg-gray-800 text-gray-900 p-10 rounded-lg shadow-xl border border-gray-700  ">
//       <h2 className="text-xl font-bold mb-4">Component Toolbox</h2>
//       <div className="space-y-4">
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'fileUpload')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//           <span>File Upload</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'embeddings')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M21 15.4c-2.1-.8-3.6-2.5-4.2-4.6m-.8-3.1c-.6-2.1-2-3.8-4-4.6m-6.9 4.1V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4.7c0 1.4.7 2.7 1.9 3.5L12 20l-9-7.2V4c0-1.1.9-2 2-2h3l9 7-3.8 3"
//             />
//           </svg>
//           <span>Embeddings</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'inputPrompt')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 9l6 6 6-6"
//             />
//           </svg>
//           <span>Input Prompt</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'chatEngine')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M20.768 14.217l1.179 4.718-4.718-1.179-8.497 2.833 2.833-8.497-1.179-4.718 4.718 1.179 2.833-8.497 2.833 8.497zM12 14l-8 4 4-8 8-4-4 8z"
//             />
//           </svg>
//           <span>Chat Engine</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'input')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//           <span>Input Node</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
         
//           onDragStart={(event) => onDragStart(event, 'default')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <span>Default Node</span>
//         </div>
//         <div
//           className="hover:bg-gray-400 text-gray-900 p-7 rounded-md cursor-move flex items-center"
//           onDragStart={(event) => onDragStart(event, 'output')}
//           draggable
//         >
//           <svg
//             className="h-6 w-6 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <span>Output Node</span>
//         </div>
//       </div>
//     </aside>
//   );
// };





import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside style={{ backgroundColor: '#222933' }} className="text-white p-10 fixed inset-y-0 right-0 w-80 top-[64px]">
      <h2 className="text-xl font-bold mb-2">Component Toolbox</h2>
      <div className="space-y-4">
        <div
          className="hover:bg-gray-600 text-white p-7 rounded-md cursor-move flex items-center"
          onDragStart={(event) => onDragStart(event, 'fileUpload')}
          draggable
        >
          <svg
            className="h-4 w-8 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-lg">File Upload</span>
        </div>
        {/* Other menu items */}
      </div>
    </aside>
  );
};
