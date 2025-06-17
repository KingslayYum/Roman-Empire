import React, { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF, ScrollControls, useScroll  } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { motion, useInView } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import * as THREE from 'three';

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

const ExhibitModel = ({ path, position, onClick }) => {
  const { scene } = useGLTF(path);
  const cloned = useMemo(() => scene.clone(true), [scene]);

  return (
    <primitive
      object={cloned}
      position={position}
      onPointerDown={(e) => {
        e.stopPropagation();
        onClick(position);
      }}
    />
  );
};

const Pillar = ({ position }) => {
  const { scene } = useGLTF("./models/pillar.glb");
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return <primitive object={cloned} position={position} />;
};

// 🎥 Smooth Snap Camera Rig
const CameraRig = ({ selected, onArrive }) => {
  const camRef = useRef();
  const scroll = useScroll();
  const sectionCount = 5;
  const spacing = 5;
  const [currentZ, setCurrentZ] = useState(0);

  const targetPos = useRef(new THREE.Vector3(0, 2.5, 0));
  const targetLookAt = useRef(new THREE.Vector3(0, 2.5, 5));

  useFrame(() => {
    if (selected) {
      const [x, y, z] = selected;
      const isRight = x > 0;

      const camX = isRight ? x - 2 : x + 2;
      const camY = y + 1.5;
      const camZ = z - 2.4;

      targetPos.current.set(camX, camY, camZ);
      targetLookAt.current.set(x, y + 1.2, z - 2.4);

      camRef.current.position.lerp(targetPos.current, 0.08);
      camRef.current.lookAt(targetLookAt.current);

      // 🔍 Check if camera is close enough to target
      if (camRef.current.position.distanceTo(targetPos.current) < 0.1) {
        onArrive(true); // Notify parent: arrived
      } else {
        onArrive(false);
      }

    } else {
      const offset = scroll.offset;
      const snappedIndex = Math.round(offset * sectionCount);
      const targetZ = (snappedIndex + 1) * spacing;
      const camY = 2.5;

      setCurrentZ((prev) => prev + (targetZ + 1 - prev) * 0.08);

      camRef.current.position.set(0, camY, currentZ - 2);
      camRef.current.lookAt(0, camY, currentZ + 2);
      onArrive(false); // Hide description when walking
    }
  });

  return (
    <PerspectiveCamera makeDefault ref={camRef} fov={60} position={[0, 2.5, 0]} />
  );
};


const exhibitSpots = [
  {
    id: 1,
    name: "Gladius",
    description: "The gladius was the standard short sword used by Roman legionaries. Designed for thrusting, it was deadly in close combat. Its compact design allowed for effective use in tight formations like the testudo.",
    origin: "Hispania (modern Spain)",
    evolution: "The gladius finds its origins in Hispania, modern-day Spain, where Roman soldiers encountered the short swords of the Celtiberian tribes during the Punic Wars. These local designs inspired the Romans to develop their own standardized weapon, perfect for thrusting in tight formations. It became a hallmark of Roman infantry, reflecting a shift towards disciplined, close-quarter battle tactics.",
    position: [-2.5, 1.2, 10], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/gladius.glb",
  },
  {
    id: 2,
    name: "Scutum",
    description: "The scutum was a large, curved rectangular shield carried by Roman soldiers. Made of wood and covered in leather, it offered significant protection and was essential in Roman battle tactics, especially during formations.",
    origin: "Early Roman Republic, with influence from Samnite tribes",
    evolution: "The scutum, or Roman shield, evolved from earlier oval shields used by the Samnites and Etruscans. By the mid-Republic, the Romans had developed the distinctive large, curved rectangular version that offered greater protection and allowed for the famed testudo formation. Made from layered wood and leather, sometimes reinforced with metal, it was both practical and symbolic of the Roman legion's defensive and offensive strategies.",
    position: [2.5, 1.2, 10], // right side
    modelPath: "./models/scutum.glb",
  },
  {
    id: 3,
    name: "Galea",
    description: "The galea was a Roman soldier's helmet, often made of bronze or iron. It provided protection during battle and featured a crest or plume, which sometimes denoted rank or unit.",
    origin: "Etruscan and Celtic influences",
    evolution: "The galea, or Roman helmet, was heavily influenced by earlier Etruscan and Celtic designs. Initially simple, it developed into a more protective form with cheek guards, neck flanges, and later crests indicating rank. Crafted from bronze or iron, the galea reflected Rome's continuous adaptation of foreign military innovations for enhanced battlefield utility.",
    position: [-2.5, 1.2, 15],
    modelPath: "./models/galea.glb",
  },
  {
    id: 4,
    name: "Brazier",
    description: "A brazier was used for heating and cooking in Roman households and camps. It was a metal container in which charcoal or wood could be burned, and it also served as a portable heat source.",
    origin: "Common across ancient Mediterranean cultures, including Egypt and Greece",
    evolution: "The brazier, used to heat spaces and cook food, originated across the ancient Mediterranean, especially in Egypt and Greece. Romans adopted and improved these portable firepots for use in homes, public spaces, and military camps. Often made from iron, bronze, or clay, braziers were a staple of daily life, bringing warmth and sustenance.",
    position: [2.5, 1.2, 15],
    modelPath: "./models/brazier.glb",
  },
  {
    id: 5,
    name: "Curule Chair",
    description: "The curule chair (sella curulis) was a symbol of political and military power in ancient Rome. Reserved for magistrates and high-ranking officials, it featured curved legs and no backrest—more symbolic than comfortable.",
    origin: "Etruscan kingship tradition",
    evolution: "The curule chair, or sella curulis, has aristocratic roots in Etruscan royal traditions. It was a seat of power, symbolizing the imperium of high-ranking officials such as consuls and praetors. Its distinctive X-shaped folding design and use of luxury materials like ivory underlined its function as both a piece of furniture and a political statement.",
    position: [-2.5, 1.2, 20], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/curule.glb",
  },
  {
    id: 6,
    name: "Pugio",
    description: "The pugio was a Roman dagger carried by soldiers. It was both a backup weapon and a symbol of status. Intricately decorated hilts were common among officers and high-ranking individuals.",
    origin: "Iberian Peninsula and early Mediterranean daggers",
    evolution: "The pugio, a Roman dagger, was derived from earlier short-bladed weapons found in the Iberian Peninsula. Though intended as a sidearm, it carried great symbolic weight and was worn by soldiers and officers alike. It also had a darker historical significance, being associated with the assassination of Julius Caesar, which was carried out using pugiones.",
    position: [2.5, 1.2, 20], // right side
    modelPath: "./models/pugio.glb",
  },
  {
    id: 7,
    name: "Strigil",
    description: "The strigil was a curved metal tool used in Roman baths to scrape off oil, sweat, and dirt from the skin. Bathers would apply oil to their bodies and use the strigil to clean themselves afterward.",
    origin: "Ancient Greece (5th century BCE)",
    evolution: "The strigil was a scraping tool adopted from Greek gymnasiums, brought to Rome alongside the expansion of Roman bath culture. Used to clean the skin after oiling, the bronze strigil became an essential part of personal hygiene, especially in public bathhouses (thermae), where it represented cleanliness and refinement.",
    position: [-2.5, 1.2, 25],
    modelPath: "./models/strigil.glb",
  },
  {
    id: 8,
    name: "Silver Mirror",
    description: "Roman silver mirrors were polished metal surfaces used for personal grooming. They were typically owned by wealthy citizens and often stored with cosmetic items in decorated boxes.",
    origin: "Egypt and Greece; adopted and refined by Romans",
    evolution: "The silver mirror, developed from earlier Egyptian and Greek examples, was a luxury item among Roman women. Crafted from polished silver or bronze, these mirrors were prized for their clarity and craftsmanship. They were often kept in cosmetic boxes and sometimes buried with their owners, reflecting beauty ideals and personal grooming practices of Roman society.",
    position: [2.5, 1.2, 25],
    modelPath: "./models/mirror.glb",
  },
  {
    id: 9,
    name: "Unguentarium",
    description: "An unguentarium was a small glass or ceramic bottle used to store perfumes, oils, or medicines. Commonly placed in tombs as grave offerings, they provide insight into Roman daily hygiene and burial customs.",
    origin: "Hellenistic Egypt and Syria (3rd–2nd century BCE)",
    evolution: "The unguentarium, a small bottle for perfumes or oils, traces its origin to Hellenistic Egypt and Syria. These containers were common in Roman households and tombs, especially among the wealthy, and were typically made from glass or ceramics. Their widespread presence in burial contexts suggests a cultural association with luxury, ritual, and the afterlife.",
    position: [-2.5, 1.2, 30], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/unguentarium.glb",
  },
  {
    id: 10,
    name: "Roman Coin",
    description: "Roman coins were made of bronze, silver, or gold and featured the portraits of emperors or deities. Beyond currency, they served as political propaganda tools to spread the image and achievements of leaders across the empire.",
    origin: "Early Roman Republic (~300 BCE)",
    evolution: "Roman coins were first minted in the early Republic, drawing inspiration from Greek and Etruscan models. Over time, coins like the denarius became instruments of both commerce and propaganda, often stamped with the image and achievements of emperors. They facilitated Rome’s vast economy and helped unify a diverse empire under shared symbols.",
    position: [2.5, 1.2, 30], // right side
    modelPath: "./models/coin.glb",
  },
  {
    id: 11,
    name: "Sundial",
    description: "A sundial was a device used to tell time by casting shadows from a central gnomon onto a marked surface. Romans used portable and stationary sundials, reflecting their advanced understanding of astronomy.",
    origin: "Egypt and Babylon (1500–500 BCE), introduced to Rome via Greece",
    evolution: "The sundial, originally developed in Babylon and Egypt, was introduced to Rome from Sicily during the Punic Wars. Romans initially relied on imported Greek devices before crafting their own. Sundials not only marked time but also signaled Rome’s growing fascination with science, engineering, and the structuring of civic life around measured hours.",
    position: [-2.5, 1.2, 35], // left side (x), pillar height (y), forward position (z)
    modelPath: "./models/sundial.glb",
  },
  {
    id: 12,
    name: "Carved Tablet",
    description: "Roman carved tablets were used for writing official decrees, legal records, or commemorations. Often made of stone or wax-covered wood, they recorded essential aspects of Roman civic life and administration.",
    origin: "Mesopotamia and Greece; adapted by Romans",
    evolution: "The carved tablet was an adaptation of inscription traditions from Mesopotamia and Greece. In Rome, these were used to document laws, public notices, and honors. Stone tablets engraved with Latin script became a permanent fixture of Roman urban spaces, embodying the administrative and legal sophistication of the empire.",
    position: [2.5, 1.2, 35], // right side
    modelPath: "./models/tablet.glb",
  }
];



// 🖼️ Main Exhibition Scene
const Exhibition = () => {
  const [selected, setSelected] = useState(null);
  const [arrived, setArrived] = useState(false);
  const infoRef = useRef(null);
  const isInView = useInView(infoRef, { once: false, threshold: 0.2 }); // ✅ new state
  const getSelectedExhibit = () => {
    if (!selected) return null;
    return exhibitSpots.find((spot) => {
      return (
        Math.abs(spot.position[0] - selected[0]) < 0.01 &&
        Math.abs(spot.position[1] - selected[1]) < 0.01 &&
        Math.abs(spot.position[2] - selected[2]) < 0.01
      );
    });
  };

  const currentExhibit = getSelectedExhibit();

  return (
    <div className="w-full h-screen relative">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10">
        <p className={styles.sectionSubText}>Scroll down the Hallway (Click to Explore the Artifacts)</p>
        <h2 className={styles.sectionHeadText}>The Exhibition</h2>
      </motion.div>
      <div className="w-full h-[85%]">
        <Canvas shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-0.5, 1, 0.5]} intensity={1.5} castShadow />
          <directionalLight position={[0.5, -1, -0.5]} intensity={0.7} castShadow />
          <Suspense fallback={null}>
            <ScrollControls pages={10} damping={0.15} snap>
              <CameraRig selected={selected} onArrive={setArrived} />
              <Hallway />
              {exhibitSpots.map((spot) => (
                <Pillar key={spot.id} position={spot.position} />
              ))}
              {exhibitSpots.map((spot) => (
                <ExhibitModel
                  key={spot.id}
                  path={spot.modelPath}
                  position={spot.position}
                  onClick={(pos) => setSelected(pos)}
                />
              ))}
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      {/* ✅ Only show if selected + arrived */}
      {currentExhibit && arrived && (
        <motion.div
          ref={infoRef}
          initial={{ x: -300, opacity: 0 }}          // from left
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-[50%] left-20 p-6 bg-white/40 shadow-lg max-w-sm z-50"
        >
          <div>
            <h3 className="text-xl text-black font-bold mb-2">{currentExhibit.name}</h3>
            <p className="text-black text-sm mb-4">{currentExhibit.description}</p>
          </div>
        </motion.div>
      )}
      {currentExhibit && arrived && (
        <motion.div
          ref={infoRef}
          initial={{ y: 100, opacity: 0 }}           // from bottom
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-[15%] left-[10%] p-6 bg-white/40 shadow-lg max-w-sm z-50"
        >
          <div>
            <h3 className="text-xl text-black font-bold mb-2">Origin</h3>
            <p className="text-black text-sm mb-4">{currentExhibit.origin}</p>
          </div>
        </motion.div>
      )}
      {currentExhibit && arrived && (
        <motion.div
          ref={infoRef}
          initial={{ x: 300, opacity: 0 }}           // from right
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-[40%] left-[67%] p-6 bg-white/40 shadow-lg max-w-sm z-50"
        >
          <div>
            <h3 className="text-xl text-black font-bold mb-2">Evolution</h3>
            <p className="text-black text-sm mb-4">{currentExhibit.evolution}</p>
          </div>
        </motion.div>
      )}
      {selected && arrived && (
        <div className="absolute top-[20%] right-10">
          <button
            onClick={() => {
              setSelected(null);
              setArrived(false);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};


export default SectionWrapper(Exhibition, "exhibition");
