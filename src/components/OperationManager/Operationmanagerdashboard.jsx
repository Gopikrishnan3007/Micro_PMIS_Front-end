


// import React, { useState } from 'react';
// import { FaPlus, FaEdit, FaEye, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import AddTracker from './AddTracker';
// import EditTrack from './EditTrack';
// import ViewTrack from './ViewTrack';

// const handleLogout = async () => {
//   sessionStorage.clear();
//   window.location.href = '/'; // Redirect to login page or home page
// };

// function OperationManagerDashboard() {
//   const [activePage, setActivePage] = useState('dashboard');
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const renderContent = () => {
//     switch (activePage) {
//       case 'dashboard':
//         return <div>Dashboard Overview Content</div>; // Replace with your dashboard component
//       case 'createtrack':
//         return <AddTracker />; // Replace with your create track component
//       case 'viewtrack':
//         return <ViewTrack />; // Replace with your view track component
//       default:
//         return <div>Dashboard Overview Content</div>; // Default content
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 text-black">
//       {/* Sidebar */}
//       <div className={`bg-black text-white p-4 shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
//         <div className="flex justify-between items-center mb-6">
//           <div className="text-2xl font-bold">{sidebarOpen ? 'Operation Manager' : 'OM'}</div>
//           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
//             {sidebarOpen ? '<<' : '>>'}
//           </button>
//         </div>
//         <div className="space-y-4 flex-1">
//           <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('dashboard')}>
//             <FaClipboardList className="mr-2" /> {sidebarOpen && 'Dashboard Overview'}
//           </div>
//           <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('createtrack')}>
//             <FaPlus className="mr-2" /> {sidebarOpen && 'Add Tracker'}
//           </div>
//           <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('viewtrack')}>
//             <FaEye className="mr-2" /> {sidebarOpen && 'View Trackers'}
//           </div>
//         </div>
//         <br />
//         <div className="mt-auto">
//           <a className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={handleLogout}>
//             <FaSignOutAlt className="mr-2" /> {sidebarOpen && 'Logout'}
//           </a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-3xl font-bold mb-6">Operation Manager Dashboard</h1>
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

// export default OperationManagerDashboard;


import React, { useState } from 'react';
import { FaPlus, FaEdit, FaEye, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Pie, Line } from 'react-chartjs-2';
import ManageTrack from './ManageTrack';

const OperationManagerDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pieData = {
    labels: ['Ships', 'Ports', 'Tasks'],
    datasets: [
      {
        label: 'Ship Data Analysis',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        data: [65, 59, 80],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Ship Movements',
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        data: [15, 25, 35, 45, 55],
      },
    ],
  };

  const ships = [
    { id: 1, name: 'Evergreen', port: 'Chennai', status: 'Docked' },
    { id: 2, name: 'Maersk', port: 'Singapore', status: 'In Transit' },
    { id: 3, name: 'Hapag-Lloyd', port: 'Rotterdam', status: 'Docked' },
  ];

  const handleLogout = async () => {
    sessionStorage.clear();
    window.location.href = '/'; // Redirect to login page or home page
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Ship Data Overview</h2>
              <div className="flex flex-col space-y-4">
                <Pie data={pieData} />
              </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Ship Movements</h2>
              <Line data={lineData} />
              <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-6 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Ship Details</h2>
              <ul className="space-y-4">
                {ships.map((ship) => (
                  <li key={ship.id} className="bg-blue-100 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg">{ship.name}</h3>
                    <p>Port: {ship.port}</p>
                    <p>Status: {ship.status}</p>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            
          </motion.div>
        );

      case 'manageTracker':
        return <ManageTrack />;
      default:
        return <div>Dashboard Overview Content</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className={`bg-black text-white p-4 shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">{sidebarOpen ? 'Operation Manager' : 'OM'}</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
            {sidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <div className="space-y-4 flex-1">
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('dashboard')}>
            <FaClipboardList className="mr-2" /> {sidebarOpen && 'Dashboard Overview'}
          </div>
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('manageTracker')}>
            <FaEye className="mr-2" /> {sidebarOpen && 'View Trackers'}
          </div>
        </div>
        <br />
        <div className="mt-auto">
          <a className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={handleLogout}>
            <FaSignOutAlt className="mr-2" /> {sidebarOpen && 'Logout'}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Operation Manager Dashboard</h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default OperationManagerDashboard;
