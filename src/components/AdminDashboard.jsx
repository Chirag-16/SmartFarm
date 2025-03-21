import { mockUsers, mockWasteData } from '../mockData';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Control Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Total Users</h3>
          <p className="text-4xl">{mockUsers.length}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Waste Processed</h3>
          <p className="text-4xl">{mockWasteData.filter(w => w.status === 'Processed').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">User Accounts</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map(user => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.name}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3 text-green-500 font-bold">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;