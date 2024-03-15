import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Add your Components here!!</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'fileUpload')} draggable>
        File-Upload
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'embeddings')} draggable>
        Embeddings
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'inputPrompt')} draggable>
        Input Prompt
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'chatEngine')} draggable>
        Chat Engine Prompt
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
};
