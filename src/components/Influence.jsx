import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion';
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useRef } from 'react';
import { influences } from '../constants';

const Influence = () => {
  const [current, setCurrent] = useState(0)

  const slideWidth = 400 // must match tailwind w-[300px]

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? influences.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === influences.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full py-16 flex flex-col items-center">
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Rome’s Enduring Influence</h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl overflow-hidden px-10 h-[400px]">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray hover:text-black z-10"
        >
          ‹
        </button>

        {/* Slide Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out mt-[10%]"
          style={{
            transform: `translateX(calc(50% - ${400 / 2}px - ${current * (400+32)}px))`,
          }}
        >
          {influences.map((item, index) => {
            const isCurrent = index === current
            const isAdjacent =
              index === current - 1 || index === current + 1 ||
              (current === 0 && index === influences.length - 1) ||
              (current === influences.length - 1 && index === 0)

            const scale = isCurrent ? 'scale-150 opacity-100 z-10' : isAdjacent ? 'scale-90 opacity-60 z-0' : 'scale-75 opacity-0 pointer-events-none'

            return (
              <div
                key={index}
                className={`w-[400px] flex-shrink-0 mx-4 transition-all duration-500 ease-in-out transform bg-gray-300 shadow-xl p-6 ${scale}`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            )
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray hover:text-black z-10"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Influence