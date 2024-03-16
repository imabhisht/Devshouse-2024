import React from 'react';
import { FiUpload, FiLayers } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

export default function Example() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dragger');

    }

    return (
        <div className="flex justify-center">
            <button
                type="button"
                className="relative block w-1/3 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Create a new Project</span>
            </button>

            <button
                onClick={() => handleClick()}
                type="button"
                className="ml-5 relative block w-1/3 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <FiLayers className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Use Templates</span>
            </button>
        </div>
    )
}