// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

// function OperationManagerManagement() {
//   const [operationManagers, setOperationManagers] = useState([]);
//   const [managerData, setManagerData] = useState({
//     name: "",
//     userName: "",
//     password: "",
//     role: "operationManager",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     loadOperationManagers();
//   }, []);

//   const loadOperationManagers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8006/portDirector/operationManager/all");
//       setOperationManagers(response.data);
//     } catch (error) {
//       console.error("Error loading operation managers:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setManagerData({ ...managerData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:8006/portDirector/operationManager/` + editingId, managerData);
//         alert("Operation Manager updated successfully!");
//       } else {
//         await axios.post("http://localhost:8006/portDirector/operationManager", managerData);
//         alert("Operation Manager added successfully!");
//       }
//       loadOperationManagers();
//       resetForm();
//     } catch (error) {
//       console.error("Error adding/updating operation manager:", error);
//     }
//   };

//   const resetForm = () => {
//     setManagerData({
//       name: "",
//       userName: "",
//       password: "",
//       role: "operationManager",
//     });
//     setIsEditing(false);
//     setEditingId(null);
//   };

//   const handleEdit = (manager) => {
//     setManagerData({
//       name: manager.name,
//       userName: manager.userName,
//       password: manager.password,
//       role: manager.role,
//     });
//     setIsEditing(true);
//     setEditingId(manager.operationManagerId);
//   };

//   const handleDelete = async (id) => {
//     const conf = window.confirm("Do you want to delete this operation manager?");
//     if (conf) {
//       try {
//         await axios.delete(`http://localhost:8006/portDirector/operationManager/${id}`);
//         alert("Operation Manager deleted successfully!");
//         loadOperationManagers();
//       } catch (error) {
//         console.error("Error deleting operation manager:", error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Operation Manager" : "Add Operation Manager"}</h2>
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
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           {isEditing ? "Update Manager" : "Add Manager"}
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

//       {/* Operation Manager Table */}
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-4">Operation Manager List</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="py-3 px-4 text-left border-b font-medium">Manager ID</th>
//                 <th className="py-3 px-4 text-left border-b font-medium">Name</th>
//                 <th className="py-3 px-4 text-left border-b font-medium">Username</th>
//                 <th className="py-3 px-4 text-left border-b font-medium">Password</th>
//                 <th className="py-3 px-4 text-left border-b font-medium">Role</th>
//                 <th className="py-3 px-4 text-left border-b font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {operationManagers.map((manager) => (
//                 <tr key={manager.operationManagerId} className="border-b">
//                   <td className="py-2 px-4 text-gray-700">{manager.operationManagerId}</td>
//                   <td className="py-2 px-4 text-gray-700">{manager.name}</td>
//                   <td className="py-2 px-4 text-gray-700">{manager.userName}</td>
//                   <td className="py-2 px-4 text-gray-700">{manager.password}</td>
//                   <td className="py-2 px-4 text-gray-700">{manager.role}</td>
//                   <td className="py-2 px-4 flex space-x-4">
//                     <button
//                       onClick={() => handleEdit(manager)}
//                       className="text-blue-500 hover:text-blue-700"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(manager.operationManagerId)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OperationManagerManagement;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function OperationManagerManagement() {
  const [operationManagers, setOperationManagers] = useState([]);
  const [managerData, setManagerData] = useState({
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
    role: "operationManager",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadOperationManagers();
  }, []);

  const loadOperationManagers = async () => {
    try {
      const response = await axios.get("http://localhost:8006/portDirector/operationManager/all");
      setOperationManagers(response.data);
    } catch (error) {
      console.error("Error loading operation managers:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerData({ ...managerData, [name]: value });
  };

  const validateForm = () => {
    const { name, userName, password, confirmPassword } = managerData;
    const newErrors = {};
    let isValid = true;

    // Basic field validation
    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!userName) {
      newErrors.userName = "Username is required";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must contain at least one number, one uppercase letter, and one special character.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validatePassword = (password) => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasSpecialChar = /[^A-Za-z0-9]/;
    return hasNumber.test(password) && hasUpperCase.test(password) && hasSpecialChar.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8006/portDirector/operationManager/${editingId}`, managerData);
        alert("Operation Manager updated successfully!");
      } else {
        await axios.post("http://localhost:8006/portDirector/operationManager", managerData);
        alert("Operation Manager added successfully!");
      }
      loadOperationManagers();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating operation manager:", error);
    }
  };

  const resetForm = () => {
    setManagerData({
      name: "",
      userName: "",
      password: "",
      confirmPassword: "",
      role: "operationManager",
    });
    setErrors({});
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (manager) => {
    setManagerData({
      name: manager.name,
      userName: manager.userName,
      password: manager.password,
      confirmPassword: manager.password, // Set confirmPassword to match the existing password for editing
      role: manager.role,
    });
    setIsEditing(true);
    setEditingId(manager.operationManagerId);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this operation manager?");
    if (conf) {
      try {
        await axios.delete(`http://localhost:8006/portDirector/operationManager/${id}`);
        alert("Operation Manager deleted successfully!");
        loadOperationManagers();
      } catch (error) {
        console.error("Error deleting operation manager:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Operation Manager" : "Add Operation Manager"}</h2>
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={managerData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={managerData.confirmPassword}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isEditing ? "Update Manager" : "Add Manager"}
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

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Operation Manager List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left border-b font-medium">Manager ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Name</th>
                <th className="py-3 px-4 text-left border-b font-medium">Username</th>
                <th className="py-3 px-4 text-left border-b font-medium">Password</th>
                <th className="py-3 px-4 text-left border-b font-medium">Role</th>
                <th className="py-3 px-4 text-left border-b font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {operationManagers.map((manager) => (
                <tr key={manager.operationManagerId} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{manager.operationManagerId}</td>
                  <td className="py-2 px-4 text-gray-700">{manager.name}</td>
                  <td className="py-2 px-4 text-gray-700">{manager.userName}</td>
                  <td className="py-2 px-4 text-gray-700">{manager.password}</td>
                  <td className="py-2 px-4 text-gray-700">{manager.role}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(manager)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(manager.operationManagerId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
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

export default OperationManagerManagement;
