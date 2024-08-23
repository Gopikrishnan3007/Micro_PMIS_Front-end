
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrackResources() {
  const [resourcesIds, setResourcesIds] = useState([]);
  const [selectedResourcesId, setSelectedResourcesId] = useState(null);
  const [resourcesData, setResourcesData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    fetchResourcesIds();
  }, []);

  const fetchResourcesIds = async () => {
    try {
      const response = await axios.get('http://localhost:8006/logisticnmanager/resources/ids');
      setResourcesIds(response.data);
    } catch (error) {
      console.error('Error fetching resources IDs:', error);
    }
  };

  const fetchResourcesData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8006/logisticnmanager/resources/${id}`);
      setResourcesData(response.data);
    } catch (error) {
      console.error('Error fetching resources data:', error);
    }
  };

  const handleApprove = async () => {
    if (!resourcesData) return;

    const updatedData = {
      ...resourcesData,
      pilotTeamNumber: `${resourcesData.pilotTeamNumber} - Approved`,
      tugNumber: `${resourcesData.tugNumber} - Approved`,
      craneNumber: `${resourcesData.craneNumber} - Approved`,
      employeeTeamNumber: `${resourcesData.employeeTeamNumber} - Approved`,
    };

    try {
      await axios.put(`http://localhost:8006/logisticnmanager/resources/${selectedResourcesId}`, updatedData);
      setResourcesData(updatedData);
      alert('Resources approved and updated successfully!');
    } catch (error) {
      console.error('Error approving resources:', error);
    }
  };

  const handleReject = () => {
    setIsEditable(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8006/logisticnmanager/resources/${selectedResourcesId}`, resourcesData);
      alert('Resources updated successfully!');
      setIsEditable(false);
    } catch (error) {
      console.error('Error updating resources:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResourcesData({ ...resourcesData, [name]: value });
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <label htmlFor="resourcesId" className="block text-gray-700 font-medium mb-2">
          Select Resources ID:
        </label>
        <select
          id="resourcesId"
          className="block w-full p-2 border rounded-md"
          value={selectedResourcesId || ''}
          onChange={(e) => {
            setSelectedResourcesId(e.target.value);
            fetchResourcesData(e.target.value);
          }}
        >
          <option value="" disabled>Select Resources ID</option>
          {resourcesIds.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>

      {resourcesData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resources Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Pilot Team Number:</label>
              <input
                type="text"
                name="pilotTeamNumber"
                value={resourcesData.pilotTeamNumber}
                onChange={handleInputChange}
                disabled={!isEditable}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Tug Number:</label>
              <input
                type="text"
                name="tugNumber"
                value={resourcesData.tugNumber}
                onChange={handleInputChange}
                disabled={!isEditable}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Crane Number:</label>
              <input
                type="text"
                name="craneNumber"
                value={resourcesData.craneNumber}
                onChange={handleInputChange}
                disabled={!isEditable}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Employee Team Number:</label>
              <input
                type="text"
                name="employeeTeamNumber"
                value={resourcesData.employeeTeamNumber}
                onChange={handleInputChange}
                disabled={!isEditable}
                className="w-full p-2 border rounded-md"
              />
            </div>
            
          </div>

          <div className="mt-6 flex justify-between">
            {!isEditable ? (
              <>
                <button
                  onClick={handleApprove}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Reject
                </button>
              </>
            ) : (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            )}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto transform transition duration-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{resourcesData.ship.shipName}</h2>
              <div className="grid grid-cols-2 gap-4">
              
                <div className="text-gray-600 font-medium">IMO Number:</div>
                <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.imoNumber}</div>

                <div className="text-gray-600 font-medium">MMSI Number:</div>
                <div className="text-gray-800">{resourcesData.ship.mmsiNumber}</div>

                <div className="text-gray-600 font-medium">Type of Ship:</div>
                <div className="text-gray-800">{resourcesData.ship.typeOfShip}</div>

                <div className="text-gray-600 font-medium">Service Type:</div>
                <div className="text-gray-800">{resourcesData.ship.serviceType}</div>

                <div className="text-gray-600 font-medium">Previous Port:</div>
                <div className="text-gray-800">{resourcesData.ship.previousPort}</div>

                <div className="text-gray-600 font-medium">Arrival Date/Time:</div>
                <div className="text-gray-800">{new Date(resourcesData.ship.arrivalDateTime).toLocaleString()}</div>

                <div className="text-gray-600 font-medium">Berth:</div>
                <div className="text-gray-800">{resourcesData.ship.berth}</div>
              </div>
            </div>
        </div>
        
      )}




    </div>
  );
}

export default TrackResources;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TrackResources() {
//   const [resourcesIds, setResourcesIds] = useState([]);
//   const [selectedResourcesId, setSelectedResourcesId] = useState(null);
//   const [resourcesData, setResourcesData] = useState(null);
//   const [isEditable, setIsEditable] = useState(false);

//   useEffect(() => {
//     fetchResourcesIds();
//   }, []);

//   const fetchResourcesIds = async () => {
//     try {
//       const response = await axios.get('http://localhost:8006/logisticnmanager/resources/ids');
//       setResourcesIds(response.data);
//     } catch (error) {
//       console.error('Error fetching resources IDs:', error);
//     }
//   };

//   const fetchResourcesData = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8006/logisticnmanager/resources/${id}`);
//       setResourcesData(response.data);
//     } catch (error) {
//       console.error('Error fetching resources data:', error);
//     }
//   };

//   const handleApprove = async () => {
//     if (!resourcesData) return;

//     const updatedData = {
//       ...resourcesData,
//       pilotTeamNumber: `${resourcesData.pilotTeamNumber} - Approved`,
//       tugNumber: `${resourcesData.tugNumber} - Approved`,
//       craneNumber: `${resourcesData.craneNumber} - Approved`,
//       employeeTeamNumber: `${resourcesData.employeeTeamNumber} - Approved`,
//     };

//     try {
//       await axios.put(`http://localhost:8006/logisticnmanager/resources/${selectedResourcesId}`, updatedData);
//       setResourcesData(updatedData);
//       alert('Resources approved and updated successfully!');
//     } catch (error) {
//       console.error('Error approving resources:', error);
//     }
//   };

//   const handleReject = () => {
//     setIsEditable(true);
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:8006/logisticnmanager/resources/${selectedResourcesId}`, resourcesData);
//       alert('Resources updated successfully!');
//       setIsEditable(false);
//     } catch (error) {
//       console.error('Error updating resources:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourcesData({ ...resourcesData, [name]: value });
//   };

//   const pilotTeamOptions = [
//     "PT-101 - Alpha Pilots",
//     "PT-102 - Bravo Pilots",
//     "PT-103 - Delta Pilots",
//     "PT-104 - Eagle Pilots",
//     "PT-105 - Falcon Pilots",
//     "PT-106 - Griffin Pilots",
//     "PT-107 - Hawk Pilots",
//     "PT-108 - Kestrel Pilots",
//     "PT-109 - Lionheart Pilots",
//     "PT-110 - Mistral Pilots",
//     "PT-111 - Nimbus Pilots",
//     "PT-112 - Orion Pilots",
//     "PT-113 - Phoenix Pilots",
//     "PT-114 - Quasar Pilots",
//     "PT-115 - Raptor Pilots",
//     "PT-116 - Sirocco Pilots",
//     "PT-117 - Thunder Pilots",
//     "PT-118 - Vortex Pilots",
//     "PT-119 - Windrider Pilots",
//     "PT-120 - Zephyr Pilots"
//   ];

//   const tugNumberOptions = Array.from({ length: 20 }, (_, i) => `Tug ${i + 1}`);

//   const craneNumberOptions = Array.from({ length: 20 }, (_, i) => `Crane ${i + 1}`);

//   const employeeTeamOptions = [
//     "ET-401 - Vanguard Team",
//     "ET-402 - Sentinel Team",
//     "ET-403 - Guardian Team",
//     "ET-404 - Protector Team",
//     "ET-405 - Defender Team",
//     "ET-406 - Shield Team",
//     "ET-407 - Bastion Team",
//     "ET-408 - Fortitude Team",
//     "ET-409 - Ironclad Team",
//     "ET-410 - Bulwark Team",
//     "ET-411 - Citadel Team",
//     "ET-412 - Rampart Team",
//     "ET-413 - Aegis Team",
//     "ET-414 - Valor Team",
//     "ET-415 - Invictus Team",
//     "ET-416 - Horizon Team",
//     "ET-417 - Legacy Team",
//     "ET-418 - Ascendant Team",
//     "ET-419 - Pinnacle Team",
//     "ET-420 - Zenith Team"
//   ];

//   return (
//     <div className="p-8">
//       <div className="mb-4">
//         <label htmlFor="resourcesId" className="block text-gray-700 font-medium mb-2">
//           Select Resources ID:
//         </label>
//         <select
//           id="resourcesId"
//           className="block w-full p-2 border rounded-md"
//           value={selectedResourcesId || ''}
//           onChange={(e) => {
//             setSelectedResourcesId(e.target.value);
//             fetchResourcesData(e.target.value);
//           }}
//         >
//           <option value="" disabled>Select Resources ID</option>
//           {resourcesIds.map((id) => (
//             <option key={id} value={id}>
//               {id}
//             </option>
//           ))}
//         </select>
//       </div>

//       {resourcesData && (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Resources Details</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">Pilot Team Number:</label>
//               <select
//                 name="pilotTeamNumber"
//                 value={resourcesData.pilotTeamNumber}
//                 onChange={handleInputChange}
//                 disabled={!isEditable}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="" disabled>Select Pilot Team</option>
//                 {pilotTeamOptions.map(option => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700">Tug Number:</label>
//               <select
//                 name="tugNumber"
//                 value={resourcesData.tugNumber}
//                 onChange={handleInputChange}
//                 disabled={!isEditable}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="" disabled>Select Tug Number</option>
//                 {tugNumberOptions.map(option => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700">Crane Number:</label>
//               <select
//                 name="craneNumber"
//                 value={resourcesData.craneNumber}
//                 onChange={handleInputChange}
//                 disabled={!isEditable}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="" disabled>Select Crane Number</option>
//                 {craneNumberOptions.map(option => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700">Employee Team Number:</label>
//               <select
//                 name="employeeTeamNumber"
//                 value={resourcesData.employeeTeamNumber}
//                 onChange={handleInputChange}
//                 disabled={!isEditable}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="" disabled>Select Employee Team</option>
//                 {employeeTeamOptions.map(option => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="mt-6 flex justify-between">
//             {!isEditable ? (
//               <>
//                 <button
//                   onClick={handleApprove}
//                   className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={handleReject}
//                   className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
//                 >
//                   Change
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//               >
//                 Save Changes
//               </button>
//             )}
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto transform transition duration-500">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">{resourcesData.ship.shipName}</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-gray-600 font-medium">IMO Number:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.imoNumber}</div>
//               <div className="text-gray-600 font-medium">MMSI Number:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.mmsiNumber}</div>
//               <div className="text-gray-600 font-medium">Type of Ship:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.typeOfShip}</div>
//               <div className="text-gray-600 font-medium">Previous Port:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.previousPort}</div>
//               <div className="text-gray-600 font-medium">Arrival Date/Time:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.arrivalDateTime}</div>
//               <div className="text-gray-600 font-medium">Request:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.request}</div>
//               <div className="text-gray-600 font-medium">Berth:</div>
//               <div className="text-gray-800">{resourcesData.ship && resourcesData.ship.berth}</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TrackResources;
