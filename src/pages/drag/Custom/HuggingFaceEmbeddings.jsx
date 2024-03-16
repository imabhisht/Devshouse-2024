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
                <h2 class="text-lg font-semibold">HuggingFace Embeddings</h2>
                <div class="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center">
                    <span class="text-white font-bold">&#9679;</span>
                </div>
            </div>
            <p class="text-gray-600 mb-4">Load text file.</p>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                Embeddings Model
                </label>
                <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Fine Tune LLM (Multi-Modal Available)</Listbox.Label> */}
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                        <span className="flex items-center">
                          <span
                            aria-label={selected.online ? 'Online' : 'Offline'}
                            className={classNames(
                              selected.online ? 'bg-green-400' : 'bg-gray-200',
                              'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                            )}
                          />
                          <span className="ml-3 block truncate">{selected.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        person.online ? 'bg-green-400' : 'bg-gray-200',
                                        'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                                      )}
                                      aria-hidden="true"
                                    />
                                    <span
                                      className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                    >
                                      {person.name}
                                      <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                    HuggingFace Api Key
                </label>
                <div>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter API Key..."
                        />
                    </div>
                    </div>
            </div>

            
            <button class="bg-blue-500 text-white rounded-md px-4 py-2">
                Create
            </button>
        </div>
    );
});

export default EmbeddingsNode;
