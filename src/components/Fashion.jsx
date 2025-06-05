import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const WhiteBox = ({ position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={[1.2, 1.8, 0.3]} />
    <meshStandardMaterial color="#e5e5e5" />
  </mesh>
);

const RingGallery = ({ itemCount = 6 }) => {
  const radius = 4;
  const angleStep = (2 * Math.PI) / itemCount;

  return (
    <group>
      {Array.from({ length: itemCount }).map((_, i) => {
        const angle = i * angleStep;
        const x = radius * Math.sin(angle);
        const z = radius * Math.cos(angle);
        return (
          <WhiteBox
            key={i}
            position={[x, 0, z]}
            rotation={[0, +angle, 0]}
          />
        );
      })}
    </group>
  );
};

const CameraRig = ({ currentIndex, total }) => {
  const { camera } = useThree();
  const radius = 10;
  const angleStep = (2 * Math.PI) / total;

  useFrame(() => {
    const targetAngle = currentIndex * angleStep;
    const targetX = radius * Math.sin(targetAngle);
    const targetZ = radius * Math.cos(targetAngle);
    const targetY = 3;

    camera.position.lerp(
      { x: targetX, y: targetY, z: targetZ },
      0.08 // smoothness
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Fashion = () => {
  const [current, setCurrent] = useState(0);
  const itemCount = 6;

  const next = () => setCurrent((prev) => (prev + 1) % itemCount);
  const prev = () => setCurrent((prev) => (prev - 1 + itemCount) % itemCount);

  return (
    <div className="relative w-full h-screen bg-black">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center"
      >
        <p className={styles.sectionSubText}>Latest Trends</p>
        <h2 className={styles.sectionHeadText}>Fashion Collection</h2>
      </motion.div>

      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={45} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <RingGallery itemCount={itemCount} />
          <CameraRig currentIndex={current} total={itemCount} />
        </Suspense>
      </Canvas>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none">
        <button
          onClick={prev}
          className="text-white text-5xl font-bold pointer-events-auto hover:scale-110"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="text-white text-5xl font-bold pointer-events-auto hover:scale-110"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Fashion, "fashion");
