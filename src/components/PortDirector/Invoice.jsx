// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Mock function to fetch ship details (replace with API call)
// const fetchShipDetails = async (shipId) => {
//   // Replace with your API call
//   const response = await axios.get(`http://localhost:8006/portDirector/ship/${shipId}`);
//   return response.data;
// };

// // Function to generate alphanumeric invoice number
// const generateInvoiceNumber = () => {
//   return 'INV-' + Math.random().toString(36).substr(2, 8).toUpperCase();
// };

// function Invoice() {
//   const [shipId, setShipId] = useState('');
//   const [shipDetails, setShipDetails] = useState(null);
//   const [invoice, setInvoice] = useState({
//     invoiceNumber: generateInvoiceNumber(),
//     invoiceDate: '',
//     dueDate: '',
//     portName: 'Chennai',
//     serviceDuration: '',
//     unitCost: '',
//     totalCost: '',
//     additionalCharges: '',
//     taxes: ''
//   });

//   useEffect(() => {
//     if (shipId) {
//       fetchShipDetails(shipId).then(details => {
//         setShipDetails(details);
//       });
//     }
//   }, [shipId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInvoice(prevInvoice => ({
//       ...prevInvoice,
//       [name]: value
//     }));
//   };

//   const handleShipUpdate = async () => {
//     try {
//       // Make API call to update ship details
//       await axios.put(`http://localhost:8006/portDirector/ship/${shipId}`, {
//         ...shipDetails,
//         // You can include additional fields if needed
//       });
//       alert('Ship details updated successfully');
//     } catch (error) {
//       console.error('Error updating ship details:', error);
//       alert('Failed to update ship details');
//     }
//   };

//   return (
//     <div>
//       <h1>Invoice Generation</h1>
      
//       <div>
//         <label htmlFor="shipId">Select Ship ID:</label>
//         <input
//           type="text"
//           id="shipId"
//           value={shipId}
//           onChange={(e) => setShipId(e.target.value)}
//         />
//       </div>

//       {shipDetails && (
//         <div>
//           <h2>Ship Details</h2>
//           <p>Ship Name: {shipDetails.shipName}</p>
//           {/* Display other ship details as needed */}
//           <button onClick={handleShipUpdate}>Update Ship</button>
//         </div>
//       )}

//       <div>
//         <h2>Invoice Details</h2>
//         <form>
//           <div>
//             <label htmlFor="invoiceDate">Invoice Date:</label>
//             <input
//               type="date"
//               id="invoiceDate"
//               name="invoiceDate"
//               value={invoice.invoiceDate}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="dueDate">Due Date:</label>
//             <input
//               type="date"
//               id="dueDate"
//               name="dueDate"
//               value={invoice.dueDate}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="serviceDuration">Service Duration:</label>
//             <input
//               type="text"
//               id="serviceDuration"
//               name="serviceDuration"
//               value={invoice.serviceDuration}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="unitCost">Unit Cost:</label>
//             <input
//               type="text"
//               id="unitCost"
//               name="unitCost"
//               value={invoice.unitCost}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="totalCost">Total Cost:</label>
//             <input
//               type="text"
//               id="totalCost"
//               name="totalCost"
//               value={invoice.totalCost}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="additionalCharges">Additional Charges:</label>
//             <input
//               type="text"
//               id="additionalCharges"
//               name="additionalCharges"
//               value={invoice.additionalCharges}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="taxes">Taxes:</label>
//             <input
//               type="text"
//               id="taxes"
//               name="taxes"
//               value={invoice.taxes}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
//             <p><strong>Port Name:</strong> {invoice.portName}</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Invoice;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Function to fetch all ship IDs
// const fetchShipIds = async () => {
//   const response = await axios.get('http://localhost:8006/portDirector/ship/ids');
//   return response.data;
// };

// // Function to fetch ship details
// const fetchShipDetails = async (shipId) => {
//   const response = await axios.get(`http://localhost:8006/portDirector/ship/${shipId}`);
//   return response.data;
// };

// // Function to generate alphanumeric invoice number
// const generateInvoiceNumber = () => {
//   return 'INV' + Math.random().toString(36).substr(2, 8).toUpperCase();
// };

// // Function to add invoice
// const addInvoice = async (invoiceData) => {
//   await axios.put('http://localhost:8006/portDirector/invoice', invoiceData);
// };

// function Invoice() {
//   const [shipId, setShipId] = useState('');
//   const [shipIds, setShipIds] = useState([]);
//   const [shipDetails, setShipDetails] = useState(null);
//   const [invoice, setInvoice] = useState({
//     invoiceNumber: generateInvoiceNumber(),
//     invoiceDate: '',
//     dueDate: '',
//     portName: 'Chennai',
//     serviceDuration: '',
//     unitCost: '',
//     totalCost: '',
//     additionalCharges: '',
//     taxes: ''
//   });

//   useEffect(() => {
//     // Fetch all ship IDs when component mounts
//     fetchShipIds().then(ids => setShipIds(ids));
//   }, []);

//   useEffect(() => {
//     if (shipId) {
//       fetchShipDetails(shipId).then(details => setShipDetails(details));
//     }
//   }, [shipId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInvoice(prevInvoice => ({
//       ...prevInvoice,
//       [name]: value
//     }));
//   };

//   const handleShipUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:8006/portDirector/ship/${shipId}`, {
//         ...shipDetails,
//         // Include other fields if needed
//       });
//       alert('Ship details updated successfully');
//     } catch (error) {
//       console.error('Error updating ship details:', error);
//       alert('Failed to update ship details');
//     }
//   };

//   const handleInvoiceSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addInvoice(invoice);
//       alert('Invoice added successfully');
//       // Clear form or handle post-submission logic
//     } catch (error) {
//       console.error('Error adding invoice:', error);
//       alert('Failed to add invoice');
//     }
//   };

//   return (
//     <div>
//       <h1>Invoice Generation</h1>
      
//       <div>
//         <label htmlFor="shipId">Select Ship ID:</label>
//         <select
//           id="shipId"
//           value={shipId}
//           onChange={(e) => setShipId(e.target.value)}
//         >
//           <option value="">Select Ship ID</option>
//           {shipIds.map(id => (
//             <option key={id} value={id}>{id}</option>
//           ))}
//         </select>
//       </div>

//       {shipDetails && (
//         <div>
//           <h2>Ship Details</h2>
//           <p>Ship Name: {shipDetails.shipName}</p>
//           {/* Display other ship details as needed */}
//           <button onClick={handleShipUpdate}>Update Ship</button>
//         </div>
//       )}

//       <div>
//         <h2>Invoice Details</h2>
//         <form onSubmit={handleInvoiceSubmit}>
//           <div>
//             <label htmlFor="invoiceDate">Invoice Date:</label>
//             <input
//               type="date"
//               id="invoiceDate"
//               name="invoiceDate"
//               value={invoice.invoiceDate}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="dueDate">Due Date:</label>
//             <input
//               type="date"
//               id="dueDate"
//               name="dueDate"
//               value={invoice.dueDate}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="serviceDuration">Service Duration:</label>
//             <input
//               type="text"
//               id="serviceDuration"
//               name="serviceDuration"
//               value={invoice.serviceDuration}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="unitCost">Unit Cost:</label>
//             <input
//               type="text"
//               id="unitCost"
//               name="unitCost"
//               value={invoice.unitCost}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="totalCost">Total Cost:</label>
//             <input
//               type="text"
//               id="totalCost"
//               name="totalCost"
//               value={invoice.totalCost}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="additionalCharges">Additional Charges:</label>
//             <input
//               type="text"
//               id="additionalCharges"
//               name="additionalCharges"
//               value={invoice.additionalCharges}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="taxes">Taxes:</label>
//             <input
//               type="text"
//               id="taxes"
//               name="taxes"
//               value={invoice.taxes}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
//             <p><strong>Port Name:</strong> {invoice.portName}</p>
//           </div>
//           <button type="submit">Add Invoice</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Invoice;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Function to fetch all ship IDs
const fetchShipIds = async () => {
  const response = await axios.get('http://localhost:8006/portDirector/ship/ids');
  return response.data;
};

// Function to fetch ship details
const fetchShipDetails = async (shipId) => {
  const response = await axios.get(`http://localhost:8006/portDirector/ship/${shipId}`);
  return response.data;
};

const generateInvoiceNumber = () => {
  return 'INV' + Math.random().toString(36).substr(2, 8).toUpperCase();
};

const addInvoice = async (invoiceData) => {
  await axios.put('http://localhost:8006/portDirector/invoice', invoiceData);
};

// Function to update ship and add invoice
const updateShipAndAddInvoice = async (shipId, shipDetails, invoiceData) => {
  try {
    // Send combined data in a single request
    await axios.post('http://localhost:8006/portDirector/ship', {
      ship: { ...shipDetails, shipId },
      invoice: { ...invoiceData }
    });
    alert('Ship details updated and invoice added successfully');
  } catch (error) {
    console.error('Error updating ship details or adding invoice:', error);
    alert('Failed to update ship details or add invoice');
  }
};

function Invoice() {
  const [shipId, setShipId] = useState('');
  const [shipIds, setShipIds] = useState([]);
  const [shipDetails, setShipDetails] = useState(null);
  const [invoice, setInvoice] = useState({
    invoiceNumber: generateInvoiceNumber(),
    invoiceDate: '',
    dueDate: '',
    portName: 'Chennai',
    serviceDuration: '',
    unitCost: '',
    totalCost: '',
    additionalCharges: '',
    taxes: ''
  });

  useEffect(() => {
    // Fetch all ship IDs when component mounts
    fetchShipIds().then(ids => setShipIds(ids));
  }, []);

  useEffect(() => {
    if (shipId) {
      fetchShipDetails(shipId).then(details => setShipDetails(details));
    }
  }, [shipId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice(prevInvoice => ({
      ...prevInvoice,
      [name]: value
    }));
  };

  const handleShipUpdateAndInvoice = async (e) => {
    e.preventDefault();
    try {
      await addInvoice(invoice);
      await updateShipAndAddInvoice(shipId, shipDetails, invoice);
      // Clear form or handle post-submission logic
    } catch (error) {
      console.error('Error during ship update and invoice creation:', error);
      alert('Failed to update ship details or add invoice');
    }
  };

  return (
    <div>
      <h1>Invoice Generation</h1>
      
      <div>
        <label htmlFor="shipId">Select Ship ID:</label>
        <select
          id="shipId"
          value={shipId}
          onChange={(e) => setShipId(e.target.value)}
        >
          <option value="">Select Ship ID</option>
          {shipIds.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      </div>

      {shipDetails && (
        <div>
          <h2>Ship Details</h2>
          <p>Ship Name: {shipDetails.shipName}</p>
          {/* Display other ship details as needed */}
        </div>
      )}

      <div>
        <h2>Invoice Details</h2>
        <form onSubmit={handleShipUpdateAndInvoice}>
          <div>
            <label htmlFor="invoiceDate">Invoice Date:</label>
            <input
              type="date"
              id="invoiceDate"
              name="invoiceDate"
              value={invoice.invoiceDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={invoice.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="serviceDuration">Service Duration:</label>
            <input
              type="text"
              id="serviceDuration"
              name="serviceDuration"
              value={invoice.serviceDuration}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="unitCost">Unit Cost:</label>
            <input
              type="text"
              id="unitCost"
              name="unitCost"
              value={invoice.unitCost}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="totalCost">Total Cost:</label>
            <input
              type="text"
              id="totalCost"
              name="totalCost"
              value={invoice.totalCost}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="additionalCharges">Additional Charges:</label>
            <input
              type="text"
              id="additionalCharges"
              name="additionalCharges"
              value={invoice.additionalCharges}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="taxes">Taxes:</label>
            <input
              type="text"
              id="taxes"
              name="taxes"
              value={invoice.taxes}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
            <p><strong>Port Name:</strong> {invoice.portName}</p>
          </div>
          <button type="submit">Update Ship and Add Invoice</button>
        </form>
      </div>
    </div>
  );
}

export default Invoice;
