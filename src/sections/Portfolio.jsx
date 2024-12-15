import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

import pi2 from '../assets/pi2.jpg';
import pi3 from '../assets/pi3.jpeg';
import pi4 from '../assets/pi04.jpg';
import pi5 from '../assets/pi5.jpg';
import pi6 from '../assets/pi6.jpg';
import pi7 from '../assets/pi7.jpg';
import pi8 from '../assets/pi8.jpg';
import pi11 from '../assets/pi11.jpg';

const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>

          <motion.h1 variants={slideUpVariants} className='text-blue-500 text-2xl'>PORTFOLIO</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center '>OUR BEST PROJECTS</motion.h1>

          <motion.div
            variants={slideUpVariants}
            className='w-[120px] h-[6px] bg-blue-500'>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'>
              <img src={pi11} alt='project image' className='h-[250px] w-full' />
              <img src={pi2} alt='project image' className='h-[250px] w-full' />
              <img src={pi3} alt='project image' className='h-[250px] w-full' />
              <img src={pi4} alt='project image' className='h-[250px] w-full' />
              <img src={pi5} alt='project image' className='h-[250px] w-full' />
              <img src={pi6} alt='project image' className='h-[250px] w-full' />
              <img src={pi7} alt='project image' className='h-[250px] w-full' />
              <img src={pi8} alt='project image' className='h-[250px] w-full' />
            </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio