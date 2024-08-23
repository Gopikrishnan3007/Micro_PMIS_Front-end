

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import Track from './Track';

// function ShipRequest() {
//   // State to hold form data
//   const [shipData, setShipData] = useState({
//     imoNumber: '',
//     mmsiNumber: '',
//     typeOfShip: '',
//     previousPort: '',
//     arrivalDateTime: '',
//     request: 'requested', // Default value for request field
//   });

//   // State to hold error messages
//   const [errors, setErrors] = useState({});

//   // State to handle loading, success message, and redirection
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // For redirection

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShipData({ ...shipData, [name]: value });
//     if (value) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // Validate fields
//   const validate = () => {
//     let newErrors = {};
//     if (!shipData.imoNumber) newErrors.imoNumber = 'IMO Number is required';
//     if (!shipData.mmsiNumber) newErrors.mmsiNumber = 'MMSI Number is required';
//     if (!shipData.typeOfShip) newErrors.typeOfShip = 'Type of Ship is required';
//     if (!shipData.previousPort) newErrors.previousPort = 'Previous Port is required';
//     if (!shipData.arrivalDateTime) newErrors.arrivalDateTime = 'Arrival Date & Time is required';
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true); // Start loading
//     try {
//       await axios.post('http://localhost:8006/portDirector/ship', shipData);
//       setMessage('Your request was sent successfully! Now you can TRACK the request');
//       sessionStorage.setItem("imoNumber", shipData.imoNumber);
//       setTimeout(() => {
//         setLoading(false);
//          // Redirect to Track page
//       }, 3000);
//       return <Track />; // Show success message for 3 seconds
//     } catch (error) {
//       setMessage('Error sending request. Please try again.');
//       setLoading(false);
//       console.error('Error adding ship:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Request for Port</h2>
     
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imoNumber">
//             IMO Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="imoNumber"
//             name="imoNumber"
//             value={shipData.imoNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imoNumber && 'border-red-500'}`}
//           />
//           {errors.imoNumber && <p className="text-red-500 text-xs mt-1">{errors.imoNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mmsiNumber">
//             MMSI Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="mmsiNumber"
//             name="mmsiNumber"
//             value={shipData.mmsiNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mmsiNumber && 'border-red-500'}`}
//           />
//           {errors.mmsiNumber && <p className="text-red-500 text-xs mt-1">{errors.mmsiNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfShip">
//             Type of Ship <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="typeOfShip"
//             name="typeOfShip"
//             value={shipData.typeOfShip}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.typeOfShip && 'border-red-500'}`}
//           />
//           {errors.typeOfShip && <p className="text-red-500 text-xs mt-1">{errors.typeOfShip}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="previousPort">
//             Previous Port <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="previousPort"
//             name="previousPort"
//             value={shipData.previousPort}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.previousPort && 'border-red-500'}`}
//           />
//           {errors.previousPort && <p className="text-red-500 text-xs mt-1">{errors.previousPort}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arrivalDateTime">
//             Arrival Date & Time <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="datetime-local"
//             id="arrivalDateTime"
//             name="arrivalDateTime"
//             value={shipData.arrivalDateTime}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.arrivalDateTime && 'border-red-500'}`}
//           />
//           {errors.arrivalDateTime && <p className="text-red-500 text-xs mt-1">{errors.arrivalDateTime}</p>}
//         </div>
//         <br />
        
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Request
//         </button>
//       </form>

//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-4">
//               <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-blue-500 rounded-full"></div>
//             </div>
//             <p>Sending your request...</p>
//           </div>
//         </div>
//       )}

//       {message && !loading && (
//         <div className="mt-4 p-2 text-center">
//           <FaCheck className="text-green-600 inline-block mb-2" size={24} />
//           <p className="text-green-600">{message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShipRequest;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import Track from './Track';

// function ShipRequest() {
//   const [shipData, setShipData] = useState({
//     imoNumber: '',
//     mmsiNumber: '',
//     typeOfShip: '',
//     previousPort: '',
//     arrivalDateTime: '',
//     request: 'requested', // Default value for request field
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShipData({ ...shipData, [name]: value });
//     if (value) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!shipData.imoNumber) newErrors.imoNumber = 'IMO Number is required';
//     if (!shipData.mmsiNumber) newErrors.mmsiNumber = 'MMSI Number is required';
//     if (!shipData.typeOfShip) newErrors.typeOfShip = 'Type of Ship is required';
//     if (!shipData.previousPort) newErrors.previousPort = 'Previous Port is required';
//     if (!shipData.arrivalDateTime) newErrors.arrivalDateTime = 'Arrival Date & Time is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create new ship
//       await axios.post('http://localhost:8006/portDirector/ship', shipData);
//       console.log(shipData.imoNumber);

//       setMessage('Your request was sent successfully! Now you can TRACK the request');
//       setTimeout(() => {
//         setLoading(false);
//         navigate('/track'); // Redirect to Track page
//       }, 3000);
//     } catch (error) {
//       setMessage('Error sending request. Please try again.');
//       setLoading(false);
//       console.error('Error adding ship:', error);
//     }
    
//   };
  

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Request for Port</h2>
     
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imoNumber">
//             IMO Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="imoNumber"
//             name="imoNumber"
//             value={shipData.imoNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imoNumber && 'border-red-500'}`}
//           />
//           {errors.imoNumber && <p className="text-red-500 text-xs mt-1">{errors.imoNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mmsiNumber">
//             MMSI Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="mmsiNumber"
//             name="mmsiNumber"
//             value={shipData.mmsiNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mmsiNumber && 'border-red-500'}`}
//           />
//           {errors.mmsiNumber && <p className="text-red-500 text-xs mt-1">{errors.mmsiNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfShip">
//             Type of Ship <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="typeOfShip"
//             name="typeOfShip"
//             value={shipData.typeOfShip}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.typeOfShip && 'border-red-500'}`}
//           />
//           {errors.typeOfShip && <p className="text-red-500 text-xs mt-1">{errors.typeOfShip}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="previousPort">
//             Previous Port <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="previousPort"
//             name="previousPort"
//             value={shipData.previousPort}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.previousPort && 'border-red-500'}`}
//           />
//           {errors.previousPort && <p className="text-red-500 text-xs mt-1">{errors.previousPort}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arrivalDateTime">
//             Arrival Date & Time <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="datetime-local"
//             id="arrivalDateTime"
//             name="arrivalDateTime"
//             value={shipData.arrivalDateTime}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.arrivalDateTime && 'border-red-500'}`}
//           />
//           {errors.arrivalDateTime && <p className="text-red-500 text-xs mt-1">{errors.arrivalDateTime}</p>}
//         </div>
//         <br />
        
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Request
//         </button>
//       </form>

//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-4">
//               <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-blue-500 rounded-full"></div>
//             </div>
//             <p>Sending your request...</p>
//           </div>
//         </div>
//       )}

//       {message && !loading && (
//         <div className="mt-4 p-2 text-center">
//           <FaCheck className="text-green-600 inline-block mb-2" size={24} />
//           <p className="text-green-600">{message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShipRequest;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';

// function ShipRequest() {
//   const [shipData, setShipData] = useState({
//     shipName:'',
//     imoNumber: '',
//     mmsiNumber: '',
//     typeOfShip: '',
//     serviceType:'',
//     previousPort: '',
//     arrivalDateTime: '',
//     berth:'Not-Allocated',
//     request: 'requested', // Default value for request field
//     vesselOperator :{
//       vesselOperatorId:""
//     }
//   });

//   const [shipIds, setShipIds] = useState([]); // State to hold fetched ship IDs
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // Fetch the list of ship IDs on component mount
//   useEffect(() => {
//     const fetchShipIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:8006/portDirector/ship/ids');
//         setShipIds(response.data);
//       } catch (error) {
//         console.error('Error fetching ship IDs:', error);
//       }
//     };

//     fetchShipIds();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShipData({ ...shipData, [name]: value });
//     if (value) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!shipData.shipName) newErrors.shipName = 'Ship Name is required';
//     if (!shipData.imoNumber) newErrors.imoNumber = 'IMO Number is required';
//     if (!shipData.mmsiNumber) newErrors.mmsiNumber = 'MMSI Number is required';
//     if (!shipData.typeOfShip) newErrors.typeOfShip = 'Type of Ship is required';
//     if (!shipData.serviceType) newErrors.serviceType = 'Service Type is required';
//     if (!shipData.previousPort) newErrors.previousPort = 'Previous Port is required';
//     if (!shipData.arrivalDateTime) newErrors.arrivalDateTime = 'Arrival Date & Time is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create new ship
//       shipData.vesselOperator.vesselOperatorId =sessionStorage.getItem('vesselOperatorid')
//       const response = await axios.post('http://localhost:8006/portDirector/ship', shipData);
      
//       // Fetch the new Ship ID after creating the ship
//       const newShipId = response.data.shipId;

//       // Store the new Ship ID in session storage
//       sessionStorage.setItem('shipId', newShipId);

//       setMessage('Your request was sent successfully! Now you can TRACK the request');
//       setTimeout(() => {
//         setLoading(false);
//         navigate('/track'); // Redirect to Track page
//       }, 3000);
//     } catch (error) {
//       setMessage('Error sending request. Please try again.');
//       setLoading(false);
//       console.error('Error adding ship:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Request for Port</h2>
     
//       <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipName">
//           Ship Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="shipName"
//             name="shipName"
//             value={shipData.shipName}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.shipName && 'border-red-500'}`}
//           />
//           {errors.shipName && <p className="text-red-500 text-xs mt-1">{errors.shipName}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imoNumber">
//             IMO Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="imoNumber"
//             name="imoNumber"
//             value={shipData.imoNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imoNumber && 'border-red-500'}`}
//           />
//           {errors.imoNumber && <p className="text-red-500 text-xs mt-1">{errors.imoNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mmsiNumber">
//             MMSI Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="mmsiNumber"
//             name="mmsiNumber"
//             value={shipData.mmsiNumber}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mmsiNumber && 'border-red-500'}`}
//           />
//           {errors.mmsiNumber && <p className="text-red-500 text-xs mt-1">{errors.mmsiNumber}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfShip">
//             Type of Ship <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="typeOfShip"
//             name="typeOfShip"
//             value={shipData.typeOfShip}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.typeOfShip && 'border-red-500'}`}
//           />
//           {errors.typeOfShip && <p className="text-red-500 text-xs mt-1">{errors.typeOfShip}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="previousPort">
//             Previous Port <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="previousPort"
//             name="previousPort"
//             value={shipData.previousPort}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.previousPort && 'border-red-500'}`}
//           />
//           {errors.previousPort && <p className="text-red-500 text-xs mt-1">{errors.previousPort}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arrivalDateTime">
//             Arrival Date & Time <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="datetime-local"
//             id="arrivalDateTime"
//             name="arrivalDateTime"
//             value={shipData.arrivalDateTime}
//             onChange={handleInputChange}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.arrivalDateTime && 'border-red-500'}`}
//           />
//           {errors.arrivalDateTime && <p className="text-red-500 text-xs mt-1">{errors.arrivalDateTime}</p>}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Request
//         </button>
//       </form>

//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-4">
//               <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-blue-500 rounded-full"></div>
//             </div>
//             <p>Sending your request...</p>
//           </div>
//         </div>
//       )}

//       {message && !loading && (
//         <div className="mt-4 p-2 text-center">
//           <FaCheck className="text-green-600 inline-block mb-2" size={24} />
//           <p className="text-green-600">{message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShipRequest;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

function ShipRequest() {
  const [shipData, setShipData] = useState({
    shipName: '',
    imoNumber: '',
    mmsiNumber: '',
    typeOfShip: '',
    serviceType: '', // This will be a dropdown
    previousPort: '',
    arrivalDateTime: '',
    berth: 'Not-Allocated',
    request: 'requested', // Default value for request field
    vesselOperator: {
      vesselOperatorId: ""
    }
  });

  const [shipIds, setShipIds] = useState([]); // State to hold fetched ship IDs
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch the list of ship IDs on component mount
  useEffect(() => {
    const fetchShipIds = async () => {
      try {
        const response = await axios.get('http://localhost:8006/portDirector/ship/ids');
        setShipIds(response.data);
      } catch (error) {
        console.error('Error fetching ship IDs:', error);
      }
    };

    fetchShipIds();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipData({ ...shipData, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setShipData({ ...shipData, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!shipData.shipName) newErrors.shipName = 'Ship Name is required';
    if (!shipData.imoNumber) newErrors.imoNumber = 'IMO Number is required';
    if (!shipData.mmsiNumber) newErrors.mmsiNumber = 'MMSI Number is required';
    if (!shipData.typeOfShip) newErrors.typeOfShip = 'Type of Ship is required';
    if (!shipData.serviceType) newErrors.serviceType = 'Service Type is required';
    if (!shipData.previousPort) newErrors.previousPort = 'Previous Port is required';
    if (!shipData.arrivalDateTime) newErrors.arrivalDateTime = 'Arrival Date & Time is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Create new ship
      shipData.vesselOperator.vesselOperatorId = sessionStorage.getItem('vesselOperatorid');
      const response = await axios.post('http://localhost:8006/portDirector/ship', shipData);
      
      // Fetch the new Ship ID after creating the ship
      const newShipId = response.data.shipId;

      // Store the new Ship ID in session storage
      sessionStorage.setItem('shipId', newShipId);

      setMessage('Your request was sent successfully! Now you can TRACK the request');
      setTimeout(() => {
        setLoading(false);
        navigate('/track'); // Redirect to Track page
      }, 3000);
    } catch (error) {
      setMessage('Error sending request. Please try again.');
      setLoading(false);
      console.error('Error adding ship:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Request for Port</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipName">
            Ship Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="shipName"
            name="shipName"
            value={shipData.shipName}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.shipName && 'border-red-500'}`}
          />
          {errors.shipName && <p className="text-red-500 text-xs mt-1">{errors.shipName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imoNumber">
            IMO Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="imoNumber"
            name="imoNumber"
            value={shipData.imoNumber}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imoNumber && 'border-red-500'}`}
          />
          {errors.imoNumber && <p className="text-red-500 text-xs mt-1">{errors.imoNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mmsiNumber">
            MMSI Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="mmsiNumber"
            name="mmsiNumber"
            value={shipData.mmsiNumber}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mmsiNumber && 'border-red-500'}`}
          />
          {errors.mmsiNumber && <p className="text-red-500 text-xs mt-1">{errors.mmsiNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfShip">
            Type of Ship <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="typeOfShip"
            name="typeOfShip"
            value={shipData.typeOfShip}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.typeOfShip && 'border-red-500'}`}
          />
          {errors.typeOfShip && <p className="text-red-500 text-xs mt-1">{errors.typeOfShip}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceType">
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={shipData.serviceType}
            onChange={handleSelectChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.serviceType && 'border-red-500'}`}
          >
            <option value="">Select Service Type</option>
            <option value="Load">Load</option>
            <option value="Unload">Unload</option>
          </select>
          {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="previousPort">
            Previous Port <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="previousPort"
            name="previousPort"
            value={shipData.previousPort}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.previousPort && 'border-red-500'}`}
          />
          {errors.previousPort && <p className="text-red-500 text-xs mt-1">{errors.previousPort}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arrivalDateTime">
            Arrival Date & Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            id="arrivalDateTime"
            name="arrivalDateTime"
            value={shipData.arrivalDateTime}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.arrivalDateTime && 'border-red-500'}`}
          />
          {errors.arrivalDateTime && <p className="text-red-500 text-xs mt-1">{errors.arrivalDateTime}</p>}
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Send Request'}
          </button>
        </div>
      </form>

      {message && (
        <div className={`mt-4 p-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default ShipRequest;
