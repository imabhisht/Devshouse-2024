// import React from 'react';
// import { Link } from 'react-router-dom';
// import { PlusIcon } from '@heroicons/react/20/solid';

// export default function Example() {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {/* First Template */}
//       <div className="w-full sm:w-1/3 p-4">
//         <div className="border border-gray-300 rounded-lg p-4 text-center">
//           <h3 className="mt-2 text-sm font-medium text-gray-900">Template 1</h3>
//           <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
//           <div className="mt-6">
//             <Link to="/template1">
//               <button
//                 type="button"
//                 className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
//                 Explore
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
      
     
//     </div>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* First Template */}
      <div className="w-full sm:w-1/3 p-4">
        <div className="border border-gray-300 rounded-lg p-4 text-center">
          <h3 className="mt-2 text-sm font-medium text-gray-900">Template 1</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
          <div className="mt-6">
            <Link to="/Template1">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Second Template */}
      <div className="w-full sm:w-1/3 p-4">
        <div className="border border-gray-300 rounded-lg p-4 text-center">
          <h3 className="mt-2 text-sm font-medium text-gray-900">Template 2</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
          <div className="mt-6">
            <Link to="/Template2">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Third Template */}
      <div className="w-full sm:w-1/3 p-4">
        <div className="border border-gray-300 rounded-lg p-4 text-center">
          <h3 className="mt-2 text-sm font-medium text-gray-900">Template 3</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
          <div className="mt-6">
            <Link to="/Template3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
