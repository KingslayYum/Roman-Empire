import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import ContactForm from "../ContactForm"; // ✨ New component
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
    <div className = "w-full h-screen mx-auto relative">
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
        <directionalLight
          position={[-5, 10, 5]}
          intensity={1.5update}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <hemisphereLight intensity={0.35} groundColor="black" />

        {/* Controls */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />

        {/* HTML Form inside the 3D scene */}
        <Html
        transform
        position={[0, 1.6, -0.5]}
        distanceFactor={3.5}
        occlude
        center
        >
        <ContactForm />
        </Html>

        <Preload all />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default SectionWrapper(ColosseumCanvas, "contact");
