


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaLock, FaUserAlt } from 'react-icons/fa';

// const LoginComponent = () => {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [user, setUser] = useState(null);
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

   
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         const HARD_CODED_USER = 'admin';
//         const HARD_CODED_PASSWORD = '1234';
//         if (userName === HARD_CODED_USER && password === HARD_CODED_PASSWORD) {
//             sessionStorage.setItem('portDirectorid', 1);
//             sessionStorage.setItem('portDirectorName',"Admin");
//             sessionStorage.setItem('login', "Yes");
//             navigate('/portDirectordashboard');
//             return;
//         }

//         try {
//             // Hardcoded check for portDirector

           

//             const response = await axios.post('http://localhost:8006/login', {
//                 userName,
//                 password
//             });

            

//             if (response.data) {
//                 const userData = response.data;
//                 setUser(userData);


//                 switch (userData.role) {
//                     case 'operationManager':
//                         sessionStorage.setItem('operationManagername', userData.name);
//                         sessionStorage.setItem('operationManagerid', userData.operationManagerId);
//                         sessionStorage.setItem('login', "Yes");
//                         navigate('/operationmanagerdashboard');
//                         break;
//                     case 'logisticManager':
//                         sessionStorage.setItem('logisticManagername', userData.name);
//                         sessionStorage.setItem('logisticManagerid', userData.logisticManagerId);
//                         sessionStorage.setItem('login', "Yes");
//                         navigate('/logisticManagerdashboard');
//                         break;
//                     case 'vesselOperator':
//                         sessionStorage.setItem('vesselOperatorname', userData.name);
//                         sessionStorage.setItem('vesselOperatorid', userData.vesselOperatorId);
//                         sessionStorage.setItem('login', "Yes");
//                         navigate('/VesselOperatorsdashboard');
//                         break;
//                     // case 'portDirector':
//                     //     sessionStorage.setItem('portDirectorid', userData.portDirectorId);
//                     //     navigate('/portDirectordashboard');
//                     //     break;
//                     default:
//                         setError('Unknown role');
//                         navigate('/');
//                         break;
//                 }
//             } else {
//                 setError('Login failed: Invalid username or password');
//                 navigate('/login');
//             }
//         } catch (error) {
//             setError('Login failed: Invalid username or password');
//             navigate('/login');
//         }
//     };


//     return (
//         <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//                 {message && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{message}</div>}
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-4">
//                         <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
//                         <div className="relative">
//                             <FaUserAlt className="absolute top-3 left-3 text-gray-500" />
//                             <input
//                                 id="userName"
//                                 type="text"
//                                 className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                 value={userName}
//                                 onChange={(e) => setUserName(e.target.value)}
                                
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                         <div className="relative">
//                             <FaLock className="absolute top-3 left-3 text-gray-500" />
//                             <input
//                                 id="password"
//                                 type="password"
//                                 className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
                                
//                             />
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center">
//                             <input type="checkbox" id="rememberMe" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//                             <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
//                         </div>
                        
//                     </div>
//                     {error && <p className="text-red-500 text-xs italic mt-2"> <b>Login failed:</b> Invalid username or password</p>}

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginComponent;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaLock, FaUserAlt } from 'react-icons/fa';

const LoginComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        // Check for empty inputs
        if (!userName.trim() || !password.trim()) {
            setError('Username and password cannot be empty');
            return;
        }

        const HARD_CODED_USER = 'admin';
        const HARD_CODED_PASSWORD = '1234';
        if (userName === HARD_CODED_USER && password === HARD_CODED_PASSWORD) {
            sessionStorage.setItem('portDirectorid', 1);
            sessionStorage.setItem('portDirectorName', "Admin");
            sessionStorage.setItem('login', "Yes");
            navigate('/portDirectordashboard');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8006/login', {
                userName,
                password
            });

            if (response.data) {
                const userData = response.data;

                switch (userData.role) {
                    case 'operationManager':
                        sessionStorage.setItem('operationManagername', userData.name);
                        sessionStorage.setItem('operationManagerid', userData.operationManagerId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/operationmanagerdashboard');
                        break;
                    case 'logisticManager':
                        sessionStorage.setItem('logisticManagername', userData.name);
                        sessionStorage.setItem('logisticManagerid', userData.logisticManagerId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/logisticManagerdashboard');
                        break;
                    case 'vesselOperator':
                        sessionStorage.setItem('vesselOperatorname', userData.name);
                        sessionStorage.setItem('vesselOperatorid', userData.vesselOperatorId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/VesselOperatorsdashboard');
                        break;
                    default:
                        setError('Invalid Username or Password');
                        break;
                }
            } else {
                setError('Login failed: Invalid username or password');
            }
        } catch (error) {
            setError('Login failed: Invalid username or password');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {message && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{message}</div>}
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                        <div className="relative">
                            <FaUserAlt className="absolute top-3 left-3 text-gray-500" />
                            <input
                                id="userName"
                                type="text"
                                className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <FaLock className="absolute top-3 left-3 text-gray-500" />
                            <input
                                id="password"
                                type="password"
                                className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
