// import client3 from '../assets/t03.webp';
// import client4 from '../assets/t4.webp';
// import client2 from '../assets/client2.png';
// import client1 from '../assets/client3.png';






// import { motion } from 'framer-motion';

// const Testimonials = () => {
//   const clients = [
//     { 
//       id: 1, 
//       img: client1, 
//       name: 'Client 1', 
//       role: 'CEO, Company A', 
//       testimonial: 'Their services exceeded our expectations and helped us achieve amazing results.' 
//     },
//     { 
//       id: 2, 
//       img: client2, 
//       name: 'Client 2', 
//       role: 'Manager, Company B', 
//       testimonial: 'A truly outstanding experience from start to finish. Highly recommend them!' 
//     },
//     { 
//       id: 3, 
//       img: client3, 
//       name: 'Client 3', 
//       role: 'Founder, Startup C', 
//       testimonial: 'Professional and efficient. We couldn’t have asked for better support.' 
//     },
//     { 
//       id: 4, 
//       img: client4, 
//       name: 'Client 4', 
//       role: 'Director, Business D', 
//       testimonial: 'Their innovative approach helped us tackle our challenges effectively.' 
//     },
//   ];

//   return (
//     <div id="testimonials" className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
//       <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
      
//       {/* Grid for Clients */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10"
//       >
//         {clients.map((client) => (
//           <motion.div
//             key={client.id}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform duration-300"
//           >
//             <img
//               src={client.img}
//               alt={client.name}
//               className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
//             <p className="text-sm text-gray-500 mb-4">{client.role}</p>
//             <p className="text-gray-700 text-center italic">{client.testimonial}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Testimonials;










// 3
// import client3 from '../assets/t03.webp';
// import client4 from '../assets/t4.webp';
// import client2 from '../assets/client2.png';
// import client1 from '../assets/client3.png';

// import { motion } from 'framer-motion';

// const Testimonials = () => {
//   const clients = [
//     { 
//       id: 1, 
//       img: client1, 
//       name: 'Client 1', 
//       role: 'CEO, Company A', 
//       testimonial: 'Their services exceeded our expectations and helped us achieve amazing results.' 
//     },
//     { 
//       id: 2, 
//       img: client2, 
//       name: 'Client 2', 
//       role: 'Manager, Company B', 
//       testimonial: 'A truly outstanding experience from start to finish. Highly recommend them!' 
//     },
//     { 
//       id: 3, 
//       img: client3, 
//       name: 'Client 3', 
//       role: 'Founder, Startup C', 
//       testimonial: 'Professional and efficient. We couldn’t have asked for better support.' 
//     },
//     { 
//       id: 4, 
//       img: client4, 
//       name: 'Client 4', 
//       role: 'Director, Business D', 
//       testimonial: 'Their innovative approach helped us tackle our challenges effectively.' 
//     },
//   ];

//   return (
//     <div id="testimonials" className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
//       <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
      
//       {/* Grid for Clients */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10"
//       >
//         {clients.map((client) => (
//           <motion.div
//             key={client.id}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform duration-300"
//           >
//             <img
//               src={client.img}
//               alt={client.name}
//               className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
//             <p className="text-sm text-gray-500 mb-4">{client.role}</p>
//             <p className="text-gray-700 text-center italic">{client.testimonial}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Testimonials;







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
//               className="w-32 h-32 object-cover border-2 border-gray-300 mb-4"
//             />
//             {/* <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

















// 4
import client3 from '../assets/t03.webp';
import client4 from '../assets/t4.webp';
import client2 from '../assets/client2.png';
import client1 from '../assets/client03.png';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const clients = [
    { 
      id: 1, 
      img: client1, 
      name: 'Client 1', 
      role: 'CEO, Company A', 
      testimonial: 'Their services exceeded our expectations and helped us achieve amazing results.' 
    },
    { 
      id: 2, 
      img: client2, 
      name: 'Client 2', 
      role: 'Manager, Company B', 
      testimonial: 'A truly outstanding experience from start to finish. Highly recommend them!' 
    },
    { 
      id: 3, 
      img: client3, 
      name: 'Client 3', 
      role: 'Founder, Startup C', 
      testimonial: 'Professional and efficient. We couldn’t have asked for better support.' 
    },
    { 
      id: 4, 
      img: client4, 
      name: 'Client 4', 
      role: 'Director, Business D', 
      testimonial: 'Their innovative approach helped us tackle our challenges effectively.' 
    },
  ];

  return (
    <div id="testimonials" className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
      
      {/* Grid for Clients */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform duration-300"
          >
            {/* Circle Image */}
            {/* <div className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div> */}

            {/* Full Image Below Circle */}
            <div className="w-full mt-4">
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* <h3 className="text-xl font-semibold text-gray-800 mt-4">{client.name}</h3> */}
            <p className="text-sm text-gray-500 mb-4">{client.role}</p>
            <p className="text-gray-700 text-center italic">{client.testimonial}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
