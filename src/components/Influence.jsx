import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion';
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useRef } from 'react';
import { influences } from '../constants';

const Influence = () => {
  const [current, setCurrent] = useState(0)

  const slideWidth = 300 // must match tailwind w-[300px]

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? influences.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === influences.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center">Rome’s Enduring Influence</h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl overflow-hidden px-10">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray-400 hover:text-black z-10"
        >
          ‹
        </button>

        {/* Slide Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${slideWidth / 2}px - ${current * slideWidth}px))`,
          }}
        >
          {influences.map((item, index) => {
            const isCurrent = index === current
            const isAdjacent =
              index === current - 1 || index === current + 1 ||
              (current === 0 && index === influences.length - 1) ||
              (current === influences.length - 1 && index === 0)

            const scale = isCurrent ? 'scale-100 opacity-100 z-10' : isAdjacent ? 'scale-90 opacity-60 z-0' : 'scale-75 opacity-0 pointer-events-none'

            return (
              <div
                key={index}
                className={`w-[300px] flex-shrink-0 mx-4 transition-all duration-500 ease-in-out transform bg-white rounded-xl shadow-xl p-6 ${scale}`}
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
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray-400 hover:text-black z-10"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Influence