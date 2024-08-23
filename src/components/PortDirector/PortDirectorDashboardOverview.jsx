import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'animate.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Berth Allocations',
      data: [30, 45, 20, 60, 70, 50, 90],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const dataPie = {
  labels: ['Operational', 'Pending', 'Completed'],
  datasets: [
    {
      label: 'Request Status',
      data: [50, 30, 20],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
};

const PortDirectorDashboardOverview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn">Port Director Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-xl font-semibold mb-2">Total Berth Allocations</h2>
          <p className="text-2xl font-bold">250</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
          <p className="text-2xl font-bold">15</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-xl font-semibold mb-2">Completed Operations</h2>
          <p className="text-2xl font-bold">180</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s" style={{ height: '30rem' }}>
          <h2 className="text-xl font-semibold mb-4">Berth Allocations Over Time</h2>
          <div className="h-full">
            <Bar data={dataBar} options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Monthly Berth Allocations',
                },
              },
            }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-5s" style={{ height: '30rem' }}>
          <h2 className="text-xl font-semibold mb-4">Request Status Distribution</h2>
          <div className="h-full">
            <Pie data={dataPie} options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Status Distribution',
                },
              },
            }} />
          </div>
        </div>
      </div>

      {/* Tasks and Responsibilities */}
      <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-6s">
        <h2 className="text-xl font-semibold mb-4">Tasks and Responsibilities</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Monitor berth allocations and ensure optimal usage.</li>
          <li>Track and manage pending requests.</li>
          <li>Oversee operational efficiency and ensure timely completions.</li>
          <li>Review and approve billing statements.</li>
          <li>Coordinate with logistics and operations teams.</li>
        </ul>
      </div>
    </div>
  );
};

export default PortDirectorDashboardOverview;
