import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const publishingOptions = [
    {
        title: "OpenAI Embbedings V3",
        description: "text-embedding-3-small and text-embedding-3-large Embbedings by OpenAI",
        current: true,
    },
    {
        title: "Gemini Embbedings V1",
        description: "The embedding service in the Gemini API generates state-of-the-art embeddings for words, phrases, and sentences.",
        current: false,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const EmbeddingsNode = memo(({ id, data, onNodeUpdate, isConnectable }) => {
    const [selected, setSelected] = useState(publishingOptions[0]);

    const handleOptionChange = (option) => {
        setSelected(option);
        // Store it in local storage
        localStorage.setItem(`${id}`,`${option.title}`);
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
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Embeddings
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Select the Embeddings for your Sources.</p>
                </div>
                <div className="mt-5">
                    <div className="text-sm">
                        <Listbox value={selected} onChange={handleOptionChange}>
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="sr-only">
                                        {" "}
                                        Change published status{" "}
                                    </Listbox.Label>
                                    <div className="relative">
                                        <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                                            <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                                                <div className="inline-flex items-center rounded-l-md border border-transparent bg-indigo-500 py-2 pl-3 pr-4 text-white shadow-sm">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    <p className="ml-2.5 text-sm font-medium">
                                                        {selected.title}
                                                    </p>
                                                </div>
                                                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-500 p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                                    <span className="sr-only">
                                                        Change published status
                                                    </span>
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-white"
                                                        aria-hidden="true"
                                                    />
                                                </Listbox.Button>
                                            </div>
                                        </div>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {publishingOptions.map((option) => (
                                                    <Listbox.Option
                                                        key={option.title}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active
                                                                    ? "text-white bg-indigo-500"
                                                                    : "text-gray-900",
                                                                "cursor-default select-none p-4 text-sm"
                                                            )
                                                        }
                                                        value={option}
                                                    >
                                                        {({ selected, active }) => (
                                                            <div className="flex flex-col">
                                                                <div className="flex justify-between">
                                                                    <p
                                                                        className={
                                                                            selected
                                                                                ? "font-semibold"
                                                                                : "font-normal"
                                                                        }
                                                                    >
                                                                        {option.title}
                                                                    </p>
                                                                    {selected ? (
                                                                        <span
                                                                            className={
                                                                                active
                                                                                    ? "text-white"
                                                                                    : "text-indigo-500"
                                                                            }
                                                                        >
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </div>
                                                            </div>
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
                    <Handle
                        type="source"
                        position={Position.Right}
                        id="a"
                        style={{ background: "#555" }}
                        isConnectable={isConnectable}
                    />
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
        </div>
    );
});

export default EmbeddingsNode;
