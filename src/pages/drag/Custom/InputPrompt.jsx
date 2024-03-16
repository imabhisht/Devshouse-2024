import React, { memo, useState } from 'react';
import { Handle, Position } from "reactflow";
import { Tab } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const InputPromptFun = memo(({id, data, isConnectable }) => {
  const [inputContent, setInputContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Content:", inputContent);
    localStorage.setItem(id, inputContent);
    // You can perform further actions here, like posting the content to a server.
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="px-2 py-5 sm:p-6">
        <form onSubmit={handleSubmit}>
          <Tab.Group>
            {({ selectedIndex }) => (
              <>
                <Tab.List className="flex items-center">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                          : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                        'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                      )
                    }
                  >
                    Write
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                          : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                        'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                      )
                    }
                  >
                    Preview
                  </Tab>

                  {/* These buttons are here simply as examples and don't actually do anything. */}
                  {selectedIndex === 0 ? (
                    <div className="ml-auto flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Insert link</span>
                          <LinkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                    <label htmlFor="comment" className="sr-only">
                      Enter your Prompt
                    </label>
                    <div>
                      <textarea
                        rows={8}
                        name="comment"
                        id="comment"
                        className="block  md:w-[300px] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your Prompt..."
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                      />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                    <div className="border-b">
                      <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                        Preview content will render here.
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </>
            )}
          </Tab.Group>
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  )
});

export default InputPromptFun;
