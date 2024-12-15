// import { useState } from 'react';
// import {FaXmark, FaBars, FaOpencart } from 'react-icons/fa6';
// import { Link } from 'react-scroll';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   }

//   const navItems = [
//     {
//       link:'Home',path: 'home'
//     },
//     {
//       link:'About',path: 'about'
//     },
//     {
//       link:'Services',path: 'services'
//     },
//     {
//       link:'Projects',path: 'projects'
//     },
//     {
//       link:'Contact',path: 'contact'
//     },
//   ]
//   return (
//     <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50' >

//       <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik' >Prime</h1>
//       <span className='text-yellow-500 italic' >Structures</span>

//       <ul className='lg:flex justify-center items-center gap-6 hidden' >
//           {
//             navItems.map(({link,path})=> (
//               <Link key={path} className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]' to={path} spy={true} offset={-100} smooth={true}  >{link}</Link>
//             ))
//           }
//       </ul>

//       <button className='bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden' >REACH US</button>

//       <div className='flex justify-between items-center lg:hidden mt-3'  onClick={toggleMenu} >
//         <div>
//           {isMenuOpen?<FaXmark className='text-yellow-500 text-3xl cursor-pointer' /> : <FaBars className='text-yellow-500 text-3xl cursor-pointer' />}
//         </div>
//       </div>

//       <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`}  onClick={closeMenu} ></div>

//       <ul className='flex flex-col justify-center items-center gap-2 w-full' >
//         {navItems.map( ( {link,path} ) => (
//           <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center' to={path} spy={true} offset={-100} smooth={true} >{link}</Link>
//         ))}
//       </ul>

//     </nav>
//   )
// }

// export default Header



import { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    // { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Projects', path: 'projects' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      {/* Logo */}
      <div className="flex items-center">
        <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>Ukp Iron </h1>
        <h1 className='text-gray-500 md:text-4xl text-3xl font-bold font-rubik'> & </h1>
        <span className='text-yellow-500 italic ml-1'>Steel Works</span>
      </div>

      {/* Desktop Navigation */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-blue-500 hover:text-white text-[15px]'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Reach Us Button for Desktop */}
      {/* <button className='bg-blue-500 hover:bg-blue-400 hover:text-white text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>
        REACH US
      </button> */}

      {/* Mobile Menu Toggle Button */}
      <div className='flex justify-between items-center lg:hidden' onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className='text-blue-500 text-3xl cursor-pointer' />
        ) : (
          <FaBars className='text-blue-500 text-3xl cursor-pointer' />
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='w-full h-fit bg-blue-500 p-4 absolute top-[72px] left-0'>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
