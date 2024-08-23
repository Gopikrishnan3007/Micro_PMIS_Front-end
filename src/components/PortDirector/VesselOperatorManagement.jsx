

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { FaEdit, FaTrash } from 'react-icons/fa';

// // function VesselOperatorManagement() {
// //   const [vesselOperators, setVesselOperators] = useState([]);
// //   const [operatorData, setOperatorData] = useState({
// //     vesselOperatorId: "",
// //     name: "",
// //     email: "",
// //     userName: "",
// //     password: "",
// //     confirmPassword: "",
// //     role: "vesselOperator",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isEditing, setIsEditing] = useState(false);

// //   useEffect(() => {
// //     loadVesselOperators();
// //   }, []);

// //   const loadVesselOperators = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8006/portDirector/vesselOperator/all");
// //       setVesselOperators(response.data);
// //     } catch (error) {
// //       console.error("Error loading vessel operators:", error);
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setOperatorData({ ...operatorData, [name]: value });
// //   };

// //   const validateForm = () => {
// //     const { name, userName, password, confirmPassword, email } = operatorData;
// //     const newErrors = {};
// //     let isValid = true;

// //     // Basic field validation
// //     if (!name) {
// //       newErrors.name = "Name is required.";
// //       isValid = false;
// //     }
// //     if (!userName) {
// //       newErrors.userName = "Username is required.";
// //       isValid = false;
// //     }
// //     if (!email) {
// //       newErrors.email = "Email is required.";
// //       isValid = false;
// //     } else if (!validateEmail(email)) {
// //       newErrors.email = "Invalid email address.";
// //       isValid = false;
// //     }
// //     if (!password) {
// //       newErrors.password = "Password is required.";
// //       isValid = false;
// //     } else if (!validatePassword(password)) {
// //       newErrors.password = "Password must contain at least one number, one uppercase letter, and one special character.";
// //       isValid = false;
// //     }
// //     if (password !== confirmPassword) {
// //       newErrors.confirmPassword = "Passwords do not match.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const validateEmail = (email) => {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(email);
// //   };

// //   const validatePassword = (password) => {
// //     const hasNumber = /\d/;
// //     const hasUpperCase = /[A-Z]/;
// //     const hasSpecialChar = /[^A-Za-z0-9]/;
// //     return hasNumber.test(password) && hasUpperCase.test(password) && hasSpecialChar.test(password);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) {
// //       return;
// //     }

// //     try {
// //       if (isEditing) {
// //         await axios.put(`http://localhost:8006/portDirector/vesselOperator/${operatorData.vesselOperatorId}`, operatorData);
// //         alert("Vessel Operator updated successfully!");
// //       } else {
// //         await axios.post("http://localhost:8006/portDirector/vesselOperator", operatorData);
// //         alert("Vessel Operator added successfully!");
// //       }
// //       loadVesselOperators();
// //       resetForm();
// //     } catch (error) {
// //       console.error("Error saving vessel operator:", error);
// //     }
// //   };

// //   const resetForm = () => {
// //     setOperatorData({
// //       vesselOperatorId: "",
// //       name: "",
// //       email: "",
// //       userName: "",
// //       password: "",
// //       confirmPassword: "",
// //       role: "vesselOperator",
// //     });
// //     setErrors({});
// //     setIsEditing(false);
// //   };

// //   const handleEdit = (operator) => {
// //     setOperatorData({ ...operator, confirmPassword: operator.password });
// //     setIsEditing(true);
// //   };

// //   const handleDelete = async (id) => {
// //     const confirmDelete = window.confirm("Do you want to delete this vessel operator?");
// //     if (confirmDelete) {
// //       try {
// //         await axios.delete(`http://localhost:8006/portDirector/vesselOperator/${id}`);
// //         alert("Vessel Operator deleted successfully!");
// //         loadVesselOperators();
// //       } catch (error) {
// //         console.error("Error deleting vessel operator:", error);
// //       }
// //     }
// //   };

// //   const sendEmail = async (email, subject, message) => {
// //     try {
// //       await axios.post("http://localhost:8006/login/sendEmail", { email, subject, message });
// //       alert("Email sent successfully!");
// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //     }
// //   };
  

// //   const handleSendEmail = () => {
// //     const subject = "Your Vessel Operator Account";
// //     const message = `Hello ${operatorData.name},\n\nYour login credentials are:\nUsername: ${operatorData.userName}\nPassword: ${operatorData.password}\n\nBest regards,\nPort Management Team`;

// //     sendEmail(operatorData.email, subject, message);
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Vessel Operator" : "Add Vessel Operator"}</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
// //             Name:
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={operatorData.name}
// //             onChange={handleInputChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //             Email:
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={operatorData.email}
// //             onChange={handleInputChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
// //             Username:
// //           </label>
// //           <input
// //             type="text"
// //             id="userName"
// //             name="userName"
// //             value={operatorData.userName}
// //             onChange={handleInputChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={operatorData.password}
// //             onChange={handleInputChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
// //             Confirm Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="confirmPassword"
// //             name="confirmPassword"
// //             value={operatorData.confirmPassword}
// //             onChange={handleInputChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
// //         </div>

// //         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
// //           {isEditing ? "Update Operator" : "Add Operator"}
// //         </button>
// //         {isEditing && (
// //           <button
// //             type="button"
// //             onClick={resetForm}
// //             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
// //           >
// //             Cancel
// //           </button>
// //         )}
// //       </form>

// //       {isEditing && (
// //         <button
// //           type="button"
// //           onClick={handleSendEmail}
// //           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
// //         >
// //           Send Email
// //         </button>
// //       )}

// //       <h3 className="text-lg font-semibold mt-8">Vessel Operators List</h3>
// //       <table className="min-w-full divide-y divide-gray-200 mt-4">
// //         <thead>
// //           <tr>
// //             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// //             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
// //             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// //             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200">
// //           {vesselOperators.map((operator) => (
// //             <tr key={operator.vesselOperatorId}>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{operator.name}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{operator.userName}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{operator.email}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                 <button
// //                   onClick={() => handleEdit(operator)}
// //                   className="text-indigo-600 hover:text-indigo-900"
// //                 >
// //                   <FaEdit />
// //                 </button>
// //                 <button
// //                   onClick={() => handleDelete(operator.vesselOperatorId)}
// //                   className="text-red-600 hover:text-red-900 ml-4"
// //                 >
// //                   <FaTrash />
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default VesselOperatorManagement;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from 'react-icons/fa';

// function VesselOperatorManagement() {
//   const [vesselOperators, setVesselOperators] = useState([]);
//   const [operatorData, setOperatorData] = useState({
//     vesselOperatorId: "",
//     name: "",
//     email: "",
//     userName: "",
//     password: "Vessel@123",
//     confirmPassword: "",
//     role: "vesselOperator",
//   });
//   const [errors, setErrors] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     loadVesselOperators();
//   }, []);

//   const loadVesselOperators = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/vesselOperator/all");
//       setVesselOperators(response.data);
//     } catch (error) {
//       console.error("Error loading vessel operators:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOperatorData({ ...operatorData, [name]: value });
//   };

//   const validateForm = () => {
//     const { name, userName, password, confirmPassword, email } = operatorData;
//     const newErrors = {};
//     let isValid = true;

//     // Basic field validation
//     if (!name) {
//       newErrors.name = "Name is required.";
//       isValid = false;
//     }
//     if (!userName) {
//       newErrors.userName = "Username is required.";
//       isValid = false;
//     }
//     if (!email) {
//       newErrors.email = "Email is required.";
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       newErrors.email = "Invalid email address.";
//       isValid = false;
//     }
//     if (!password) {
//       newErrors.password = "Password is required.";
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       newErrors.password = "Password must contain at least one number, one uppercase letter, and one special character.";
//       isValid = false;
//     }
//     if (password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const hasNumber = /\d/;
//     const hasUpperCase = /[A-Z]/;
//     const hasSpecialChar = /[^A-Za-z0-9]/;
//     return hasNumber.test(password) && hasUpperCase.test(password) && hasSpecialChar.test(password);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:8006/portDirector/vesselOperator/${operatorData.vesselOperatorId}`, operatorData);
//         alert("Vessel Operator updated successfully!");
//       } else {
//         await axios.post("http://localhost:8006/portDirector/vesselOperator", operatorData);
//         alert("Vessel Operator added successfully!");
//           // Call this function after adding a new operator
//           await sendEmail(operatorData.email, operatorData.userName, operatorData.password);
//       }
//       loadVesselOperators();
//       resetForm();
//     } catch (error) {
//       console.error("Error saving vessel operator:", error);
//     }
//   };

//   const resetForm = () => {
//     setOperatorData({
//       vesselOperatorId: "",
//       name: "",
//       email: "",
//       userName: "",
//       password: "",
//       confirmPassword: "",
//       role: "vesselOperator",
//     });
//     setErrors({});
//     setIsEditing(false);
//   };

//   const handleEdit = (operator) => {
//     setOperatorData({ ...operator, confirmPassword: operator.password });
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Do you want to delete this vessel operator?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`http://localhost:8006/portDirector/vesselOperator/${id}`);
//         alert("Vessel Operator deleted successfully!");
//         loadVesselOperators();
//       } catch (error) {
//         console.error("Error deleting vessel operator:", error);
//       }
//     }
//   };

//   const sendEmail = async (email, userName, password) => {
//     try {
//       const emailData = {
//         from: 'noreply@yourdomain.com',
//         to: email,
//         subject: 'Your Account Details',
//         body: `Dear ${operatorData.namee},\n\nYour account has been created successfully.\n\nUsername: ${userName}\nPassword: ${password}\n\nPlease log in to your account using the following link:\nhttp://localhost:3000/login\n\nPlease keep this information secure.\n\nThank you!`,
//       };
//       await axios.post("http://localhost:8006/login/sendEmail", null,{
//         params:emailData,
//       });
//       alert("Email sent successfully!");
//     } catch (error) {
//       console.error('Email Send Error:', error);
//       alert('Failed to send email. Please try again.');
//     }
//   };
  


//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Vessel Operator" : "Add Vessel Operator"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={operatorData.name}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={operatorData.email}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
//             Username:
//           </label>
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             value={operatorData.userName}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={operatorData.password}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password:
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={operatorData.confirmPassword}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           {isEditing ? "Update Operator" : "Add Operator"}
//         </button>
//         {isEditing && (
//           <button
//             type="button"
//             onClick={resetForm}
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Vessel Operators List</h2>
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">ID</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Email</th>
//               <th className="py-2 px-4 border-b">Username</th>
//               <th className="py-2 px-4 border-b">Role</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vesselOperators.map((operator) => (
//               <tr key={operator.vesselOperatorId}>
//                 <td className="py-2 px-4 border-b">{operator.vesselOperatorId}</td>
//                 <td className="py-2 px-4 border-b">{operator.name}</td>
//                 <td className="py-2 px-4 border-b">{operator.email}</td>
//                 <td className="py-2 px-4 border-b">{operator.userName}</td>
//                 <td className="py-2 px-4 border-b">{operator.role}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button onClick={() => handleEdit(operator)} className="text-blue-500 hover:text-blue-700 mr-2">
//                     <FaEdit />
//                   </button>
//                   <button onClick={() => handleDelete(operator.vesselOperatorId)} className="text-red-500 hover:text-red-700">
//                     <FaTrash />
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

// export default VesselOperatorManagement;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from 'react-icons/fa';

function VesselOperatorManagement() {
  const [vesselOperators, setVesselOperators] = useState([]);
  const [operatorData, setOperatorData] = useState({
    vesselOperatorId: "",
    name: "",
    email: "",
    userName: "",
    password: "Vessel@123", // Hardcoded password
    role: "vesselOperator",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadVesselOperators();
  }, []);

  const loadVesselOperators = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/vesselOperator/all");
      setVesselOperators(response.data);
    } catch (error) {
      console.error("Error loading vessel operators:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOperatorData({ ...operatorData, [name]: value });
  };

  const validateForm = () => {
    const { name, userName, email } = operatorData;
    const newErrors = {};
    let isValid = true;

    // Basic field validation
    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!userName) {
      newErrors.userName = "Username is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8006/portDirector/vesselOperator/${operatorData.vesselOperatorId}`, operatorData);
        alert("Vessel Operator updated successfully!");
      } else {
        await axios.post("http://localhost:8006/portDirector/vesselOperator", operatorData);
        alert("Vessel Operator added successfully!");
        // Call this function after adding a new operator
        await sendEmail(operatorData.email, operatorData.userName, operatorData.password);
      }
      loadVesselOperators();
      resetForm();
    } catch (error) {
      console.error("Error saving vessel operator:", error);
    }
  };

  const resetForm = () => {
    setOperatorData({
      vesselOperatorId: "",
      name: "",
      email: "",
      userName: "",
      password: "Vessel@123", // Reset to hardcoded password
      role: "vesselOperator",
    });
    setErrors({});
    setIsEditing(false);
  };

  const handleEdit = (operator) => {
    setOperatorData({ ...operator });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this vessel operator?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8006/portDirector/vesselOperator/${id}`);
        alert("Vessel Operator deleted successfully!");
        loadVesselOperators();
      } catch (error) {
        console.error("Error deleting vessel operator:", error);
      }
    }
  };

  const sendEmail = async (email, userName, password) => {
    try {
      const emailData = {
        from: 'noreply@yourdomain.com',
        to: email,
        subject: 'Your Account Details',
        body: `Dear Vessel Operator,\n\nYour account has been created successfully.\n\nUsername: ${userName}\nPassword: ${password}\n\nPlease log in to your account using the following link:\nhttp://localhost:3000/login\n\nPlease keep this information secure.\n\nThank you!`,
      };
      await axios.post("http://localhost:8006/login/sendEmail", null, { params: emailData });
      alert("Email sent successfully!");
    } catch (error) {
      console.error('Email Send Error:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Vessel Operator" : "Add Vessel Operator"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={operatorData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={operatorData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={operatorData.userName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {isEditing ? "Update Operator" : "Add Operator"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Cancel
          </button>
        )}
      </form>

      <h3 className="text-lg font-semibold mt-8">Vessel Operators List</h3>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vesselOperators.map((operator) => (
            <tr key={operator.vesselOperatorId}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{operator.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{operator.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{operator.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEdit(operator)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(operator.vesselOperatorId)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VesselOperatorManagement;
