import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import ModelCanvas from "./canvas"; // update path if needed

const Art = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}>
        <p className={styles.sectionSubText}>Artifacts</p>
        <h2 className={styles.sectionHeadText}>Art.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <ModelCanvas modelPath={tech.modelPath} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Art, "");
