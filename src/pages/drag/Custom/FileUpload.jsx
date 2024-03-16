import React, { useState, memo } from 'react';
import { Handle, Position } from 'reactflow';
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const FileUpload = memo(({ id,data, isConnectable, onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `uploads/${selectedFile.name}`);

        // Store the File downloadble URL in local storage
        const downloadUrl = await getDownloadURL(storageRef);
        localStorage.setItem(id, downloadUrl);

        // Upload the file to Firebase Storage
        uploadBytes(storageRef, selectedFile).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    };

    return (
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-black px-6 py-10">
               <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input onChange={handleFileChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
                <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ background: '#555' }}
                isConnectable={isConnectable}
            />
          </div>
            
    );
});

export default FileUpload;
