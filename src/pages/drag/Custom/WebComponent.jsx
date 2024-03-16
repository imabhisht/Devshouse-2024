import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const EmbeddingsNode = memo(({ id, data, onNodeUpdate, isConnectable }) => {

    const [connect, setConnect ] = useState(false);
    const [changeText, setChangeText] = useState("");
    const onConnectClicked = () => {
        try {
            setConnect(!connect);
        } catch (error) {
            throw error;
        }
    }

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleOptionChange = (option) => {
        // Store it in local storage
        setChangeText(option.target.value);
        localStorage.setItem(`${id}`, `${changeText}`);
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
                <img height={10} width={50} src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg    " />
                <h2 className="" class="text-lg font-semibold mr-20">Website</h2>
            </div>
            <p class="text-gray-600 mb-4">Chat with Website or Web Applications</p>

            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="file-path">
                    Link:
                </label>
                <div>
                    <div className="mt-1">
                        <input  
                        onChange={handleOptionChange}
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Website link..."
                        />
                    </div>
                </div>
            </div>

            
        </div>
    );
});

export default EmbeddingsNode;
