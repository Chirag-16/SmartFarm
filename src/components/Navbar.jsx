import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // Animation variants
  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sign In', path: '/Signin' }

  ];

  return (
    <motion.nav 
      className="bg-white shadow-md py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.span 
            className="text-3xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🌱
          </motion.span>
          <motion.span 
            className="font-bold text-xl text-green-700"
            whileHover={{ scale: 1.05 }}
          >
            Agriclean
          </motion.span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={navItemVariants} whileHover="hover" whileTap="tap">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-lg transition duration-200 ${
                    isActive 
                      ? 'text-white bg-green-600 font-medium shadow-md' 
                      : 'text-gray-600 hover:text-green-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </div>


        {/* Mobile menu button - would be expanded in a complete implementation */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-green-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;