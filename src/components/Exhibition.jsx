import React, { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF, ScrollControls, useScroll  } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

// 🧱 Mock Hallway and Exhibits
const MockHallway = () => {
  const hallwayLength = 50;
  const sectionCount = 10;
  const spacing = hallwayLength / sectionCount;

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, hallwayLength / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, hallwayLength]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 4, hallwayLength / 2]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, hallwayLength]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-3, 2, hallwayLength / 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, hallwayLength]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[3, 2, hallwayLength / 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, hallwayLength]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      {/* Exhibits */}
      {Array.from({ length: sectionCount }).map((_, i) => {
        const z = i * spacing + 2;
        return (
          <group key={i}>
            <mesh position={[-2.5, 1, z]}>
              <boxGeometry args={[0.4, 2, 1]} />
              <meshStandardMaterial color="#e5e5e5" />
            </mesh>
            <mesh position={[2.5, 1, z]}>
              <boxGeometry args={[0.4, 2, 1]} />
              <meshStandardMaterial color="#e5e5e5" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const Hallway = () => {
  const { scene } = useGLTF('./models/hallway.glb') // Put hallway.glb in /public/models
  return <primitive object={scene} scale={1} />
}

const ExhibitModel = ({ path, position }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={position} />;
};

const Pillar = ({ position }) => {
  const { scene } = useGLTF("./models/pillar.glb");
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return <primitive object={cloned} position={position} />;
  return <primitive object={scene} position={position} />;
};


// 🎥 Smooth Snap Camera Rig
const CameraRig = () => {
  const camRef = useRef();
  const scroll = useScroll();
  const sectionCount = 8;
  const spacing = 5;
  const [currentZ, setCurrentZ] = useState(0);

  useFrame(() => {
    const offset = scroll.offset;
    const snappedIndex = Math.round(offset * sectionCount);
    const targetZ = snappedIndex * spacing;

    // Smooth transition
    setCurrentZ((prevZ) => prevZ + (targetZ - prevZ) * 0.08);

    const camY = 2.5;
    const camZ = currentZ - 6; // back away from exhibit
    const lookZ = currentZ;

    camRef.current.position.set(0, camY, camZ+9);
    camRef.current.lookAt(0, camY, lookZ+4); // look slightly ahead
  });

  return <PerspectiveCamera makeDefault ref={camRef} fov={60} position={[0, 2.5, 0]} />;
};

const exhibitSpots = [
  {
    id: 1,
    position: [-2.5, 1.2, 5], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 2,
    position: [2.5, 1.2, 5], // right side
    modelPath: "./models/vase.glb",
  },
  {
    id: 3,
    position: [-2.5, 1.2, 10],
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    id: 4,
    position: [2.5, 1.2, 10],
    modelPath: "./models/tunic.glb",
  },
  {
    id: 5,
    position: [-2.5, 1.2, 15], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 6,
    position: [2.5, 1.2, 15], // right side
    modelPath: "./models/vase.glb",
  },
  {
    id: 7,
    position: [-2.5, 1.2, 20],
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    id: 8,
    position: [2.5, 1.2, 20],
    modelPath: "./models/tunic.glb",
  },
  {
    id: 9,
    position: [-2.5, 1.2, 25], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 10,
    position: [2.5, 1.2, 25], // right side
    modelPath: "./models/vase.glb",
  },
  {
    id: 11,
    position: [-2.5, 1.2, 30], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 12,
    position: [2.5, 1.2, 30], // right side
    modelPath: "./models/vase.glb",
  },
  {
    id: 13,
    position: [-2.5, 1.2, 35],
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    id: 14,
    position: [2.5, 1.2, 35],
    modelPath: "./models/tunic.glb",
  },
  {
    id: 15,
    position: [-2.5, 1.2, 40], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 16,
    position: [2.5, 1.2, 40], // right side
    modelPath: "./models/vase.glb",
  },
  {
    id: 17,
    position: [-2.5, 1.2, 45],
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    id: 18,
    position: [2.5, 1.2, 45],
    modelPath: "./models/tunic.glb",
  },
  {
    id: 19,
    position: [-2.5, 1.2, 50], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/oil_lamp.glb",
  },
  {
    id: 20,
    position: [2.5, 1.2, 50], // right side
    modelPath: "./models/vase.glb",
  }
];



// 🖼️ Main Exhibition Scene
const Exhibition = () => {
  return (
    <div className="w-full h-screen relative">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10">
        <p className={styles.sectionSubText}>Walk down the Hallway</p>
        <h2 className={styles.sectionHeadText}>The Exhibition</h2>
      </motion.div>
      <div className="w-full h-[85%]">
        <Canvas shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-0.5, 1, 0.5]} intensity={1.5} castShadow />
          <directionalLight position={[0.5, -1, -0.5]} intensity={0.7} castShadow />
          <Suspense fallback={null}>
            <ScrollControls pages={10} damping={0.15} snap>
              <CameraRig />
              <Hallway />
              {exhibitSpots.map((spot) => (
                  <mesh key={spot.id} position={spot.position}>
                    <Pillar/>
                  </mesh>
              ))}
              {/* {exhibitSpots.map((spot) => (
                <ExhibitModel key={spot.id} path={spot.modelPath} position={spot.position} />
              ))} */}
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Exhibition, "exhibition");
