

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from 'react-icons/fa';

// function LogisticManagerManagement() {
//   const [logisticManagers, setLogisticManagers] = useState([]);
//   const [managerData, setManagerData] = useState({
//     name: "",
//     email: "",
//     userName: "",
//     password: "",
//     confirmPassword: "",
//     role: "logisticManager",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     loadLogisticManagers();
//   }, []);

//   const loadLogisticManagers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/logisticManager/all");
//       setLogisticManagers(response.data);
//     } catch (error) {
//       console.error("Error loading logistic managers:", error);
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!managerData.name) formErrors.name = "Name is required.";
//     if (!managerData.email) {
//       formErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(managerData.email)) {
//       formErrors.email = "Email is invalid.";
//     }
//     if (!managerData.userName) formErrors.userName = "Username is required.";
//     if (!managerData.password) formErrors.password = "Password is required.";
//     if (managerData.password !== managerData.confirmPassword)
//       formErrors.confirmPassword = "Passwords do not match.";
//     return formErrors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setManagerData({ ...managerData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:8006/portDirector/logisticManager/` + editingId, managerData);
//         alert("Logistic Manager updated successfully!");
//       } else {
//         await axios.post("http://localhost:8006/portDirector/logisticManager", managerData);
//         alert("Logistic Manager added successfully!");
//         await sendEmail(managerData.email, managerData.userName, managerData.password);
//       }
//       loadLogisticManagers();
//       resetForm();
//     } catch (error) {
//       console.error("Error adding/updating logistic manager:", error);
//     }
//   };

//   const sendEmail = async (email, userName, password) => {
//     try {
//       const emailData = {
//         from: 'noreply@yourdomain.com',
//         to: email,
//         subject: 'Your Account Details',
//         // body: `Dear ${managerData.name},\n\nYour account has been created successfully.\n\nUsername: ${userName}\nPassword: ${password}\n\nPlease keep this information secure.\n\nThank you!`,
//         body: `Dear ${managerData.name},\n\nYour account has been created successfully.\n\nUsername: ${userName}\nPassword: ${password}\n\nPlease log in to your account using the following link:\nhttp://localhost:3000/login\n\nPlease keep this information secure.\n\nThank you!`,
//       };
//       await axios.post('http://localhost:8006/login/sendEmail', null, {
//         params: emailData,
//       });
//     } catch (err) {
//       console.error('Email Send Error:', err);
//       alert('Failed to send email. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setManagerData({
//       name: "",
//       email: "",
//       userName: "",
//       password: "",
//       confirmPassword: "",
//       role: "logisticManager",
//     });
//     setIsEditing(false);
//     setEditingId(null);
//     setErrors({});
//   };

//   const handleEdit = (manager) => {
//     setManagerData({ ...manager, confirmPassword: manager.password });
//     setIsEditing(true);
//     setEditingId(manager.logisticManagerId);
//   };

//   const handleDelete = async (id) => {
//     const conf = window.confirm("Do you want to delete this logistic manager?");
//     if (conf) {
//       try {
//         await axios.delete(`http://localhost:8006/portDirector/logisticManager/${id}`);
//         alert("Logistic Manager deleted successfully!");
//         loadLogisticManagers();
//       } catch (error) {
//         console.error("Error deleting logistic manager:", error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Logistic Manager" : "Add Logistic Manager"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={managerData.name}
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
//             value={managerData.email}
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
//             value={managerData.userName}
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
//             value={managerData.password}
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
//             value={managerData.confirmPassword}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           {isEditing ? "Update" : "Add"} Logistic Manager
//         </button>
//       </form>

//       <h3 className="text-xl font-semibold mt-8">Logistic Managers List</h3>
//       <ul className="mt-4">
//         {logisticManagers.map((manager) => (
//           <li key={manager.logisticManagerId} className="mb-4 flex justify-between items-center">
//             <span>{manager.name} - {manager.email}</span>
//             <div>
//               <button className="mr-2 text-yellow-500" onClick={() => handleEdit(manager)}><FaEdit /></button>
//               <button className="text-red-500" onClick={() => handleDelete(manager.logisticManagerId)}><FaTrash /></button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LogisticManagerManagement;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from 'react-icons/fa';

function LogisticManagerManagement() {
  const [logisticManagers, setLogisticManagers] = useState([]);
  const [managerData, setManagerData] = useState({
    name: "",
    email: "",
    userName: "",
    role: "logisticManager",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadLogisticManagers();
  }, []);

  const loadLogisticManagers = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/logisticManager/all");
      setLogisticManagers(response.data);
    } catch (error) {
      console.error("Error loading logistic managers:", error);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!managerData.name) formErrors.name = "Name is required.";
    if (!managerData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(managerData.email)) {
      formErrors.email = "Email is invalid.";
    }
    if (!managerData.userName) formErrors.userName = "Username is required.";
    return formErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerData({ ...managerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8006/portDirector/logisticManager/` + editingId, {
          ...managerData,
          password: "Logi@123", // Hard-coded password
        });
        alert("Logistic Manager updated successfully!");
      } else {
        await axios.post("http://localhost:8006/portDirector/logisticManager", {
          ...managerData,
          password: "Logi@123", // Hard-coded password
        });
        alert("Logistic Manager added successfully!");
        await sendEmail(managerData.email, managerData.userName, "Logi@123"); // Hard-coded password
      }
      loadLogisticManagers();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating logistic manager:", error);
    }
  };

  const sendEmail = async (email, userName, password) => {
    try {
      const emailData = {
        from: 'noreply@yourdomain.com',
        to: email,
        subject: 'Your Account Details',
        body: `Dear Logistic Manager,\n\nYour account has been created successfully.\n\nUsername: ${userName}\nPassword: ${password}\n\nPlease log in to your account using the following link:\nhttp://localhost:3000/login\n\nPlease keep this information secure.\n\nThank you!`,
      };
      await axios.post('http://localhost:8006/login/sendEmail', null, {
        params: emailData,
      });
    } catch (err) {
      console.error('Email Send Error:', err);
      alert('Failed to send email. Please try again.');
    }
  };

  const resetForm = () => {
    setManagerData({
      name: "",
      email: "",
      userName: "",
      role: "logisticManager",
    });
    setIsEditing(false);
    setEditingId(null);
    setErrors({});
  };

  const handleEdit = (manager) => {
    setManagerData({
      name: manager.name,
      email: manager.email,
      userName: manager.userName,
      role: "logisticManager",
    });
    setIsEditing(true);
    setEditingId(manager.logisticManagerId);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this logistic manager?");
    if (conf) {
      try {
        await axios.delete(`http://localhost:8006/portDirector/logisticManager/${id}`);
        alert("Logistic Manager deleted successfully!");
        loadLogisticManagers();
      } catch (error) {
        console.error("Error deleting logistic manager:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Logistic Manager" : "Add Logistic Manager"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={managerData.name}
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
            value={managerData.email}
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
            value={managerData.userName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {isEditing ? "Update" : "Add"} Logistic Manager
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-8">Logistic Managers List</h3>
      {/* <ul className="mt-4">
        {logisticManagers.map((manager) => (
          <li key={manager.logisticManagerId} className="mb-4 flex justify-between items-center">
            <span>{manager.name} - {manager.userName} - {manager.email}</span>
            <div>
              <button className="mr-2 text-yellow-500" onClick={() => handleEdit(manager)}><FaEdit /></button>
              <button className="text-red-500" onClick={() => handleDelete(manager.logisticManagerId)}><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul> */}
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
    {logisticManagers.map((manager) => (
      <tr key={manager.logisticManagerId}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{manager.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.userName}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={() => handleEdit(manager)}
            className="text-yellow-600 hover:text-yellow-900 mr-4"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(manager.logisticManagerId)}
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

export default LogisticManagerManagement;
