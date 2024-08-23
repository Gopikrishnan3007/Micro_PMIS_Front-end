


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ResetPassword = () => {
//   const [operatorData, setOperatorData] = useState(null);
//   const [username, setUsername] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const vesselOperatorId = sessionStorage.getItem('vesselOperatorid');
//     if (vesselOperatorId) {
//       axios.get(`http://localhost:8006/portDirector/vesselOperator/${vesselOperatorId}`)
//         .then(response => {
//           setOperatorData(response.data);
//         })
//         .catch(() => {
//           setErrorMessage('Failed to fetch vessel operator data.');
//         });
//     } else {
//       setErrorMessage('No Vessel Operator ID found in session.');
//     }
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!username) {
//       newErrors.username = 'Username is required.';
//     }

//     if (!currentPassword) {
//       newErrors.currentPassword = 'Current password is required.';
//     }

//     if (!newPassword) {
//       newErrors.newPassword = 'New password is required.';
//     } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
//       newErrors.newPassword = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character.';
//     }

//     if (!confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your new password.';
//     } else if (confirmPassword !== newPassword) {
//       newErrors.confirmPassword = 'New password and confirm password do not match.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlePasswordReset = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     if (!operatorData) {
//       setErrorMessage('Operator data not loaded yet.');
//       return;
//     }

//     if (username !== operatorData.userName || currentPassword !== operatorData.password) {
//       setErrorMessage('Invalid credentials.');
//       return;
//     }

//     const updatedOperatorData = { ...operatorData, password: newPassword };

//     try {
//       await axios.put(`http://localhost:8006/portDirector/vesselOperator/${operatorData.vesselOperatorId}`, updatedOperatorData);
//       setSuccessMessage('Password updated successfully.');
//       setErrorMessage('');
//     } catch {
//       setErrorMessage('Failed to update password.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Enter your username"
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Current Password</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Enter your current password"
//           />
//           {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Enter your new password"
//           />
//           {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Confirm your new password"
//           />
//           {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//         </div>
//         <button
//           onClick={handlePasswordReset}
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
//         >
//           Set New Password
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, message, onClose, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center">
          {isSuccess ? (
            <svg
              className="w-16 h-16 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="https://cdn-icons-png.flaticon.com/128/4436/4436481.png"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2l4-4m0 5a9 9 0 11-6.364-2.636l.707.707A7.5 7.5 0 1020 12H12z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-16 h-16 text-red-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2l2 2m0 6a9 9 0 11-6.364-2.636l.707.707A7.5 7.5 0 1020 12H12z"
              ></path>
            </svg>
          )}
          <h2 className="text-xl font-bold text-gray-800 mt-4">{isSuccess ? 'Success!' : 'Error!'}</h2>
          <p className="text-gray-600 mt-2">{message}</p>
          <button
            onClick={onClose}
            className={`mt-6 px-4 py-2 text-white rounded ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
          >
            {isSuccess ? 'Go to Dashboard' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const [operatorData, setOperatorData] = useState(null);
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const vesselOperatorId = sessionStorage.getItem('vesselOperatorid');
    if (vesselOperatorId) {
      axios.get(`http://localhost:8006/portDirector/vesselOperator/${vesselOperatorId}`)
        .then(response => {
          setOperatorData(response.data);
        })
        .catch(() => {
          setErrorMessage('Failed to fetch vessel operator data.');
        });
    } else {
      setErrorMessage('No Vessel Operator ID found in session.');
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required.';
    }

    if (!currentPassword) {
      newErrors.currentPassword = 'Current password is required.';
    }

    if (!newPassword) {
      newErrors.newPassword = 'New password is required.';
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
      newErrors.newPassword = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password.';
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'New password and confirm password do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordReset = async () => {
    if (!validateForm()) {
      return;
    }

    if (!operatorData) {
      setErrorMessage('Operator data not loaded yet.');
      return;
    }

    if (username !== operatorData.userName || currentPassword !== operatorData.password) {
      setErrorMessage('Invalid credentials.');
      return;
    }

    const updatedOperatorData = { ...operatorData, password: newPassword };

    try {
      await axios.put(`http://localhost:8006/portDirector/vesselOperator/${operatorData.vesselOperatorId}`, updatedOperatorData);
      setSuccessMessage('Password updated successfully.');
      setErrorMessage('');
      setIsSuccess(true);
      setIsModalOpen(true);
    } catch {
      setErrorMessage('Failed to update password.');
      setIsSuccess(false);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (isSuccess) {
      window.location.href = '/vesselOperatorsdashboard'; // Redirect to dashboard on success
    } else {
      window.location.reload(); // Refresh the page on failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your current password"
          />
          {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your new password"
          />
          {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Confirm your new password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          onClick={handlePasswordReset}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Set New Password
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        message={isSuccess ? 'Your password has been updated successfully!' : 'There was an error updating your password. Please try again.'}
        onClose={handleCloseModal}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default ResetPassword;
