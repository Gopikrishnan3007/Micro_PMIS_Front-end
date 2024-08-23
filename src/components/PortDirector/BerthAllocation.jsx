

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function BerthAllocation() {
//   const [shipRecords, setShipRecords] = useState([]);
//   const [selectedShip, setSelectedShip] = useState(null);
//   const [selectedAllocation, setSelectedAllocation] = useState({
//     berth: "Not-Allocated",
//     shipId: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadShipData();
//   }, []);

  // const handleDeleteClick = async (ship) => {
  //       try {
  //         ship.berth = "Not-Allocated";
  //         await axios.put(`http://localhost:8006/portDirector/ship/${ship.shipId}`, ship);
  //         alert("Berth status updated to 'Not-Allocated'");
  //         loadShipData();
  //       } catch (error) {
  //         console.error("Error updating berth status", error);
  //       }
  //     };

//   const loadShipData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
//       const shipIds = response.data;

//       const shipDataPromises = shipIds.map((id) =>
//         axios.get(`http://localhost:8006/portDirector/ship/${id}`)
//       );
//       const shipDataResponses = await Promise.all(shipDataPromises);

//       const ships = shipDataResponses.map((response) => response.data);
//       setShipRecords(ships);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "shipId") {
//       const selectedShipData = shipRecords.find((ship) => ship.shipId === parseInt(value));
//       if (selectedShipData) {
//         setSelectedAllocation({
//           ...selectedAllocation,
//           shipId: value,
//           berth: selectedShipData.berth || "Not-Allocated",
//         });
//         setSelectedShip(selectedShipData);
//       }
//     } else {
//       setSelectedAllocation({ ...selectedAllocation, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const ship = shipRecords.find(
//         (ship) => ship.shipId === parseInt(selectedAllocation.shipId)
//       );
//       if (ship) {
//         ship.berth = selectedAllocation.berth;
//         await axios.put(`http://localhost:8006/portDirector/ship/${ship.shipId}`, ship);
//         alert("Berth updated successfully!");
//         navigate("/portDirectorDashboard");
//       }
//     } catch (error) {
//       console.error("Error updating berth", error);
//     }
//   };

//   const handleAcceptClick = async () => {
//     if (selectedShip) {
//       try {
//         selectedShip.request = "Accepted";
//         await axios.put(`http://localhost:8006/portDirector/ship/${selectedShip.shipId}`, selectedShip);
//         alert("Request accepted!");
//         loadShipData(); // Refresh the ship data after update
//       } catch (error) {
//         console.error("Error accepting request", error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Berth Allocation</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipId">
//             Ship:
//           </label>
//           <select
//             id="shipId"
//             name="shipId"
//             value={selectedAllocation.shipId}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="">Select Ship</option>
//             {shipRecords.map((record) => (
//               <option key={record.shipId} value={record.shipId}>
//                 {record.shipId} - {record.typeOfShip}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedShip && (
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">Ship Details:</h3>
//             <p><strong>IMO Number:</strong> {selectedShip.imoNumber}</p>
//             <p><strong>MMSI Number:</strong> {selectedShip.mmsiNumber}</p>
//             <p><strong>Type of Ship:</strong> {selectedShip.typeOfShip}</p>
//             <p><strong>Previous Port:</strong> {selectedShip.previousPort}</p>
//             <p><strong>Arrival Date/Time:</strong> {selectedShip.arrivalDateTime}</p>
//             <p><strong>Request Status:</strong> {selectedShip.request}</p>
//             {selectedShip.request !== "Accepted" && (
//               <button
//                 type="button"
//                 onClick={handleAcceptClick}
//                 className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
//               >
//                 Accept
//               </button>
//             )}
//           </div>
//         )}

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="berth">
//             Berth:
//           </label>
//           <select
//             id="berth"
//             name="berth"
//             value={selectedAllocation.berth}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             disabled={selectedShip && selectedShip.request !== "Accepted"}
//           >
//             <option value="Not-Allocated">Not-Allocated</option>
//             {[...Array(9).keys()].map((i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedShip && selectedShip.request === "Accepted" && (
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Allocate Berth
//           </button>
//         )}
//       </form>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Allocated Berths</h3>
//         <table className="min-w-full mt-4">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Ship ID</th>
//               <th className="px-4 py-2">Berth</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {shipRecords.map((ship) => (
//               <tr key={ship.shipId}>
//                 <td className="border px-4 py-2">{ship.shipId}</td>
//                 <td className="border px-4 py-2">{ship.berth || "Not-Allocated"}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => handleDeleteClick(ship)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default BerthAllocation;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BerthAllocation() {
  const [shipRecords, setShipRecords] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [selectedAllocation, setSelectedAllocation] = useState({
    berth: "Not-Allocated",
    shipId: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadShipData();
  }, []);

  const loadShipData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
      const shipIds = response.data;

      const shipDataPromises = shipIds.map((id) =>
        axios.get(`http://localhost:8006/portDirector/ship/${id}`)
      );
      const shipDataResponses = await Promise.all(shipDataPromises);

      const ships = shipDataResponses.map((response) => response.data);
      setShipRecords(ships);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "shipId") {
      const selectedShipData = shipRecords.find((ship) => ship.shipId === parseInt(value));
      if (selectedShipData) {
        setSelectedAllocation({
          ...selectedAllocation,
          shipId: value,
          berth: selectedShipData.berth || "Not-Allocated",
        });
        setSelectedShip(selectedShipData);
      }
    } else {
      setSelectedAllocation({ ...selectedAllocation, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ship = shipRecords.find(
        (ship) => ship.shipId === parseInt(selectedAllocation.shipId)
      );
      if (ship) {
        ship.berth = selectedAllocation.berth;
        await axios.put(`http://localhost:8006/portDirector/ship/${ship.shipId}`, ship);
        alert("Berth updated successfully!");
        navigate("/portDirectorDashboard");
      }
    } catch (error) {
      console.error("Error updating berth", error);
    }
  };

  const handleAcceptClick = async () => {
    if (selectedShip) {
      try {
        selectedShip.request = "Accepted";
        await axios.put(`http://localhost:8006/portDirector/ship/${selectedShip.shipId}`, selectedShip);
        alert("Request accepted!");
        loadShipData(); // Refresh the ship data after update
      } catch (error) {
        console.error("Error accepting request", error);
      }
    }
  };

  const handleDeleteClick = async (ship) => {
    try {
      ship.berth = "Not-Allocated";
      await axios.put(`http://localhost:8006/portDirector/ship/${ship.shipId}`, ship);
      alert("Berth status updated to 'Not-Allocated'");
      loadShipData();
    } catch (error) {
      console.error("Error updating berth status", error);
    }
  };

  const handleRejectClick = async () => {
    if (selectedShip) {
      try {
        selectedShip.request = "Rejected";
        await axios.put(`http://localhost:8006/portDirector/ship/${selectedShip.shipId}`, selectedShip);
        alert("Request rejected!");
        loadShipData(); // Refresh the ship data after update
      } catch (error) {
        console.error("Error rejecting request", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Berth Allocation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipId">
            Ship:
          </label>
          <select
            id="shipId"
            name="shipId"
            value={selectedAllocation.shipId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Ship</option>
            {shipRecords.map((record) => (
              <option key={record.shipId} value={record.shipId}>
                {record.shipName} - {record.typeOfShip}
              </option>
            ))}
          </select>
        </div>

        {selectedShip && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Ship Details:</h3>
            <p><strong>Ship Name:</strong> {selectedShip.shipName}</p>
            <p><strong>IMO Number:</strong> {selectedShip.imoNumber}</p>
            <p><strong>MMSI Number:</strong> {selectedShip.mmsiNumber}</p>
            <p><strong>Type of Ship:</strong> {selectedShip.typeOfShip}</p>
            <p><strong>Service Type:</strong> {selectedShip.serviceType}</p>
            <p><strong>Previous Port:</strong> {selectedShip.previousPort}</p>
            <p><strong>Arrival Date/Time:</strong> {selectedShip.arrivalDateTime}</p>
            <p><strong>Request Status:</strong> {selectedShip.request}</p>
            
            {selectedShip.request !== "Accepted" && (
              <div>
                <button
                  type="button"
                  onClick={handleAcceptClick}
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={handleRejectClick}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 ml-2"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="berth">
            Berth:
          </label>
          <select
            id="berth"
            name="berth"
            value={selectedAllocation.berth}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Not-Allocated">Not-Allocated</option>
            {[...Array(9).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Allocate Berth
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Allocated Berths</h3>
        <table className="min-w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Ship ID</th>
              <th className="px-4 py-2">Berth</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipRecords.map((ship) => (
              <tr key={ship.shipId}>
                <td className="border px-4 py-2">{ship.shipId}</td>
                <td className="border px-4 py-2">{ship.berth || "Not-Allocated"}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteClick(ship)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BerthAllocation;
