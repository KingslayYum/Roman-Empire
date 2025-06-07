import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { fashion } from '../constants';

const FashionModel = ({ modelPath, position, rotation }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={position} rotation={rotation} />;
};

const RingGallery = ({ items }) => {
  const radius = 4;
  const angleStep = (2 * Math.PI) / items.length;

  return (
    <group>
      {items.map((item, i) => {
        const angle = i * angleStep;
        const x = radius * Math.sin(angle);
        const z = radius * Math.cos(angle);
        return (
          <FashionModel
            key={item.id}
            modelPath={item.modelPath}
            position={[x, 0, z]}
            rotation={[0, angle + Math.PI, 0]}
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
  const itemCount = fashion.length;

  const next = () => setCurrent((prev) => (prev + 1) % itemCount);
  const prev = () => setCurrent((prev) => (prev - 1 + itemCount) % itemCount);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10"
      >
        <p className={styles.sectionSubText}>Latest Trends</p>
        <h2 className={styles.sectionHeadText}>Fashion Collection</h2>
      </motion.div>
      <div className="relative w-full h-[900px]">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 4, 10]} fov={45} />
            <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={3.2} />
            <pointLight position={[-5, 5, -5]} intensity={3} />

            <RingGallery items={fashion} />
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
          <div className="absolute bottom-10 left-20 bg-white/80 text-black p-4 rounded-lg max-w-sm shadow-lg pointer-events-auto h-[30%]">
            <h3 className="text-lg font-semibold mb-1">{fashion[current].title}</h3>
            <p className="text-sm">{fashion[current].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Fashion, "fashion");
