// import React from 'react';
// import { FaShip, FaTasks, FaBell, FaUsersCog, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';
// import { Bar, Pie, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { motion } from 'framer-motion';
// import ShipRequest from './ShipRequest';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

// const VesselOperatorsDashboard = () => {
//     const [activePage, setActivePage] = React.useState('dashboard');

//     const renderContent = () => {
//         switch (activePage) {
//             case 'dashboard':
//                 return <DashboardOverview />;
//               case 'request':
//                 return <ShipRequest />;
//             default:
//                 return <DashboardOverview />;
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white">
//             {/* Top Navbar */}
//             <nav className="bg-blue-900 text-white p-4 flex items-center shadow-lg">
//                 <div className="text-3xl font-bold">Vessel Operator</div>
//                 <div className="ml-auto flex space-x-6">
//                     <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('dashboard')}>
//                         <FaChartLine className="mr-2" /> Dashboard
//                     </div>
//                     <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('request')}>
//                         <FaShip className="mr-2" /> Request To Port
//                     </div>
//                     <div className="flex items-center cursor-pointer hover:text-gray-300">
//                         <FaBell className="mr-2" /> Notifications
//                     </div>
//                     <div className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition">
//                         <FaUsersCog className="mr-2" /> Logout
//                     </div>
//                 </div>
//             </nav>

//             {/* Main Content */}
//             <main className="p-6">
//                 {renderContent()}
//             </main>
//         </div>
//     );
// };

// // Dashboard Overview Component
// const DashboardOverview = () => {
//     const pieData = {
//         labels: ['Ships', 'Ports', 'Tasks'],
//         datasets: [
//             {
//                 label: 'Ship Data Analysis',
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 data: [65, 59, 80],
//             },
//         ],
//     };

//     const lineData = {
//         labels: ['January', 'February', 'March', 'April', 'May'],
//         datasets: [
//             {
//                 label: 'Ship Movements',
//                 fill: false,
//                 backgroundColor: '#36A2EB',
//                 borderColor: '#36A2EB',
//                 data: [15, 25, 35, 45, 55],
//             },
//         ],
//     };
//     const ships = [
//         { id: 1, name: 'Evergreen', port: 'Chennai', status: 'Docked' },
//         { id: 2, name: 'Maersk', port: 'Singapore', status: 'In Transit' },
//         { id: 3, name: 'Hapag-Lloyd', port: 'Rotterdam', status: 'Docked' },
//     ];

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//         >
//             <div className="bg-white text-black p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Ship Data Overview</h2>
//                 <div className="flex flex-col space-y-4">
//                     <div>
//                         <Pie data={pieData} />
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white text-black p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Ship Movements</h2>
//                 <Line data={lineData} />
//                 <div className="bg-white text-black p-6 rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-bold mb-4">Ship Details</h2>
//                     <ul className="space-y-4">
//                         {ships.map((ship) => (
//                             <li key={ship.id} className="bg-blue-100 p-4 rounded-lg shadow-sm">
//                                 <h3 className="font-semibold text-lg">{ship.name}</h3>
//                                 <p>Port: {ship.port}</p>
//                                 <p>Status: {ship.status}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default VesselOperatorsDashboard;

import React, { useState } from 'react';
import { FaShip, FaTasks, FaBell, FaUsersCog, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import ShipRequest from './ShipRequest';
import Track from './Track';
import ResetPassword from './ResetPassword';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement);

const VesselOperatorsDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'request':
        return <ShipRequest />;
      case 'track':
        return <Track />;
      case 'resetpassword':
        return <ResetPassword />;
      default:
        return <DashboardOverview />;
    }
  };

  const handleLogout = async () => {
    sessionStorage.clear();
    window.location.href = '/'; // Redirect to login page or home page
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className={`bg-black text-white p-4 shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">{sidebarOpen ? 'Vessel Operator' : 'VO'}</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
            {sidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <div className="space-y-4 flex-1">
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('dashboard')}>
            <FaChartLine className="mr-2" /> {sidebarOpen && 'Dashboard'}
          </div>
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('request')}>
            <FaShip className="mr-2" /> {sidebarOpen && 'Request To Port'}
          </div>
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('resetpassword')}>
            <FaMapMarkerAlt className="mr-2" /> {sidebarOpen && 'Reset the password'}
          </div>

          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('track')}>
            <FaMapMarkerAlt className="mr-2" /> {sidebarOpen && 'Track'}
          </div>
          
          <a className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'} mt-auto`} onClick={handleLogout}>
            <FaUsersCog className="mr-2" /> {sidebarOpen && 'Logout'}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <main className="mt-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
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
        <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-6">
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
};

export default VesselOperatorsDashboard;
