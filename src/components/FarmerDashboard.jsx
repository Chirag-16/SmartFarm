import { useState } from 'react';
import WasteForm from './WasteForm';
import WasteList from './WasteList';
import { mockWasteData } from '../mockData';
import { motion } from 'framer-motion';

const FarmerDashboard = () => {
  const [wasteEntries, setWasteEntries] = useState(mockWasteData);

  const handleAddWaste = (newWaste) => {
    setWasteEntries([...wasteEntries, { ...newWaste, id: wasteEntries.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 font-serif mb-4">
            Farmer Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage and track your farm waste efficiently
          </p>
        </div>

        {/* Waste Form Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-green-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Add New Waste Entry
          </h2>
          <WasteForm onAddWaste={handleAddWaste} />
        </motion.div>

        {/* Waste List Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-green-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Waste Entries
          </h2>
          <WasteList wasteEntries={wasteEntries} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FarmerDashboard;