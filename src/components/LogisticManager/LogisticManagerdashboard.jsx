

import React, { useState } from 'react';
import { FaShip, FaTasks, FaBell, FaUsersCog, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import ResourcesManagement from './ResourcesManagement';
import ResetPasswordOne from './ResetPasswordOne';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const LogisticManagerDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'resources':
        return <ResourcesManagement />;
        case 'resetpassword':
          return <ResetPasswordOne />;
      default:
        return <DashboardOverview />;
    }
  };

  const handleLogout = async () => {
    sessionStorage.clear();
  }

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <div className={`bg-black text-white p-4 shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">{sidebarOpen ? 'Logistic Manager' : 'LM'}</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
            {sidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <div className="space-y-4 flex-1">
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('dashboard')}>
            <FaChartLine className="mr-2" /> {sidebarOpen && 'Dashboard'}
          </div>
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('resources')}>
            <FaTasks className="mr-2" /> {sidebarOpen && 'Resources'}
          </div>
        
        <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('resetpassword')}>
            <FaMapMarkerAlt className="mr-2" /> {sidebarOpen && 'Reset the password'}
          </div>

        <a className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'} mt-auto`} onClick={handleLogout} href='/'>
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
  const data = {
    labels: ['Resources', 'Ships', 'Tasks'],
    datasets: [
      {
        label: 'Resource Allocation',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        data: [65, 59, 80],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Ship Arrivals',
        fill: false,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <Pie data={data} />
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <div>
          <Line data={lineData} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Tasks and Responsibilities</h2>
        <div className="flex flex-col space-y-4">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Manage and allocate port resources</h3>
            <p>Ensure optimal resource distribution and allocation.</p>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Coordinate with ship operators</h3>
            <p>Work with operators to schedule arrivals and departures.</p>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Monitor resource usage</h3>
            <p>Track and adjust resource allocation as needed.</p>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default LogisticManagerDashboard;
