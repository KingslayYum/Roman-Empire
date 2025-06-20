import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import ContactForm from "../ContactForm"; // Your form component
import { SectionWrapper } from "../../hoc";

const Earth = () => {
  const earth = useGLTF("./models/colosseum.glb");

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const ColosseumCanvas = () => {
  return (
    <div className="w-full h-screen relative">
      {/* 3D Canvas */}
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 5, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[-5, 10, 5]} intensity={1.5} castShadow />
          <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
          <hemisphereLight intensity={0.35} groundColor="black" />

          {/* Orbit Controls */}
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Fixed Overlay Form */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="shadow-xl mb-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ColosseumCanvas, "contact");
