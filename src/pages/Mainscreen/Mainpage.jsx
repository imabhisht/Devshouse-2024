import { AiFillFileAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Example() {
  const navigation = useNavigate();
  
  return (
    <div>
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
       <div>
           <h3 className="text-lg font-medium leading-6 text-gray-900">My collection</h3>
           <p className="mt-2 max-w-4xl text-sm text-gray-500">
            Manage your personal projects. Download or upload your collection.
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
             onClick={() => navigation('/dragger')}
             type="button"
             className="ml-2 inline-flex items-center rounded-md border border-gray-300 bg-white hover:bg-gray-600 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 text-gray-700 shadow-sm hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-2"
           >
             New Project
          </button>
         </div>
       </div>
    <div className="flex flex-wrap justify-center">
      {/* First Row */}
      <div className="w-full sm:w-1/3 p-4">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 1</span>
        </button>
      </div>
      
      <div className="w-full sm:w-1/3 p-4">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 2</span>
        </button>
      </div>
      
      <div className="w-full sm:w-1/3 p-4">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 3</span>
        </button>
      </div>

      {/* Second Row */}
      <div className="w-full sm:w-1/2 p-4">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 4</span>
        </button>
      </div>
      
      <div className="w-full sm:w-1/2 p-4">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 5</span>
        </button>
      </div>
    </div>
    </div>
  );
}
