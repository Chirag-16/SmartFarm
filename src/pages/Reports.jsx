import { mockWasteData } from '../mockData';
import { useState } from 'react';

const Reports = () => {
  const [filter, setFilter] = useState('all');

  const filteredData = mockWasteData.filter(entry => 
    filter === 'all' || entry.status === filter
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Waste Management Reports</h1>
      
      <div className="mb-8 space-x-4">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('Processed')}
          className={`px-4 py-2 rounded ${filter === 'Processed' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Processed
        </button>
        <button 
          onClick={() => setFilter('Pending')}
          className={`px-4 py-2 rounded ${filter === 'Pending' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Pending
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Total Entries</h3>
          <p className="text-3xl text-green-700">{filteredData.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Organic Waste</h3>
          <p className="text-3xl text-green-700">{filteredData.filter(w => w.type === 'Organic').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Detailed Report</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(entry => (
              <tr key={entry.id} className="border-b">
                <td className="p-3">{entry.type}</td>
                <td className="p-3">{entry.quantity}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full ${entry.status === 'Processed' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="p-3">{entry.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;