// import React, {useState} from 'react'
// import InvertedImage from './InvertedImage'

// const MagnifyImage = () => {
//     // const ImageComponent = () => {
//         const [dimensions, setDimensions] = useState({width:0, height:0});
    
//         const handleImageLoad =(event)=>{
//           const {naturalWidth, naturalHeight} = event.target;
//           setDimensions ({width: naturalWidth, height: naturalHeight});
        
//       };
    
//   return (
//     <>

//     <div>
//           <p>Step 2: Magnified Image</p>
//           <img src="./Cubinia.svg" width={dimensions.width *8} height={dimensions.height*8} onLoad={handleImageLoad} alt="Image Unable to Load"/>
//           <p>Magnified Width:{dimensions.width*8} </p>
//           <p>Magnified Height:{dimensions.height*8}</p>
//           <hr/>
//        </div>
//     </>
//   )
// }

// export default MagnifyImage

// import React, { useEffect, useRef } from 'react';

// const MagnifyImage = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const img = new Image();
//     img.src = './Cubinia.svg';

//     img.onload = () => {
//       const magnificationFactor = 8; // Magnification factor
//       const magnifiedWidth = img.width * magnificationFactor;
//       const magnifiedHeight = img.height * magnificationFactor;

//       canvas.width = magnifiedWidth;
//       canvas.height = magnifiedHeight;

//       ctx.drawImage(img, 0, 0, magnifiedWidth, magnifiedHeight); // Draw the image at the larger scale
//       const imageData = ctx.getImageData(0, 0, magnifiedWidth, magnifiedHeight);
//       const data = imageData.data;

//       // Invert colors
//       for (let i = 0; i < data.length; i += 4) {
//         data[i] = 255 - data[i]; // Red
//         data[i + 1] = 255 - data[i + 1]; // Green
//         data[i + 2] = 255 - data[i + 2]; // Blue
//         // Skip alpha channel (data[i + 3])
//       }

//       ctx.putImageData(imageData, 0, 0);
//     };
//   }, []);

//   return (
//     <>
//       <p>Step 2: Inverting Image Color</p>
//       <canvas ref={canvasRef} />
//       <hr/>
//       <p>Step 3: Magnified Inverted Color Image</p>
//     </>
//   );
// };

// export default MagnifyImage;

import React, { useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';

const MagnifyImage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = './Cubinia.svg';

    img.onload = () => {
      const magnificationFactor = 8; // Magnification factor
      const magnifiedWidth = img.width * magnificationFactor;
      const magnifiedHeight = img.height * magnificationFactor;

      canvas.width = magnifiedWidth;
      canvas.height = magnifiedHeight;

      ctx.drawImage(img, 0, 0, magnifiedWidth, magnifiedHeight); // Draw the image at the larger scale
      const imageData = ctx.getImageData(0, 0, magnifiedWidth, magnifiedHeight);
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

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'magnified_inverted_image.png');
        }
      });
    }
  };

  return (
    <>
      <p>Step 3: Inverting Magnified Image Color</p>
      <canvas ref={canvasRef} />
      <p>Download Magnified Image</p>
      <button onClick={handleDownload}>Download Image</button>
      <hr/>
    </>
  );
};

export default MagnifyImage;

