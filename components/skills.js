"use client"

import React from 'react'
import { motion } from "framer-motion";
import { skillsData } from '@/lib/data'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section id='skills' className="mt-10 mb-10 max-w-[45rem] text-center leading-8 sm:mb-14 scroll-mt-28">
      <h1 className="mb-3 text-2xl font-bold">
        My Skills
      </h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li 
              className="px-5 py-3 bg-white borderBlack rounded-xl"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
