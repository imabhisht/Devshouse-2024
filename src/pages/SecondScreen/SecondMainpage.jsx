import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SidebarItem = ({ text, icon, onClick }) => (
  <div
    className="items-center cursor-pointer bg-white hover:bg-gray-600 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 text-gray-700 shadow-sm hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-2"
    onClick={onClick}
  >
    {/* Replace Icon component with your SVG or icon component */}
    <span className="h-6 w-9 mr-2">{icon}</span>
    <span className="text-sm">{text}</span>
  </div>
);

const DetailsView = ({ selectedItem }) => (
  <div className="flex flex-col items-start justify-center h-full bg-gray-100 rounded-md p-4">
    <h2 className="text-xl font-medium mb-4">Details</h2>
    <div className="border border-gray-300 rounded-md p-10 bg-white" style={{ width: '400px', height: '200px' }}>
      <h3 className="text-lg font-medium mb-2">{selectedItem.text}</h3>
      <p className="text-gray-700">{selectedItem.details}</p>
    </div>
  </div>
);

export default function Example() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const navigation = useNavigate();


  return (
    <div>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Our Templates</h3>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            Ready to Deploy Templates for your needs.
          </p>
        </div>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white hover:bg-gray-600 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 text-gray-700 shadow-sm hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-2"
          >
            Download Collection
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white hover:bg-gray-600 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 text-gray-700 shadow-sm hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-2"
          >
            Upload Collection
          </button>
          <button
            onClick={() => {navigation('/dragger')}}
            type="button"
            className="ml-2 inline-flex items-center rounded-md border border-gray-300 bg-white hover:bg-gray-600 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 text-gray-700 shadow-sm hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-2"
          >
            New Project
          </button>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="flex flex-col mt-8 mr-4 text-sm">
          <SidebarItem
            text="ABC"
            onClick={() => handleItemClick({ text: 'ABC', details: 'Details of ABC' })}
          />
          <SidebarItem
            text="DEF"
            onClick={() => handleItemClick({ text: 'DEF', details: 'Details of DEF' })}
          />
          <SidebarItem
            text="GHI"
            onClick={() => handleItemClick({ text: 'GHI', details: 'Details of GHI' })}
          />
          <SidebarItem
            text="JKL"
            onClick={() => handleItemClick({ text: 'JKL', details: 'Details of JKL' })}
          />
          <SidebarItem
            text="MNO"
            onClick={() => handleItemClick({ text: 'MNO', details: 'Details of MNO' })}
          />
        </div>

        {/* Details View */}
        <div className="flex-1">
          {selectedItem && <DetailsView selectedItem={selectedItem} />}
        </div>
      </div>
    </div>
  );
}