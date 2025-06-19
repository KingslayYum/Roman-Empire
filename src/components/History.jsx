import {  VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, useInView, AnimatePresence  } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { useState, useRef, useLayoutEffect } from 'react';

const ExperienceCard = ({ experience, position = 'left' }) => {
  const [showImage, setShowImage] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      setCardSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [showImage, experience]);

  const isLeft = position === 'left';

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff', position: 'relative', overflow: 'visible' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: '#232631', color: '#fff' }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onClick={() => setShowImage(!showImage)}
        className="relative cursor-pointer inline-block"
      >
        {/* Card content */}
        <div ref={cardRef} className="relative z-10 inline-block">
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold mt-1">
            {experience.company_name}
          </p>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Sliding image */}
        <AnimatePresence>
          {showImage && (
            <motion.img
              src={experience.image}
              alt={experience.title}
              initial={{ x: isLeft ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: isLeft ? '105%' : '-105%', opacity: 1 }}
              exit={{ x: isLeft ? '100%' : '-100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="absolute top-0 rounded-lg shadow-lg object-cover bg-red-500"
              style={{
                height: 'min(40vw, 200px)',
                top: 0,
                [isLeft ? 'left' : 'right']: 'calc(60%)',
                maxWidth: '90vw',
                zIndex: 20,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const History = () => {
  return (
    <>
      <motion.div 
      variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}>
        <p className={styles.sectionSubText}>753 BC - 476 AD</p>
        <h2 className={styles.sectionHeadText}>Historical Milestone.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              position={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(History, "history")