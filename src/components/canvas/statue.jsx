import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import CanvasLoader from '../Loader';

gsap.registerPlugin(ScrollTrigger);

const Statue = ({ isMobile }) => {
  const statue = useGLTF("./statue/scene.glb");

  return (
    <primitive
      object={statue.scene}
      scale={isMobile ? 70 : 70.5}
      position={isMobile ? [-2, -14.5, -4] : [-2, -14.5, -4]}
      rotation={[0, -5.2, 0.03]}
    />
  );
};

const CameraAnimation = () => {
  const { camera } = useThree();
  const radius = 20;
  const startAngle = 0.25;
  const endAngle = -(Math.PI / 4);
  const obj = { angle: startAngle };

  useEffect(() => {
    const updateCamera = () => {
      const x = radius * Math.cos(obj.angle);
      const z = radius * Math.sin(obj.angle);
      camera.position.set(x, 3, z);
      camera.lookAt(0, 0, 0);
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: '#about',
      start: 'top center',
      end: 'bottom center',

      onEnter: () => {
        gsap.to(obj, {
          angle: endAngle,
          duration: 1.5,
          ease: 'power2.inOut',
          onUpdate: updateCamera,
        });
      },

      onLeaveBack: () => {
        gsap.to(obj, {
          angle: startAngle,
          duration: 1.5,
          ease: 'power2.inOut',
          onUpdate: updateCamera,
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [camera]);

  return null;
};

const StatueCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Statue isMobile={isMobile} />
        <CameraAnimation />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default StatueCanvas;
