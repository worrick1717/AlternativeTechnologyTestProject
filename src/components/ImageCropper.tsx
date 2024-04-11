import React, { useEffect, useRef } from "react";
import { saveAs } from "file-saver";

const ImageCropper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.src = "./magnified_inverted_image.png";

    img.onload = () => {
      // Calculate the number of tiles horizontally and vertically
      const numCols = Math.ceil(img.width / 256);
      const numRows = Math.ceil(img.height / 256);

      // Set canvas width and height to match the number of tiles
      canvas.width = numCols * 256;
      canvas.height = numRows * 256;

      ctx.drawImage(img, 0, 0);

      // Extract and save each tile
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const startX = col * 256;
          const startY = row * 256;
          const tileWidth = Math.min(256, img.width - startX);
          const tileHeight = Math.min(256, img.height - startY);
          const tileData = ctx.getImageData(
            startX,
            startY,
            tileWidth,
            tileHeight
          );
          const tileCanvas = document.createElement("canvas");
          tileCanvas.width = tileWidth;
          tileCanvas.height = tileHeight;
          const tileCtx = tileCanvas.getContext("2d")!;
          tileCtx.putImageData(tileData, 0, 0);
          tileCanvas.toBlob((blob) => {
            if (blob) {
              saveAs(blob, `${row}_${col}.png`);
            }
          }, "image/png");
        }
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ImageCropper;