


import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';


const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about' >
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6 '>
          <motion.h1
            variants={slideUpVariants}
            className='text-blue-500 text-2xl'>
            WELCOME TO </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className='text-white uppercase text-[40px]  font-bold'>
            Prime Construction </motion.h1>

          <div className='w-[120px] h-[6px] bg-blue-500' ></div>
          <p className='text-3xl italic text-gray-50 mt-[60px]' >Crafting Precision Steel Solutions, Delivering Excellence Through Innovative Hardware Contracts</p>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
            <p className='text-white text-lg text-justify' >We specialize in comprehensive steel and iron fabrication, delivering high-quality custom solutions for industrial, commercial, and infrastructure projects. With a commitment to excellence, we transform raw materials into precisely engineered products that meet our clients exact specifications. Our expert team combines technical expertise, advanced manufacturing capabilities, and a dedication to timely delivery, ensuring we exceed client expectations in every contract.</p>
            <motion.button variants={zoomInVariants }
              className='bg-blue-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-white' > READ MORE</motion.button>
          </motion.div>
    </div>
  )
}

export default About