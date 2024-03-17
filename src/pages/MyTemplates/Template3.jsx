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
          src="https://muffingroup.com/betheme/assets/images/features/single-page-import/single-page-import-frontend.png"
          alt="First Image"
        />
      </div>

      {/* Second Image */}
      <div className="w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-full max-h-45 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmDk7zp_G0JaqMH6oLtFhxyL0d9EVNDekZA&usqp=CAU"
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
