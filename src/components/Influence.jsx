import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { influences } from '../constants';

const Influence = () => {
  return (
    <div className="relative w-full py-16 flex flex-col items-center">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className={styles.sectionSubText}>753 BC - 476 AD</p>
        <h2 className={styles.sectionHeadText}>Rome’s Enduring Influence</h2>
      </motion.div>

      {/* ✅ New Grid Layout */}
      <div className="grid grid-cols-2 gap-6 mt-10 max-w-6xl px-10 overflow-hidden">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div className="group border border-white/40 p-6 shadow-md h-[50%] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative bg-black">
            <h3 className="text-[200%] font-bold mb-2">{influences[0].title}</h3>
            <p className="text-sm text-secondary">{influences[0].content}</p>
          </div>
          <div className="group border border-white/40 p-6 shadow-md h-[60%] bg-orange-300 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
            <h3 className="text-[200%] font-bold mb-2 text-black">{influences[1].title}</h3>
            <p className="text-sm text-black mr-[30%]">{influences[1].content}</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <div className="group border border-white/40 p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
            <h3 className="text-[200%] font-bold mb-2">{influences[2].title}</h3>
            <p className="text-sm text-secondary mr-[30%] mb-[10%]">{influences[2].content}</p>
          </div>
          <div className="group border border-white/40 p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
            <h3 className="text-[200%] font-bold mb-2">{influences[3].title}</h3>
            <p className="text-sm text-secondary mr-[30%] mb-[10%]">{influences[3].content}</p>
          </div>
          <div className="group border border-white/40 p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
            <h3 className="text-[200%] font-bold mb-2">{influences[4].title}</h3>
            <p className="text-sm text-secondary mr-[30%] mb-[10%]">{influences[4].content}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Influence, 'influence');
