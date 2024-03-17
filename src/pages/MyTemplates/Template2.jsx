import React from 'react';

const ImageDescription = () => {
  return (
    <div>
        <div p-4><h1 class="text-2xl font-bold mb-2">Template 2</h1></div>
    <div className="flex justify-center">
      {/* First Image */}
      <div className="w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-full max-h-45 object-cover"
          src="https://i.ytimg.com/vi/fPmrpEVzm2Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHPYNKXKgQG189INVE532cfS50Vg"
          alt="First Image"
        />
      </div>

      {/* Second Image */}
      <div className="w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-full max-h-45 object-cover"
          src="https://i.ytimg.com/vi/3DGcD0wwQuA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDknsqsaHWE623BmQXxV-IQ_ZWQ4A"
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
