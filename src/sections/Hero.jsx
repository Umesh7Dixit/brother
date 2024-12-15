

// import heroimg from '../assets/heroimg.png';
// // import backgroundImagefrom from '../assets/homeimg.webp'; 
// import vid from '../assets/vid.mp4'; 

// import { motion } from 'framer-motion';
// import { slideUpVariants, zoomInVariants } from './animation';

// const Hero = () => {
//   return (
//     <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' style={{ backgroundImage : `url(${vid})`}}  >
        
//         <motion.dev
//             initial="hidden"
//             whileInView="visible"
//             variants={slideUpVariants}
//             className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>

//                 <motion.h1
//                     variants={slideUpVariants}
//                     className='text-yellow-500 text-2xl'>
//                         WE ARE BUILDERS
//                 </motion.h1>

//                 <motion.h1
//                   variants={slideUpVariants}
//                   className='text-white uppercase text-[50px] font-bold'>
//                     we will build your dream
//                 </motion.h1>

//                 <div className='w-[120px] h-[6px] bg-yellow-500' ></div>
//                 <p className='text-white text-[20px]' >Transforming Raw Steel and Iron into Precision-Engineered Solutions, We Build Strength and Reliability for Industries Worldwide Through Innovative Fabrication and Unmatched Technical Expertise</p>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   variants={zoomInVariants}
//                   className='flex justify-center items-center gap-5'>
//                     {/* <motion.button
//                       variants={zoomInVariants}
//                       className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold '>
//                         READ MORE
//                       </motion.button> */}
//                       <motion.button
//                         variants={zoomInVariants}
//                         className='border-white hover:border-blue-500 hover:text-blue-500 border-2 px-10 py-3 rounded-lg text-white font-bold'>
//                         REACH US
//                       </motion.button>
//                 </motion.div>



//         </motion.dev>

//         <div className='w-[40%] flex flex-col justify-end items-end' >
//           <motion.img
//             initial="hidden"
//             whileInView="visible"
//             variants={zoomInVariants}
//             src={heroimg} alt='Hero Image' className='lg:h-[600px] h-[300px] lg:mb-[-100px] '/>
//         </div>
//     </div>
//   )
// }

// export default Hero

 

import heroimg from '../assets/heroimg.png';
import vid2 from '../assets/vid3.mp4'; 

import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
  return (
    <div id='hero' className='relative bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px]'>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0'
      >
        <source src={vid2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className='relative z-10 w-full flex justify-between items-center'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>

          <motion.h1
            variants={slideUpVariants}
            className='text-yellow-500 text-2xl'>
            WE ARE BUILDERS
          </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className='text-white uppercase text-[50px] font-bold'>
            we will build your dream
          </motion.h1>

          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-white text-[20px]'>
            Transforming Raw Steel and Iron into Precision-Engineered Solutions, We Build Strength and Reliability for Industries Worldwide Through Innovative Fabrication and Unmatched Technical Expertise
          </p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex justify-center items-center gap-5'>
            <motion.button
              variants={zoomInVariants}
              className='border-white hover:border-blue-500 hover:text-blue-500 border-2 px-10 py-3 rounded-lg text-white font-bold'>
              REACH US
            </motion.button>
          </motion.div>
        </motion.div>

        <div className='w-[40%] flex flex-col justify-end items-end mt-80 '>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            src={heroimg} 
            alt='Hero Image' 
            className='lg:h-[400px] h-[200px] lg:mb-[-100px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

 
 