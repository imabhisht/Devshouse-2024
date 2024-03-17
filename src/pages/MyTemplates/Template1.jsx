import React from 'react';

const ImageDescription = () => {
  return (
    <div>
        <div p-4><h1 class="text-2xl font-bold mb-2">Template 1</h1></div>
    <div className="flex justify-center">
      {/* First Image */}
      <div className="w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-full max-h-45 object-cover"
          src="https://hqsoftwarelab.com/wp-content/uploads/2022/04/web-app-architecture-2-min.png"
          alt="First Image"
        />
      </div>

      {/* Second Image */}
      <div className="w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-full max-h-45 object-cover"
          src="https://res.cloudinary.com/dz209s6jk/image/upload/v1657881684/Challenges/e28puyfpdiwawp0do5hg.jpg"
          alt="Second Image"
        />
      </div>
      
    </div>
    <div class="p-4">
  
  <p class="text-lg">Get started by creating a new project.</p>
</div>
  </div>
  );
};

export default ImageDescription;
