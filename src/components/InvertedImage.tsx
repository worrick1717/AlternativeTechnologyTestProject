import React, { useEffect, useRef } from 'react';

const InvertedImage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = './Cubinia.svg';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Invert colors
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // Red
        data[i + 1] = 255 - data[i + 1]; // Green
        data[i + 2] = 255 - data[i + 2]; // Blue
        // Skip alpha channel (data[i + 3])
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return (
    <>
      <p>Step 2: Inverting Image Color</p>
      <canvas ref={canvasRef} />
      <hr/>
    </>
  );
};

export default InvertedImage;
