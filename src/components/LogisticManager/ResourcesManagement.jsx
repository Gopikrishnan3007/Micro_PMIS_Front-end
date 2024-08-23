


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from 'react-modal'; // Import react-modal or create your own custom modal

// // Ensure you call Modal.setAppElement to avoid accessibility issues
// Modal.setAppElement('#root');

// function ResourcesManagement() {
//   const [shipRecords, setShipRecords] = useState([]);
//   const [selectedShipId, setSelectedShipId] = useState("");
//   const [resourceData, setResourceData] = useState({
//     pilotTeamNumber: "",
//     tugNumber: "",
//     craneNumber: "",
//     employeeTeamNumber: "",
//     ship: {
//       shipId: "",
//     },
//   });
//   const [resourcesList, setResourcesList] = useState([]);
//   const [usedNumbers, setUsedNumbers] = useState({
//     pilotTeamNumbers: [],
//     tugNumbers: [],
//     craneNumbers: [],
//     employeeTeamNumbers: [],
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editResourceId, setEditResourceId] = useState(null);
//   const [modalContent, setModalContent] = useState({ message: "", type: "" });
//   const [showModal, setShowModal] = useState(false);
  
//   // State for validation errors
//   const [errors, setErrors] = useState({
//     pilotTeamNumber: "",
//     tugNumber: "",
//     craneNumber: "",
//     employeeTeamNumber: "",
//     shipId: ""
//   });

//   useEffect(() => {
//     loadShipData();
//     loadResourcesData();
//   }, []);

//   useEffect(() => {
//     if (selectedShipId) {
//       setResourceData((prevData) => ({
//         ...prevData,
//         ship: { shipId: selectedShipId },
//       }));
//     }
//   }, [selectedShipId]);

//   const loadShipData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
//       setShipRecords(response.data);
//     } catch (error) {
//       console.error("Error loading ship data:", error);
//     }
//   };

//   const loadResourcesData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/logisticnmanager/resources/all");
//       setResourcesList(response.data);
//       setUsedNumbers({
//         pilotTeamNumbers: response.data.map(r => r.pilotTeamNumber),
//         tugNumbers: response.data.map(r => r.tugNumber),
//         craneNumbers: response.data.map(r => r.craneNumber),
//         employeeTeamNumbers: response.data.map(r => r.employeeTeamNumber),
//       });
//     } catch (error) {
//       console.error("Error loading resources data:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourceData({ ...resourceData, [name]: value });
//     // Clear error message on input change
//     setErrors({ ...errors, [name]: "" });
//   };

//   const handleShipChange = (e) => {
//     const { value } = e.target;
//     setSelectedShipId(value);
//     setErrors({ ...errors, shipId: "" });
//   };

//   const validateForm = () => {
//     let hasError = false;
//     let newErrors = {};

//     const { pilotTeamNumber, tugNumber, craneNumber, employeeTeamNumber } = resourceData;

//     if (!pilotTeamNumber) {
//       newErrors.pilotTeamNumber = "Pilot Team Number is required.";
//       hasError = true;
//     }
//     if (!tugNumber) {
//       newErrors.tugNumber = "Tug Number is required.";
//       hasError = true;
//     }
//     if (!craneNumber) {
//       newErrors.craneNumber = "Crane Number is required.";
//       hasError = true;
//     }
//     if (!employeeTeamNumber) {
//       newErrors.employeeTeamNumber = "Employee Team Number is required.";
//       hasError = true;
//     }
//     if (!selectedShipId) {
//       newErrors.shipId = "Ship is required.";
//       hasError = true;
//     }
    

//     setErrors(newErrors);
//     return !hasError;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:8006/logisticnmanager/resources/${editResourceId}`, resourceData);
//         setModalContent({
//           message: "Resource updated successfully!",
//           type: "success",
//         });
//         setIsEditing(false);
//         setEditResourceId(null);
//       } else {
//         await axios.post("http://localhost:8006/logisticnmanager/resources", resourceData);
//         setModalContent({
//           message: "Resource added successfully!",
//           type: "success",
//         });
//       }
//       resetForm();
//       loadResourcesData();
//     } catch (error) {
//       console.error("Error saving resource:", error);
//       setModalContent({
//         message: "An error occurred while saving the resource.",
//         type: "error",
//       });
//     }
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8006/logisticnmanager/resources/${id}`);
//       setModalContent({
//         message: "Resource deleted successfully!",
//         type: "success",
//       });
//       loadResourcesData();
//     } catch (error) {
//       console.error("Error deleting resource:", error);
//       setModalContent({
//         message: "An error occurred while deleting the resource.",
//         type: "error",
//       });
//     }
//     setShowModal(true);
//   };

//   const handleEdit = (resource) => {
//     setResourceData({
//       pilotTeamNumber: resource.pilotTeamNumber,
//       tugNumber: resource.tugNumber,
//       craneNumber: resource.craneNumber,
//       employeeTeamNumber: resource.employeeTeamNumber,
//       ship: { shipId: resource.ship.shipId },
//     });
//     setSelectedShipId(resource.ship.shipId);
//     setIsEditing(true);
//     setEditResourceId(resource.resourcesId);
//   };

//   const handleCancel = () => {
//     resetForm();
//   };

//   const resetForm = () => {
//     setIsEditing(false);
//     setEditResourceId(null);
//     setResourceData({
//       pilotTeamNumber: "",
//       tugNumber: "",
//       craneNumber: "",
//       employeeTeamNumber: "",
//       ship: { shipId: "" },
//     });
//     setSelectedShipId("");
//     setErrors({
//       pilotTeamNumber: "",
//       tugNumber: "",
//       craneNumber: "",
//       employeeTeamNumber: "",
//       shipId: ""
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Allocate Resources</h2>

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
//           {errors.shipId && <p className="text-red-500 text-xs italic">{errors.shipId}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pilotTeamNumber">
//             Pilot Team Number:
//           </label>
//           <input
//             type="text"
//             id="pilotTeamNumber"
//             name="pilotTeamNumber"
//             value={resourceData.pilotTeamNumber}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.pilotTeamNumber && <p className="text-red-500 text-xs italic">{errors.pilotTeamNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tugNumber">
//             Tug Number:
//           </label>
//           <input
//             type="text"
//             id="tugNumber"
//             name="tugNumber"
//             value={resourceData.tugNumber}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.tugNumber && <p className="text-red-500 text-xs italic">{errors.tugNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="craneNumber">
//             Crane Number:
//           </label>
//           <input
//             type="text"
//             id="craneNumber"
//             name="craneNumber"
//             value={resourceData.craneNumber}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.craneNumber && <p className="text-red-500 text-xs italic">{errors.craneNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeTeamNumber">
//             Employee Team Number:
//           </label>
//           <input
//             type="text"
//             id="employeeTeamNumber"
//             name="employeeTeamNumber"
//             value={resourceData.employeeTeamNumber}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.employeeTeamNumber && <p className="text-red-500 text-xs italic">{errors.employeeTeamNumber}</p>}
//         </div>

//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             {isEditing ? "Update Resource" : "Add Resource"}
//           </button>
//           {isEditing && (
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       <h2 className="text-xl font-semibold mb-4 mt-6">Resources List</h2>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pilot Team Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tug Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crane Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Team Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ship ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {resourcesList.map((resource) => (
//             <tr key={resource.resourcesId}>
//               <td className="px-6 py-4 whitespace-nowrap">{resource.pilotTeamNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{resource.tugNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{resource.craneNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{resource.employeeTeamNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{resource.ship.shipId}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button
//                   onClick={() => handleEdit(resource)}
//                   className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(resource.resourcesId)}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal Popup */}
//       <Modal
//         isOpen={showModal}
//         onRequestClose={() => setShowModal(false)}
//         contentLabel="Notification"
//         className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50"
//         overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
//       >
//         <div className={`bg-white p-6 rounded shadow-lg ${modalContent.type === "success" ? "border-green-500 border-l-4" : "border-red-500 border-l-4"}`}>
//           <h2 className="text-lg font-semibold">{modalContent.type === "success" ? "Success!" : "Error!"}</h2>
//           <p className="mt-2">{modalContent.message}</p>
//           <button
//             onClick={() => setShowModal(false)}
//             className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default ResourcesManagement;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal'; // Import react-modal or create your own custom modal

// Ensure you call Modal.setAppElement to avoid accessibility issues
Modal.setAppElement('#root');

function ResourcesManagement() {
  const [shipRecords, setShipRecords] = useState([]);
  const [selectedShipId, setSelectedShipId] = useState("");
  const [resourceData, setResourceData] = useState({
    pilotTeamNumber: "",
    tugNumber: "",
    craneNumber: "",
    employeeTeamNumber: "",
    ship: {
      shipId: "",
    },
  });
  const [resourcesList, setResourcesList] = useState([]);
  const [usedNumbers, setUsedNumbers] = useState({
    pilotTeamNumbers: [],
    tugNumbers: [],
    craneNumbers: [],
    employeeTeamNumbers: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editResourceId, setEditResourceId] = useState(null);
  const [modalContent, setModalContent] = useState({ message: "", type: "" });
  const [showModal, setShowModal] = useState(false);
  
  // State for validation errors
  const [errors, setErrors] = useState({
    pilotTeamNumber: "",
    tugNumber: "",
    craneNumber: "",
    employeeTeamNumber: "",
    shipId: ""
  });

  useEffect(() => {
    loadShipData();
    loadResourcesData();
  }, []);

  useEffect(() => {
    if (selectedShipId) {
      setResourceData((prevData) => ({
        ...prevData,
        ship: { shipId: selectedShipId },
      }));
    }
  }, [selectedShipId]);

  const loadShipData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/ship/ids");
      setShipRecords(response.data);
    } catch (error) {
      console.error("Error loading ship data:", error);
    }
  };

  const loadResourcesData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/logisticnmanager/resources/all");
      setResourcesList(response.data);
      setUsedNumbers({
        pilotTeamNumbers: response.data.map(r => r.pilotTeamNumber),
        tugNumbers: response.data.map(r => r.tugNumber),
        craneNumbers: response.data.map(r => r.craneNumber),
        employeeTeamNumbers: response.data.map(r => r.employeeTeamNumber),
      });
    } catch (error) {
      console.error("Error loading resources data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResourceData({ ...resourceData, [name]: value });
    // Clear error message on input change
    setErrors({ ...errors, [name]: "" });
  };

  const handleShipChange = (e) => {
    const { value } = e.target;
    setSelectedShipId(value);
    setErrors({ ...errors, shipId: "" });
  };

  const validateForm = () => {
    let hasError = false;
    let newErrors = {};

    const { pilotTeamNumber, tugNumber, craneNumber, employeeTeamNumber } = resourceData;

    if (!pilotTeamNumber) {
      newErrors.pilotTeamNumber = "Pilot Team Number is required.";
      hasError = true;
    }
    if (!tugNumber) {
      newErrors.tugNumber = "Tug Number is required.";
      hasError = true;
    }
    if (!craneNumber) {
      newErrors.craneNumber = "Crane Number is required.";
      hasError = true;
    }
    if (!employeeTeamNumber) {
      newErrors.employeeTeamNumber = "Employee Team Number is required.";
      hasError = true;
    }
    if (!selectedShipId) {
      newErrors.shipId = "Ship is required.";
      hasError = true;
    }
    

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8006/logisticnmanager/resources/${editResourceId}`, resourceData);
        setModalContent({
          message: "Resource updated successfully!",
          type: "success",
        });
        setIsEditing(false);
        setEditResourceId(null);
      } else {
        await axios.post("http://localhost:8006/logisticnmanager/resources", resourceData);
        setModalContent({
          message: "Resource added successfully!",
          type: "success",
        });
      }
      resetForm();
      loadResourcesData();
    } catch (error) {
      console.error("Error saving resource:", error);
      setModalContent({
        message: "An error occurred while saving the resource.",
        type: "error",
      });
    }
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8006/logisticnmanager/resources/${id}`);
      setModalContent({
        message: "Resource deleted successfully!",
        type: "success",
      });
      loadResourcesData();
    } catch (error) {
      console.error("Error deleting resource:", error);
      setModalContent({
        message: "An error occurred while deleting the resource.",
        type: "error",
      });
    }
    setShowModal(true);
  };

  const handleEdit = (resource) => {
    setResourceData({
      pilotTeamNumber: resource.pilotTeamNumber,
      tugNumber: resource.tugNumber,
      craneNumber: resource.craneNumber,
      employeeTeamNumber: resource.employeeTeamNumber,
      ship: { shipId: resource.ship.shipId },
    });
    setSelectedShipId(resource.ship.shipId);
    setIsEditing(true);
    setEditResourceId(resource.resourcesId);
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditResourceId(null);
    setResourceData({
      pilotTeamNumber: "",
      tugNumber: "",
      craneNumber: "",
      employeeTeamNumber: "",
      ship: { shipId: "" },
    });
    setSelectedShipId("");
  };

  const pilotTeams = [
    "PT-101 - Alpha Pilots",
    "PT-102 - Bravo Pilots",
    "PT-103 - Delta Pilots",
    "PT-104 - Eagle Pilots",
    "PT-105 - Falcon Pilots",
    "PT-106 - Griffin Pilots",
    "PT-107 - Hawk Pilots",
    "PT-108 - Kestrel Pilots",
    "PT-109 - Lionheart Pilots",
    "PT-110 - Mistral Pilots",
    "PT-111 - Nimbus Pilots",
    "PT-112 - Orion Pilots",
    "PT-113 - Phoenix Pilots",
    "PT-114 - Quasar Pilots",
    "PT-115 - Raptor Pilots",
    "PT-116 - Sirocco Pilots",
    "PT-117 - Thunder Pilots",
    "PT-118 - Vortex Pilots",
    "PT-119 - Windrider Pilots",
    "PT-120 - Zephyr Pilots",
  ];

  const tugNumbers = Array.from({ length: 20 }, (_, i) => i + 201);

  const craneNumbers = Array.from({ length: 20 }, (_, i) => i + 301);

  const employeeTeams = [
    "ET-401 - Vanguard Team",
    "ET-402 - Sentinel Team",
    "ET-403 - Guardian Team",
    "ET-404 - Protector Team",
    "ET-405 - Defender Team",
    "ET-406 - Shield Team",
    "ET-407 - Bastion Team",
    "ET-408 - Fortitude Team",
    "ET-409 - Ironclad Team",
    "ET-410 - Bulwark Team",
    "ET-411 - Citadel Team",
    "ET-412 - Rampart Team",
    "ET-413 - Aegis Team",
    "ET-414 - Valor Team",
    "ET-415 - Invictus Team",
    "ET-416 - Horizon Team",
    "ET-417 - Legacy Team",
    "ET-418 - Ascendant Team",
    "ET-419 - Pinnacle Team",
    "ET-420 - Zenith Team",
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Allocate Resources</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipId">
            Ship:
          </label>
          <select
            id="shipId"
            name="shipId"
            value={selectedShipId}
            onChange={handleShipChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Ship</option>
            {shipRecords.map((ship) => (
              <option key={ship} value={ship}>
                {ship}
              </option>
            ))}
          </select>
          {errors.shipId && <p className="text-red-500 text-xs italic">{errors.shipId}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pilotTeamNumber">
            Pilot Team Number:
          </label>
          <select
            id="pilotTeamNumber"
            name="pilotTeamNumber"
            value={resourceData.pilotTeamNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Pilot Team Number</option>
            {pilotTeams
              .filter(pilot => !usedNumbers.pilotTeamNumbers.includes(pilot))
              .map((pilot) => (
                <option key={pilot} value={pilot}>
                  {pilot}
                </option>
              ))}
          </select>
          {errors.pilotTeamNumber && <p className="text-red-500 text-xs italic">{errors.pilotTeamNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tugNumber">
            Tug Number:
          </label>
          <select
            id="tugNumber"
            name="tugNumber"
            value={resourceData.tugNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Tug Number</option>
            {tugNumbers
              .filter(tug => !usedNumbers.tugNumbers.includes(tug))
              .map((tug) => (
                <option key={tug} value={tug}>
                  {tug}
                </option>
              ))}
          </select>
          {errors.tugNumber && <p className="text-red-500 text-xs italic">{errors.tugNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="craneNumber">
            Crane Number:
          </label>
          <select
            id="craneNumber"
            name="craneNumber"
            value={resourceData.craneNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Crane Number</option>
            {craneNumbers
              .filter(crane => !usedNumbers.craneNumbers.includes(crane))
              .map((crane) => (
                <option key={crane} value={crane}>
                  {crane}
                </option>
              ))}
          </select>
          {errors.craneNumber && <p className="text-red-500 text-xs italic">{errors.craneNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeTeamNumber">
            Employee Team Number:
          </label>
          <select
            id="employeeTeamNumber"
            name="employeeTeamNumber"
            value={resourceData.employeeTeamNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Employee Team Number</option>
            {employeeTeams
              .filter(employee => !usedNumbers.employeeTeamNumbers.includes(employee))
              .map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
          </select>
          {errors.employeeTeamNumber && <p className="text-red-500 text-xs italic">{errors.employeeTeamNumber}</p>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isEditing ? "Update Resource" : "Add Resource"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Cancel
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4">Resources List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="w-full bg-gray-100 border-b border-gray-200">
            <th className="py-2 px-4 text-left text-gray-600">Ship ID</th>
            <th className="py-2 px-4 text-left text-gray-600">Pilot Team Number</th>
            <th className="py-2 px-4 text-left text-gray-600">Tug Number</th>
            <th className="py-2 px-4 text-left text-gray-600">Crane Number</th>
            <th className="py-2 px-4 text-left text-gray-600">Employee Team Number</th>
            <th className="py-2 px-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resourcesList.map((resource) => (
            <tr key={resource.resourcesId} className="border-b border-gray-200">
              <td className="py-2 px-4 text-gray-700">{resource.ship.shipId}</td>
              <td className="py-2 px-4 text-gray-700">{resource.pilotTeamNumber}</td>
              <td className="py-2 px-4 text-gray-700">{resource.tugNumber}</td>
              <td className="py-2 px-4 text-gray-700">{resource.craneNumber}</td>
              <td className="py-2 px-4 text-gray-700">{resource.employeeTeamNumber}</td>
              <td className="py-2 px-4">
                {/* <button
                  onClick={() => handleEdit(resource)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                >
                  Edit
                </button> */}
                <button
                  onClick={() => handleDelete(resource.resourcesId)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Notification"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>{modalContent.type === "success" ? "Success" : "Error"}</h2>
        <p>{modalContent.message}</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default ResourcesManagement;
