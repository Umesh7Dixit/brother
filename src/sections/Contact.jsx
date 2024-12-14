import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';


const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full' >
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about' >
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6 '>
          <motion.h1
            variants={slideUpVariants}
            className='text-blue-500 text-2xl'>
            CONTACT US</motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px]  font-bold'>
            REACT US FOR ANY QUERY </motion.h1>

          <div className='w-[120px] h-[6px] bg-blue-500' ></div>
          <p className='text-3xl italic text-black-50 mt-[60px]' >Harshit Pandey </p>
          <p className='text-3xl italic text-black-50 mt-[60px]' >harshitPandey@gmail.com</p>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
             
          </motion.div>
    </div>
    </div>
  )
}

export default Contact