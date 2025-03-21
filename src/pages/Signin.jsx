import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';
import { mockUsers } from '../mockData';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'farmer'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form behavior
    setIsLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      // Find the user in mock data
      const user = mockUsers.find(
        (u) =>
          u.email === credentials.email &&
          u.role === credentials.role &&
          u.password === credentials.password
      );

      if (user) {
        // Call the login function from AuthContext
        login({
          role: user.role,
          name: user.name,
          email: user.email
        });
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 800);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-green-500 to-green-600 rounded-b-3xl shadow-lg transform -skew-y-2 z-0" />
      
      <motion.div 
        className="w-full max-w-md z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo and branding */}
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center bg-white p-3 rounded-full shadow-lg mb-4">
            <span className="text-3xl">🌱</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Agriclean</h1>
          <p className="text-white mt-1">Sustainable Waste Management</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={itemVariants}
        >
          {/* Decorative header image */}
          <div className="h-32 bg-gradient-to-r from-green-400 to-green-600 relative">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBr3ea4fyC570Aldmpy_gRB-M_yt2_lE5Vlg&s" 
              alt="Farm landscape" 
              className="h-full w-full object-cover opacity-30 absolute mix-blend-overlay"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            </div>
          </div>

          <form onSubmit={handleLogin} className="p-8">
            {/* Error message */}
            {error && (
              <motion.div 
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  {error}
                </p>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">I am a</label>
              <div className="grid grid-cols-3 gap-3">
                {['Farmer', 'Admin', 'Collector'].map((option) => (
                  <motion.button
                    key={option}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`py-3 rounded-lg border transition-all ${
                      credentials.role === option.toLowerCase() 
                        ? 'bg-green-50 border-green-500 text-green-700' 
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                    onClick={() => setCredentials({ ...credentials, role: option.toLowerCase() })}
                  >
                    {option === 'Collector' ? 'Collector/User' : option}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Email input */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </motion.div>

            {/* Password input */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 text-sm font-medium">Password</label>
                <a href="#" className="text-sm text-green-600 hover:text-green-700">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </motion.div>

            {/* Login button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                )}
                {isLoading ? 'Signing in...' : 'Sign in'}
              </motion.button>
            </motion.div>

            {/* Sign up prompt */}
            <motion.div className="mt-6 text-center text-gray-600 text-sm" variants={itemVariants}>
              Don't have an account?{' '}
              <a href="#" className="text-green-600 font-medium hover:text-green-700" onClick={() => navigate("/signup")}>Create an account</a>
            </motion.div>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div className="text-center mt-8 text-gray-600 text-sm" variants={itemVariants}>
          By logging in, you agree to our{' '}
          <a href="#" className="text-green-600 hover:text-green-700">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-16 h-16 bg-green-400 rounded-full opacity-20"
        animate={{ 
          y: [0, -20, 0], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-green-500 rounded-full opacity-20"
        animate={{ 
          y: [0, 20, 0], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default Login;