// import React from 'react';
// import { FaShip, FaUsersCog, FaMoneyBill, FaBell, FaCog, FaClipboardList } from 'react-icons/fa';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import PortDirectorDashboardOverview from './PortDirectorDashboardOverview';
// import BerthAllocation from './BerthAllocation';
// import AddInvoice from './Invoice';
// import VesselOperatorManagement from './VesselOperatorManagement';
// import LogisticManagerManagement from './LogisticManagerManagement';
// import OperationManagerManagement from './OperationManagerManagement';

// // Import other components if needed

// const handleLogout = async () => {
//   sessionStorage.clear();
// }

// const PortDirectorDashboard = () => {
//   const [activePage, setActivePage] = React.useState('dashboard');
//   const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

//   const renderContent = () => {
//     switch (activePage) {
//       case 'dashboard':
//         return <PortDirectorDashboardOverview />;
//       // Add cases for other components
//       case 'vesselOperator':
//         return <VesselOperatorManagement />;
//       case 'berthAllocation':
//         return <BerthAllocation />;
//       case 'operationManager':
//         return <OperationManagerManagement />;
//       case 'logisticManager':
//         return <LogisticManagerManagement />;
//       case 'billing':
//         return <AddInvoice />;
//     //   case 'notifications':
//     //     return <Notifications />;
//       default:
//         return <PortDirectorDashboardOverview />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navbar */}
//       <nav className="bg-black text-white p-4 flex items-center">
//         <div className="text-2xl font-bold">Port Director</div>
//         <div className="ml-auto flex space-x-4">
//           <div className="flex items-center cursor-pointer" onClick={() => setActivePage('dashboard')}>
//             <FaClipboardList className="mr-2" /> Dashboard Overview
//           </div>
//           <div className="flex items-center cursor-pointer" onClick={() => setActivePage('berthAllocation')}>
//             <FaClipboardList className="mr-2" /> Berth Allocation
//           </div>
//           <div className="relative">
//             <div className="flex items-center cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
//               <FaUsersCog className="mr-2" /> Manage Personnel
//               <IoIosArrowDropdown className="ml-2" />
//             </div>
//             {isSubMenuOpen && (
//               <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
//                 <li onClick={() => setActivePage('vesselOperator')} className="p-2 hover:bg-gray-200 cursor-pointer">
//                   Vessel Operator Management
//                 </li>
//                 <li onClick={() => setActivePage('operationManager')} className="p-2 hover:bg-gray-200 cursor-pointer">
//                   Operation Manager Management
//                 </li>
//                 <li onClick={() => setActivePage('logisticManager')} className="p-2 hover:bg-gray-200 cursor-pointer">
//                   Logistic Manager Management
//                 </li>
//               </ul>
//             )}
//           </div>
//           <div className="flex items-center cursor-pointer" onClick={() => setActivePage('billing')}>
//             <FaMoneyBill className="mr-2" /> Billing
//           </div>
//           <div className="flex items-center cursor-pointer" onClick={() => setActivePage('notifications')}>
//             <FaBell className="mr-2" /> Notifications
//           </div>
//           <div className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleLogout}>
//             <FaBell className="mr-2" /> logout
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="p-6">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default PortDirectorDashboard;

import React, { useState } from 'react';
import { FaShip, FaUsersCog, FaMoneyBill, FaBell, FaClipboardList, FaCog } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import PortDirectorDashboardOverview from './PortDirectorDashboardOverview';
import BerthAllocation from './BerthAllocation';
import AddInvoice from './Invoice';
import VesselOperatorManagement from './VesselOperatorManagement';
import LogisticManagerManagement from './LogisticManagerManagement';
import OperationManagerManagement from './OperationManagerManagement';
import Tracking from './TrackResources';
import TrackResources from './TrackResources';

// Import other components if needed

const handleLogout = async () => {
  sessionStorage.clear();
  window.location.href = '/'; // Redirect to login page or home page
};

const PortDirectorDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <PortDirectorDashboardOverview />;
      case 'vesselOperator':
        return <VesselOperatorManagement />;
      case 'berthAllocation':
        return <BerthAllocation />;
      // case 'operationManager':
      //   return <OperationManagerManagement />;
      case 'logisticManager':
        return <LogisticManagerManagement />;
      case 'billing':
        return <AddInvoice />;
        case 'trackresources':
        return <TrackResources />;
      default:
        return <PortDirectorDashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className={`bg-black text-white p-4 shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">{sidebarOpen ? 'Port Director' : 'PD'}</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
            {sidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <div className="space-y-4 flex-1">
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('dashboard')}>
            <FaClipboardList className="mr-2" /> {sidebarOpen && 'Dashboard Overview'}
          </div>
          <div className="relative">
            <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
              <FaUsersCog className="mr-2" /> {sidebarOpen && 'Manage Personnel'}
              {sidebarOpen && <IoIosArrowDropdown className="ml-2" />}
            </div>
            {isSubMenuOpen && sidebarOpen && (
              <ul className="pl-8 space-y-2">
                <li onClick={() => setActivePage('vesselOperator')} className="hover:text-gray-300 cursor-pointer">
                  Vessel Operator Management
                </li>
                {/* <li onClick={() => setActivePage('operationManager')} className="hover:text-gray-300 cursor-pointer">
                  Operation Manager Management
                </li> */}
                <li onClick={() => setActivePage('logisticManager')} className="hover:text-gray-300 cursor-pointer">
                  Logistic Manager Management
                </li>
                
              </ul>
            )}
          </div>

          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('berthAllocation')}>
            <FaClipboardList className="mr-2" /> {sidebarOpen && 'Berth Allocation'}
          </div>
          

          {/* <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`}  onClick={() => setActivePage('tracking')}>
            <FaBell className="mr-2" /> {sidebarOpen && 'Tracking'}
          </div> */}
          <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('trackresources')}>
            <FaClipboardList className="mr-2" /> {sidebarOpen && 'Approve Resources'}
          </div>
          {/* <div className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'}`} onClick={() => setActivePage('billing')}>
            <FaMoneyBill className="mr-2" /> {sidebarOpen && 'Billing'}
          </div> */}
          <a className={`flex items-center cursor-pointer hover:text-gray-300 ${!sidebarOpen && 'justify-center'} mt-auto`} onClick={handleLogout}>
            <FaCog className="mr-2" /> {sidebarOpen && 'Logout'}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default PortDirectorDashboard;
