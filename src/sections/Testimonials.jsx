// import { motion } from 'framer-motion';
// import { slideUpVariants, zoomInVariants } from './animation';
// import { clients } from '../export';

// const Testimonials = () => {
//   return (
//     <div id='clients' className='w-full  ' >
//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       variants={slideUpVariants}
//       className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>

//         <motion.h1 variants={slideUpVariants} className='text-blue-500 text-2xl'>TESTIMONIALS</motion.h1>
//         <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center '>OUR CLIENTS</motion.h1>

//         <motion.div
//           variants={slideUpVariants}
//           className='w-[120px] h-[6px] bg-blue-500'>
//         </motion.div>

//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           variants={zoomInVariants}
//           className='lg:w-full  w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px]'>

//             {
//               clients.map((item, index)=> (
//                 <div key={index} className='flex flex-col justify-center items-center' >
//                   <div className='border-2 border-white hover:bg-blue-500 pb-[100px] pt-[30px]' >
//                     <p className='text-white hover:text-black  text-lg text-center' >{item.about}</p>
//                   </div>

//                   <div className='flex flex-col justify-center items-center gap-[5px]' ></div>

//                   <img className='mt-[-50px]' src={item.image} alt='client image' />

//                   <h1 className='text-white text-[27px] font-semibold uppercase' >{item.name}</h1>

//                   <h1 className='text-white text-[22px]' >{item.post}</h1>
//                 </div>
//               ))
//             }
//         </motion.div>
           
  

        
//     </motion.div>
//   </div>
//   )
// }

// export default Testimonials




import client1 from '../assets/t3.png';
// import client2 from '../assets/client2.png';
// import client3 from '../assets/client3.png';
import client4 from '../assets/t4.webp';

// const Testimonials = () => {
//   const clients = [
//     { id: 1, img: client1, name: 'Client 1' },
//     { id: 2, img: client2, name: 'Client 2' },
//     { id: 3, img: client3, name: 'Client 3' },
//     { id: 4, img: client4, name: 'Client 4' },
//   ];

//   return (
//     <div id="testimonials" className="py-10 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Clients</h2>
      
//       {/* Grid for Clients */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
//         {clients.map((client) => (
//           <div
//             key={client.id}
//             className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
//             <img
//               src={client.img}
//               alt={client.name}
//               className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mb-4"
//             />
//             {/* <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





// import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
// import client4 from '../assets/client4.png';

const Testimonials = () => {
  const clients = [
    { id: 1, img: client1, name: 'Client 1' },
    { id: 2, img: client2, name: 'Client 2' },
    { id: 3, img: client3, name: 'Client 3' },
    { id: 4, img: client4, name: 'Client 4' },
  ];

  return (
    <div id="testimonials" className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Clients</h2>
      
      {/* Grid for Clients */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src={client.img}
              alt={client.name}
              className="w-24 h-24 object-cover border-2 border-gray-300 mb-4"
            />
            {/* <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
