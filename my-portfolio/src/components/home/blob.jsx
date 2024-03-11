import React, { useEffect, useRef } from 'react';

const BlobWithCircles = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blobElement = blobRef.current;
    // Your animation logic here
    // For example, using setInterval to change the 'd' attribute of the blob path
    const intervalId = setInterval(() => {
      // Calculate new path and apply it
      const newPath = "Your new calculated path";
      blobElement.setAttribute('d', newPath);
    }, 1000); // Update path every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const blobPath = "M75,100 Q75,25 150,25 Q225,25 225,100 Q225,175 150,175 Q75,175 75,100 Z";

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <path className="blob" fill="deepskyblue" d={blobPath} />
        <circle cx="50" cy="150" r="20" fill="white" />
        <circle cx="250" cy="150" r="20" fill="white" />
      </svg>
    </div>
  );
};

export default BlobWithCircles;
