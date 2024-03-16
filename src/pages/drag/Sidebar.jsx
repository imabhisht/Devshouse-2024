import React, { useState } from 'react';

// Reusable SVG component
const Icon = ({ path }) => (
  <svg className="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const AccordionItem = ({ id, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <h2 id={id}>
        <button
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300    focus:ring-4  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span>{title}</span>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div id={`accordion-collapse-body-${id}`} className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.text}
                className="hover:bg-gray-600 text-white p-2 rounded-md cursor-move flex items-center"
                draggable
                onDragStart={(event) => onDragStart(event, item.nodeType)}
              >
                <Icon path={item.iconPath} />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = ({HandleSubmission}) => {
  const accordionItems = [
    {
      id: '1',
      title: 'Data Loaders',
      items: [
        { text: 'File Upload', nodeType: 'fileUpload', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { text: 'Text Loader', nodeType: 'textLoader', iconPath: 'M21 15.4c-2.1-.8-3.6-2.5-4.2-4.6m-.8-3.1c-.6-2.1-2-3.8-4-4.6m-6.9 4.1V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4.7c0 1.4.7 2.7 1.9 3.5L12 20l-9-7.2V4c0-1.1.9-2 2-2h3l9 7-3.8 3' },
        { text: 'CSV Loader', nodeType: 'csvLoader', iconPath: 'M6 9l6 6 6-6' },
        { text: 'JSON Loader', nodeType: 'jsonLoader', iconPath: 'M20.768 14.217l1.179 4.718-4.718-1.179-8.497 2.833 2.833-8.497-1.179-4.718 4.718 1.179 2.833-8.497 2.833 8.497zM12 14l-8 4 4-8 8-4z' },
        { text: 'Input Node', nodeType: 'input', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
      ]
    },
    {
      id: '2',
      title: 'Embeddings',
      items: [
        { text: 'Embeddings Node', nodeType: 'embeddings', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { text: 'OpenAI Embeddings', nodeType: 'openaiEmbeddings', iconPath: 'M21 15.4c-2.1-.8-3.6-2.5-4.2-4.6m-.8-3.1c-.6-2.1-2-3.8-4-4.6m-6.9 4.1V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4.7c0 1.4.7 2.7 1.9 3.5L12 20l-9-7.2V4c0-1.1.9-2 2-2h3l9 7-3.8 3' },
        { text: 'Gemini Embeddings', nodeType: 'geminiEmbeddings', iconPath: 'M6 9l6 6 6-6' },
        { text: 'Hugging-Face Embeddings', nodeType: 'huggingfaceEmbeddings', iconPath: 'M20.768 14.217l1.179 4.718-4.718-1.179-8.497 2.833 2.833-8.497-1.179-4.718 4.718 1.179 2.833-8.497 2.833 8.497zM12 14l-8 4 4-8 8-4z' },
      ]
    },
    {
      id: '3',
      title: 'Vector Database',
      items: [
        { text: 'Chrome Vector Store', nodeType: 'chromeVectorStore', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
      ]
    },
    {
      id: '4',
      title: 'Large Language Models',
      items: [
        { text: 'Unified LLM', nodeType: 'chatEngine', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
      ]
    },
    {
      id: '5',
      title: 'Tool',
      items: [
        { text: 'Chrome Vector Store', nodeType: 'chromeVectorStore', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { text: 'YouTube', nodeType: 'youTubeComponent', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { text: 'GitHub', nodeType: 'gitubComponent', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { text: 'Website', nodeType: 'websiteComponenet', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },

      ]
    },

  ];

  const handleSaveButton = async() => {
    // Save the current project workflow
    console.log('Project workflow saved');
  }

  return (
    <aside style={{ backgroundColor: '#222933' }} className="text-white p-10 fixed inset-y-0 right-0 w-80 top-[64px]">
      <h2 className="text-xl font-bold mb-2 p-4">Component Toolbox</h2>
      <div className="space-y-4">
        {accordionItems.map(({ id, title, items }) => (
          <AccordionItem key={id} id={id} title={title} items={items} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full mb-4">
        <div className="mx-4">
          <button
            onClick={HandleSubmission}
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;