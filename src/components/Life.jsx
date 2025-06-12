import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const regions = [
  {
    name: 'Rome (Italia)',
    x: 280,
    y: 335,
    description: 'Center of Roman politics, military power, and home of the Senate and emperors.',
  },
  {
    name: 'Britannia',
    x: 120,
    y: 130,
    description: 'Roman province known for Hadrian’s Wall and military frontier defense.',
  },
  {
    name: 'Gallia (Gaul)',
    x: 160,
    y: 230,
    description: 'Key Roman territory conquered by Julius Caesar, integrating Celtic tribes.',
  },
  {
    name: 'Carthage',
    x: 225,
    y: 410,
    description: 'Important Roman city after Punic Wars, hub of trade and Roman Africa.',
  },
  {
    name: 'Athens',
    x: 410,
    y: 400,
    description: 'Cultural and educational center under Roman rule, preserving Greek knowledge.',
  },
  {
    name: 'Alexandria',
    x: 520,
    y: 480,
    description: 'Major port city, home to the Great Library and center of learning.',
  },
  {
    name: 'Jerusalem',
    x: 580,
    y: 410,
    description: 'Site of several Jewish revolts and a key religious center in Roman Judea.',
  },
];

const ImageMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleClick = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const radius = 30;

    const clicked = regions.find((r) => {
      const dx = x - r.x;
      const dy = y - r.y;
      return dx * dx + dy * dy <= radius * radius;
    });

    setSelectedRegion(clicked || { name: 'Region Detail Not Registered', description: '' });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10">
        <p className={styles.sectionSubText}>click to interact</p>
        <h2 className={styles.sectionHeadText}>THE MAP</h2>
      </motion.div>

      <div
        className="relative w-[800px] h-[575px] border-2 border-gray-400"
        onClick={handleClick}
      >
        <img
          src="./map.png"
          alt="Roman Empire Map"
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Red Dots and Labels */}
        {regions.map((region, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              top: region.y - 10,
              left: region.x - 10,
              pointerEvents: 'none', // Allows clicks to pass through
            }}
          >
            <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white transform transition-transform duration-200 group-hover:scale-125" />
            <span className="text-xs text-white bg-black bg-opacity-70 px-1 mt-1 rounded">
              {region.name}
            </span>
          </div>
        ))}
      </div>

      {/* Selected Region Info */}
      <div className="mt-6 text-lg font-medium text-white text-center max-w-xl">
        {selectedRegion && (
          <>
            <div>
              Selected Region: <span className="font-bold">{selectedRegion.name}</span>
            </div>
            {selectedRegion.description && (
              <p className="mt-2 text-sm">{selectedRegion.description}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(ImageMap, "map")