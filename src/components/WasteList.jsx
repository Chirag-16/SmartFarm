const WasteList = ({ wasteEntries }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Waste Tracking</h3>
        
        {wasteEntries.length === 0 ? (
          <p className="text-gray-600">No waste entries found. Add your first entry!</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Disposal Method</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {wasteEntries.map((entry) => (
                <tr key={entry.id} className="border-b">
                  <td className="p-3">{entry.type}</td>
                  <td className="p-3">{entry.quantity}</td>
                  <td className="p-3">{entry.location}</td>
                  <td className="p-3">{entry.disposalMethod}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full ${entry.status === 'Processed' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default WasteList;