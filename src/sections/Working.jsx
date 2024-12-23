// import { motion } from 'framer-motion';
// import { slideUpVariants, zoomInVariants } from './animation';
// import { planning } from '../export';
// // import { allservices } from '../export';

// const Working = () => {
//   return (
//     <div id='working' className='w-full bg-white' >
//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       variants={slideUpVariants}
//       className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>

//         {/* <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>STEP BY STEP</motion.h1> */}
//         <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center '>HOW IT&apos;S WORKING</motion.h1>

//         <motion.div
//           variants={slideUpVariants}
//           className='w-[120px] h-[6px] bg-blue-500'>
//         </motion.div>

//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           variants={zoomInVariants}
//           className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>

//            {
//               planning.map((item, index)=> (
//                 <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-blue-500 rounded-md p-6'>
//                   <div>
//                     <item.icon className='size-[80px] bg-blue-500 hover:bg-blue hover:fill-white p-4 rounded-full cursor-pointer' />
//                   </div>
//                   <h1 className='text-2xl font-bold uppercase' >
//                     {item.title}
//                   </h1>
//                   <p className='text-[20px] text-center text-black' >{item.about}</p>
//                 </div>
//               ))
//            }    
        
        
//         </motion.div>
           
  

        
//     </motion.div>
//   </div>
//   )
// }

// export default Working



import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id="working" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center gap-[20px]"
      >
        {/* Section Title */}
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          HOW IT&apos;S WORKING
        </motion.h1>

        {/* Blue Divider */}
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-blue-500"
        ></motion.div>

        {/* Planning Items Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-[30px]"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 border-2 border-blue-500 rounded-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div>
                <item.icon className="w-[80px] h-[80px] bg-blue-500 text-white p-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-600" />
              </div>
              {/* Title */}
              <h1 className="text-xl font-bold uppercase text-center">
                {item.title}
              </h1>
              {/* Description */}
              <p className="text-[16px] text-center text-gray-700">{item.about}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
