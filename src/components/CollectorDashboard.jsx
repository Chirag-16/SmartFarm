import { useState, useEffect } from 'react';
import { mockWasteData } from '../mockData';

const CollectorDashboard = () => {
  const [wasteRequests, setWasteRequests] = useState(mockWasteData);

  // Function to update the status of a waste entry
  const updateStatus = (id, newStatus) => {
    const updatedRequests = wasteRequests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request
    );
    setWasteRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Collector Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Waste Collection Requests</h3>

        {wasteRequests.length === 0 ? (
          <p className="text-gray-600">No waste collection requests found.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {wasteRequests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="p-3">{request.type}</td>
                  <td className="p-3">{request.quantity}</td>
                  <td className="p-3">{request.location}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        request.status === 'Processed'
                          ? 'bg-green-200 text-green-700'
                          : request.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-700'
                          : 'bg-blue-200 text-blue-700'
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => updateStatus(request.id, 'Collected')}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-200"
                    >
                      Mark as Collected
                    </button>
                    <button
                      onClick={() => updateStatus(request.id, 'Processed')}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Mark as Processed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CollectorDashboard;