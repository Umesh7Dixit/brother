import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';


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
          {/* <p className='text-3xl italic text-black-50 mt-[60px]' >Harshit Pandey </p>
          <p className='text-3xl italic text-black-50 mt-[60px]' >harshitPandey@gmail.com</p> */}

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>

            <motion.form
              whileInView="visible"
              initial="visible"
              variants={zoomInVariants}
              className='flex flex-col justify-center items-start gap-4 w-full'
              >
                <input type='text' placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
                <input type='email' placeholder='Enter Email' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
                <input type='number' placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />

                <textarea placeholder='Enter Message' rows="4"  className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full h-[150px]' />

                <motion.button
                  whileInView="visible"
                  initial="hidden"
                  // initial="visible"
                  variants={slideUpVariants}
                  className='px-6 py-3 border-[2px] bg-blue-500 border-blue-500 text-white rounded-lg w-full hover:bg-blue-400'>
                  SUBMIT
                </motion.button>

            </motion.form>
             
          </motion.div>
    </div>
    </div>
  )
}

export default Contact