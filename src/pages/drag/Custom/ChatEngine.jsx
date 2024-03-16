import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Fragment } from "react";
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1,type:"llm_gemini", name: "Google Gemini Pro", online: true },
  { id: 2, type:"llm_gemini", name: "Google Gemini Ultra", online: false },
  { id: 3,type:"llm_gemini",  name: "OpenAI GPT-3.5 Turbo", online: true                              },
  { id: 4,type:"llm_gemini", name: 'OpenAI GPT-4 and GPT-4 Turbo', online: false },
  { id: 5, type:"llm_gemini", name: 'Azure OpenAI Service', online: false },
  { id: 6, type:"llm_gemini", name: 'OpenAI DALL·E', online: false },
  // { id: 7, name: 'Caroline Schultz', online: true },
  // { id: 8, name: 'Mason Heaney', online: false },
  // { id: 9, name: 'Claudie Smitham', online: true },
  // { id: 10, name: 'Emil Schaefer', online: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const EmbeddingsNode = memo(({ id, data, isConnectable }) => {
  const [selected, setSelected] = useState(people[3])
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleOptionChange = (option) => {  
      console.log(option)
       setSelected(option);
       // Store it in local storage
       localStorage.setItem(`${id}`, `${option.type}`);
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
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />
            <Handle
                type="target"
                position={Position.Right}
                id="a"
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
            <div className="px-2 py-5 sm:p-6">


              <Listbox value={selected} onChange={handleOptionChange}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Fine Tune LLM (Multi-Modal Available)</Listbox.Label>
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
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
        </div>
        </div>
    );
});

export default EmbeddingsNode;
