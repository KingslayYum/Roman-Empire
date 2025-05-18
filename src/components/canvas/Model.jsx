import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model = ({ modelPath }) => {
  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={2.5} />;
  } catch (error) {
    console.error(`Model failed to load: ${modelPath}`, error);
    return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="black" />
      </mesh>
    );
  }
};



const ModelCanvas = ({ modelPath }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <Model modelPath={modelPath} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
