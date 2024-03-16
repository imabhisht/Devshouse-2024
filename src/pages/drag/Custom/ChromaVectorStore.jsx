import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const people = [
    { id: 1, name: "text-embedding-3-small", online: true },
    { id: 2, name: "text-embedding-3-large", online: true },
    { id: 3, name: "ada v2", online: true                              },
    { id: 4, name: 'text-embedding-2', online: false },
    // { id: 5, name: 'Azure OpenAI Service', online: false },
    // { id: 6, name: 'OpenAI DALL·E', online: false },
    // { id: 7, name: 'Caroline Schultz', online: true },
    // { id: 8, name: 'Mason Heaney', online: false },
    // { id: 9, name: 'Claudie Smitham', online: true },
    // { id: 10, name: 'Emil Schaefer', online: false },
  ]

const EmbeddingsNode = memo(({ id, data, onNodeUpdate, isConnectable }) => {
    // const [selected, setSelected] = useState(publishingOptions[0]);
    const [enabled, setEnabled] = useState(false)
    const [selected, setSelected] = useState(people[3])
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleOptionChange = (option) => {
        // setSelected(option);
        // Store it in local storage
        localStorage.setItem(`${id}`, `${option.title}`);
    };

    return (
        <div class="bg-white rounded-lg shadow-md p-6">
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: "#555", width: "10px", height: "10px" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: "#555", width: "10px", height: "10px" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-semibold">Chroma Vector Datastore </h2>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                Collection Name
                </label>
                <div>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Collection name..."
                        />
                    </div>
                  </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                    Persist
                </label>
                <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
            </div>

            
            <button class="bg-blue-500 text-white rounded-md px-4 py-2">
                Create
            </button>
        </div>
    );
});

export default EmbeddingsNode;
