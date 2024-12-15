import client1 from '../assets/t3.png';
// import client2 from '../assets/client2.png';
// import client3 from '../assets/client3.png';
import client4 from '../assets/t4.webp';
 



// import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
// import client4 from '../assets/client4.png';

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
//               className="w-24 h-24 object-cover border-2 border-gray-300 mb-4"
//             />
//             {/* <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;




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
              className="w-32 h-32 object-cover border-2 border-gray-300 mb-4"
            />
            {/* <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
