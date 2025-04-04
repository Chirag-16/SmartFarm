import { useState } from 'react';

const WasteForm = ({ onAddWaste }) => {
  const [wasteData, setWasteData] = useState({
    type: '',
    quantity: '',
    location: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wasteData.image) {
      alert('AI analysis complete!');
    }
    onAddWaste(wasteData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Waste Type</label>
          <input
            type="text"
            placeholder="e.g., Organic, Plastic, Metal"
            value={wasteData.type}
            onChange={(e) => setWasteData({ ...wasteData, type: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="text"
            placeholder="e.g., 100 kg"
            value={wasteData.quantity}
            onChange={(e) => setWasteData({ ...wasteData, quantity: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="e.g., Farm Location"
            value={wasteData.location}
            onChange={(e) => setWasteData({ ...wasteData, location: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div className="relative">
            <input
              type="file"
              onChange={(e) => setWasteData({ ...wasteData, image: e.target.files[0] })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>
        </div>
      </div>
      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg"
      >
        Submit Waste Entry
      </button>
    </form>
  );
};

export default WasteForm;