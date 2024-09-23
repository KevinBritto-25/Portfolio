import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] shadow-lg transform transition-transform duration-300 hover:scale-110' />
          <div className='w-1 sm:h-80 h-40 violet-gradient mt-2 rounded-lg transition-all duration-300' />
        </div>
        <div>
          <motion.h1
            className={`${styles.heroHeadText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Hi I'm <span className={`text-[#915eff]`}>Kevin</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            I'm a Front-End Developer and aspiring AI/ML specialist who loves creating beautiful, functional web designs.
          </motion.p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-36 w-full flex justify-center items-center'>
        <a href='#about' >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero