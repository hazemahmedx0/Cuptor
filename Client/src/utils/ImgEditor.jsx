import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const ImageEditor = ({ imageSrc }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    canvasRef.current.loadSaveData(imageSrc, true);
  }, [imageSrc]);

  return (
    <div>
      <CanvasDraw
        ref={canvasRef}
        brushColor="rgba(0,0,0,0.3)"
        brushRadius={10}
      />
    </div>
  );
};

export default ImageEditor;
