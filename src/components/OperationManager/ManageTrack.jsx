
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ManageTrack() {
//   const [shipRecords, setShipRecords] = useState([]);
//   const [selectedShipId, setSelectedShipId] = useState("");
//   const [trackData, setTrackData] = useState({
//     shipRequest: "Pending",
//     berthBooking: "Pending",
//     preArrivalConfirmation: "Pending",
//     pilotage: "Pending",
//     cargo: "Pending",
//     documentation: "Pending",
//     billing: "Pending",
//     portClearance: "Pending",
//     pilotageOutbound: "Pending",
//     ship: { shipId: "" },
//   });
//   const [tracks, setTracks] = useState([]);
//   const [isUpdating, setIsUpdating] = useState(false);

//   useEffect(() => {
//     loadShipData();
//     loadTrackData();
//   }, []);

//   const loadShipData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
//       setShipRecords(response.data);
//     } catch (error) {
//       console.error("Error loading ship data:", error);
//     }
//   };

//   const loadTrackData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/operationmanager/track/all");
//       setTracks(response.data);
//     } catch (error) {
//       console.error("Error loading track data:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTrackData({ ...trackData, [name]: value });
//   };

//   const handleShipChange = (e) => {
//     const { value } = e.target;
//     setSelectedShipId(value);
//     setTrackData((prevData) => ({
//       ...prevData,
//       ship: { shipId: value },
//     }));
//   };

//   const handleComplete = (field) => {
//     setTrackData((prevData) => ({
//       ...prevData,
//       [field]: "Completed",
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isUpdating) {
//       try {
//         await axios.put(`http://localhost:8006/operationmanager/track/${trackData.trackId}`, trackData);
//         alert("Track updated successfully!");
//       } catch (error) {
//         console.error("Error updating track:", error);
//       }
//     } else {
//       try {
//         await axios.post("http://localhost:8006/operationmanager/track", trackData);
//         alert("Track added successfully!");
//       } catch (error) {
//         console.error("Error adding track:", error);
//       }
//     }
//     loadTrackData();
//     resetForm();
//   };

//   const resetForm = () => {
//     setTrackData({
//       shipRequest: "Pending",
//       berthBooking: "Pending",
//       preArrivalConfirmation: "Pending",
//       pilotage: "Pending",
//       cargo: "Pending",
//       documentation: "Pending",
//       billing: "Pending",
//       portClearance: "Pending",
//       pilotageOutbound: "Pending",
//       ship: { shipId: "" },
//     });
//     setSelectedShipId("");
//     setIsUpdating(false);
//   };

//   const handleEdit = (track) => {
//     setTrackData(track);
//     setSelectedShipId(track.ship && track.ship.shipId);
//     setIsUpdating(true);
//   };

//   const handleDelete = async (trackId) => {
//     try {
//       await axios.delete(`http://localhost:8006/operationmanager/track/${trackId}`);
//       alert("Track deleted successfully!");
//       loadTrackData();
//     } catch (error) {
//       console.error("Error deleting track:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">{isUpdating ? "Update Track" : "Add Track"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipId">
//             Ship:
//           </label>
//           <select
//             id="shipId"
//             name="shipId"
//             value={selectedShipId}
//             onChange={handleShipChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="">Select Ship</option>
//             {shipRecords.map((ship) => (
//               <option key={ship} value={ship}>
//                 {ship}
//               </option>
//             ))}
//           </select>
//         </div>

//         {["shipRequest", "berthBooking", "preArrivalConfirmation", "pilotage", "cargo", "documentation", "billing", "portClearance", "pilotageOutbound"].map((field, index) => (
//           <div className="mb-4 flex items-center" key={index}>
//             <div className="flex-grow">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
//                 {field.split(/(?=[A-Z])/).join(" ").replace(/^./, str => str.toUpperCase())}:
//               </label>
//               <select
//                 id={field}
//                 name={field}
//                 value={trackData[field]}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Completed">Completed</option>
//               </select>
//             </div>
//             <button
//               type="button"
//               onClick={() => handleComplete(field)}
//               className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Complete
//             </button>
//           </div>
//         ))}

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isUpdating ? "bg-yellow-500" : ""}`}
//           >
//             {isUpdating ? "Update" : "Add"}
//           </button>
//           {isUpdating && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Track Details</h2>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Track ID</th>
//               <th className="py-2 px-4 border-b">Ship ID</th>
//               <th className="py-2 px-4 border-b">Ship Request</th>
//               <th className="py-2 px-4 border-b">Berth Booking</th>
//               <th className="py-2 px-4 border-b">Pre Arrival Confirmation</th>
//               <th className="py-2 px-4 border-b">Pilotage</th>
//               <th className="py-2 px-4 border-b">Cargo</th>
//               <th className="py-2 px-4 border-b">Documentation</th>
//               <th className="py-2 px-4 border-b">Billing</th>
//               <th className="py-2 px-4 border-b">Port Clearance</th>
//               <th className="py-2 px-4 border-b">Pilotage Outbound</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tracks.map((track) => (
//               <tr key={track.trackId}>
//                 <td className="py-2 px-4 border-b">{track.trackId}</td>
//                 <td className="py-2 px-4 border-b">{track.ship && track.ship.shipId}</td>
//                 <td className="py-2 px-4 border-b">{track.shipRequest}</td>
//                 <td className="py-2 px-4 border-b">{track.berthBooking}</td>
//                 <td className="py-2 px-4 border-b">{track.preArrivalConfirmation}</td>
//                 <td className="py-2 px-4 border-b">{track.pilotage}</td>
//                 <td className="py-2 px-4 border-b">{track.cargo}</td>
//                 <td className="py-2 px-4 border-b">{track.documentation}</td>
//                 <td className="py-2 px-4 border-b">{track.billing}</td>
//                 <td className="py-2 px-4 border-b">{track.portClearance}</td>
//                 <td className="py-2 px-4 border-b">{track.pilotageOutbound}</td>
//                 <td className="py-2 px-4 border-b flex items-center">
//                   <button
//                     onClick={() => handleEdit(track)}
//                     className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:shadow-outline"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(track.trackId)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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

// export default ManageTrack;


import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageTrack() {
  const [shipRecords, setShipRecords] = useState([]);
  const [selectedShipId, setSelectedShipId] = useState("");
  const [trackData, setTrackData] = useState({
    shipRequest: "Pending",
    berthBooking: "Pending",
    preArrivalConfirmation: "Pending",
    pilotage: "Pending",
    cargo: "Pending",
    documentation: "Pending",
    billing: "Pending",
    portClearance: "Pending",
    pilotageOutbound: "Pending",
    ship: { shipId: "" },
  });
  const [tracks, setTracks] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadShipData();
    loadTrackData();
  }, []);

  const loadShipData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
      setShipRecords(response.data);
    } catch (error) {
      console.error("Error loading ship data:", error);
    }
  };

  const loadTrackData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/operationmanager/track/all");
      setTracks(response.data);
    } catch (error) {
      console.error("Error loading track data:", error);
    }
  };

  const handleShipChange = (e) => {
    const { value } = e.target;
    setSelectedShipId(value);
    setTrackData((prevData) => ({
      ...prevData,
      ship: { shipId: value },
    }));
  };

  const handleComplete = (field) => {
    setTrackData((prevData) => ({
      ...prevData,
      [field]: "Completed",
    }));
  };

  const isButtonDisabled = (field) => {
    const fields = [
      "shipRequest",
      "berthBooking",
      "preArrivalConfirmation",
      "pilotage",
      "cargo",
      "documentation",
      "billing",
      "portClearance",
      "pilotageOutbound",
    ];

    const index = fields.indexOf(field);
    if (index === 0) return false; // The first button is always enabled
    return trackData[fields[index - 1]] !== "Completed"; // Disable if the previous field is not completed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      try {
        await axios.put(`http://localhost:8006/operationmanager/track/${trackData.trackId}`, trackData);
        alert("Track updated successfully!");
      } catch (error) {
        console.error("Error updating track:", error);
      }
    } else {
      try {
        await axios.post("http://localhost:8006/operationmanager/track", trackData);
        alert("Track added successfully!");
      } catch (error) {
        console.error("Error adding track:", error);
      }
    }
    loadTrackData();
    resetForm();
  };

  const resetForm = () => {
    setTrackData({
      shipRequest: "Pending",
      berthBooking: "Pending",
      preArrivalConfirmation: "Pending",
      pilotage: "Pending",
      cargo: "Pending",
      documentation: "Pending",
      billing: "Pending",
      portClearance: "Pending",
      pilotageOutbound: "Pending",
      ship: { shipId: "" },
    });
    setSelectedShipId("");
    setIsUpdating(false);
  };

  const handleEdit = (track) => {
    setTrackData(track);
    setSelectedShipId(track.ship && track.ship.shipId);
    setIsUpdating(true);
  };

  const handleDelete = async (trackId) => {
    try {
      await axios.delete(`http://localhost:8006/operationmanager/track/${trackId}`);
      alert("Track deleted successfully!");
      loadTrackData();
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">{isUpdating ? "Update Track" : "Add Track"}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipId">
            Ship:
          </label>
          <select
            id="shipId"
            name="shipId"
            value={selectedShipId}
            onChange={handleShipChange}
            className="block w-full px-3 py-2 text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Ship</option>
            {shipRecords.map((ship) => (
              <option key={ship} value={ship}>
                {ship}
              </option>
            ))}
          </select>
        </div>

        {[
          "shipRequest",
          "berthBooking",
          "preArrivalConfirmation",
          "pilotage",
          "cargo",
          "documentation",
          "billing",
          "portClearance",
          "pilotageOutbound",
        ].map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.split(/(?=[A-Z])/).join(" ").replace(/^./, (str) => str.toUpperCase())}:
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleComplete(field)}
                disabled={isButtonDisabled(field)}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isButtonDisabled(field) ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {trackData[field] === "Completed" ? "Completed" : "Mark as Completed"}
              </button>
              <span className="ml-4">
                {trackData[field] === "Completed" ? (
                  <span className="text-green-500">✔</span>
                ) : (
                  <span className="text-red-500">✘</span>
                )}
              </span>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isUpdating ? "bg-yellow-500" : ""
            }`}
          >
            {isUpdating ? "Update" : "Add"}
          </button>
          {isUpdating && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Track Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Track ID</th>
                <th className="py-2 px-4 border-b">Ship ID</th>
                <th className="py-2 px-4 border-b">Ship Request</th>
                <th className="py-2 px-4 border-b">Berth Booking</th>
                <th className="py-2 px-4 border-b">Pre Arrival Confirmation</th>
                <th className="py-2 px-4 border-b">Pilotage</th>
                <th className="py-2 px-4 border-b">Cargo</th>
                <th className="py-2 px-4 border-b">Documentation</th>
                <th className="py-2 px-4 border-b">Billing</th>
                <th className="py-2 px-4 border-b">Port Clearance</th>
                <th className="py-2 px-4 border-b">Pilotage Outbound</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr key={track.trackId}>
                  <td className="py-2 px-4 border-b">{track.trackId}</td>
                  <td className="py-2 px-4 border-b">{track.ship && track.ship.shipId}</td>
                  <td className="py-2 px-4 border-b">{track.shipRequest}</td>
                  <td className="py-2 px-4 border-b">{track.berthBooking}</td>
                  <td className="py-2 px-4 border-b">{track.preArrivalConfirmation}</td>
                  <td className="py-2 px-4 border-b">{track.pilotage}</td>
                  <td className="py-2 px-4 border-b">{track.cargo}</td>
                  <td className="py-2 px-4 border-b">{track.documentation}</td>
                  <td className="py-2 px-4 border-b">{track.billing}</td>
                  <td className="py-2 px-4 border-b">{track.portClearance}</td>
                  <td className="py-2 px-4 border-b">{track.pilotageOutbound}</td>
                  <td className="py-2 px-4 border-b space-x-2">
                    <button
                      onClick={() => handleEdit(track)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(track.trackId)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
    </div>
  );
}

export default ManageTrack;
