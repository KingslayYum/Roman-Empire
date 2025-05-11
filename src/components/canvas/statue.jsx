import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Statue = ({ isMobile }) => {
  const statue = useGLTF("./statue/scene.glb");

  return (
    <mesh> 
      <primitive
        object={statue.scene}
        scale={isMobile ? 70 : 70.5}
        position={isMobile ? [0, 0, 0] : [-2, -14.5, -4]}  //Y, Z, X
        rotation={[0, -5.4, 0.03]}
      />
    </mesh>
  );
};

const StatueCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {<OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />}
        <Statue />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default StatueCanvas;