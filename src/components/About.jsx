import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { overview } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <div className="flex">
        <div className="mr-20">
          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-20">
              <h2 className={styles.sectionSubHeadText}>Rise & Expansion</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.2, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The Roman Empire was one of the most powerful civilizations in history, beginning in 27 BCE when Augustus became the first emperor. It succeeded the Roman Republic and expanded rapidly across Europe, North Africa, and parts of Asia, bringing with it Roman law, architecture, and culture. The empire’s control over such vast territories allowed for relative peace and economic stability known as the Pax Romana.
          </motion.p>

          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-20">
            <h2 className={styles.sectionSubHeadText}>Society</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.2, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Roman society was highly organized, with a complex system of governance, military, and infrastructure. Roads, aqueducts, and cities were constructed throughout the empire, many of which still influence modern urban planning. Latin, the language of the Romans, became the foundation for many European languages, and Roman law heavily influenced modern legal systems.
          </motion.p>

          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-20">
            <h2 className={styles.sectionSubHeadText}>Decline & Legacy</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.2, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The empire eventually faced internal strife, economic troubles, and external invasions. It was officially split into the Western and Eastern Roman Empires in 285 CE. While the Western Roman Empire fell in 476 CE, the Eastern Roman Empire, known as the Byzantine Empire, survived for nearly another thousand years until 1453 CE.
          </motion.p>
        </div>

        <div className="bg-red-100 w-[40%] h-[90%] mt-[50px]">
          <img src={overview} alt="" className="w-[100%]"/>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");