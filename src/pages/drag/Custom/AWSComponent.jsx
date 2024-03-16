import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

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

    const [connect, setConnect ] = useState(false);

    const onConnectClicked = () => {
        try {
            setConnect(!connect);
        } catch (error) {
            throw error;
        }
    }

    // const [selected, setSelected] = useState(publishingOptions[0]);
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
                <img height={2} width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" />
                <h2 className="mx-12" class="text-lg font-semibold">Amazon Web Services</h2>
            </div>
            <p class="text-gray-600 mb-4">Connect your Cloud Infrastructure </p>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                    Access Key ID
                </label>
                <div>
                    <div className="mt-1">
                        <input  
                        disabled={connect}
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Access Key ID..."
                        />
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                    Secret Key
                </label>
                <div>
                    <div className="mt-1">
                        <input 
                        disabled={connect}
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Secret Key..."
                        />
                    </div>
                </div>
            </div>
            {!connect ? <button onClick={onConnectClicked} class="bg-blue-500 text-white rounded-md px-4 py-2">
                Connect
            </button>:<button onClick={onConnectClicked} class="mx-2 bg-red-500 text-white rounded-md px-4 py-2">
                Disconnect
            </button>}

            
        </div>
    );
});

export default EmbeddingsNode;
