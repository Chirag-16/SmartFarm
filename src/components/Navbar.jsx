import { motion } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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

  // Only show basic navigation items when not signed in
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  // Add marketplace only when user is signed in
  const authenticatedNavItems = user ? [...navItems, { name: 'Marketplace', path: '/marketplace' }] : navItems;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = (role) => {
    switch (role) {
      case 'farmer':
        return '/farmer';
      case 'collector':
        return '/collector';
      case 'admin':
        return '/admin';
      default:
        return '/dashboard';
    }
  };

  return (
    <motion.nav 
      className="bg-white/80 backdrop-blur-md shadow-lg py-4 sticky top-0 z-50 border-b border-green-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.span 
            className="text-4xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🌱
          </motion.span>
          <motion.span 
            className="font-bold text-2xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Agriclean
          </motion.span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          {/* Show navigation items */}
          {authenticatedNavItems.map((item) => (
            <motion.div key={item.name} variants={navItemVariants} whileHover="hover" whileTap="tap">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-green-500 to-green-600 font-medium shadow-lg' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Show either user profile or sign in button */}
          {user ? (
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-all"
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                <span className="font-medium capitalize">
                  {user.role === 'collector' ? 'Collector' : user.role}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      navigate(getDashboardPath(user.role));
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div variants={navItemVariants} whileHover="hover" whileTap="tap">
              <NavLink 
                to="/signin" 
                className="px-4 py-2 rounded-lg transition-all duration-300 bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg"
              >
                Sign In
              </NavLink>
            </motion.div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-green-600 focus:outline-none transition-colors duration-200">
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