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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Add Waste Entry</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Waste Type"
          value={wasteData.type}
          onChange={(e) => setWasteData({ ...wasteData, type: e.target.value })}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Quantity"
          value={wasteData.quantity}
          onChange={(e) => setWasteData({ ...wasteData, quantity: e.target.value })}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={wasteData.location}
          onChange={(e) => setWasteData({ ...wasteData, location: e.target.value })}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="file"
          onChange={(e) => setWasteData({ ...wasteData, image: e.target.files[0] })}
          className="p-3 border rounded-lg"
        />
      </div>
      <button 
        type="submit"
        className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
      >
        Submit Waste Entry
      </button>
    </form>
  );
};

export default WasteForm;