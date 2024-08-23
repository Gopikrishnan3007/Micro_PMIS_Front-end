

// // import React from 'react';
// // import { FaTwitter, FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';
// // import { FaPlus, FaEdit, FaEye, FaSignInAlt } from 'react-icons/fa';

// // function Home() {
// //   return (
// //     <div className="font-sans bg-gray-50 text-gray-800">
// //       {/* Navbar */}
// //       <nav className="bg-blue-600 text-white shadow-md">
// //         <div className="container mx-auto flex justify-between items-center p-4">
// //           <div className="text-xl font-bold">MyLogo</div>
// //           <ul className="flex space-x-4">
// //             <li>
// //               <a href="/create" className="flex items-center text-white hover:text-gray-300 transition">
// //                 <FaPlus className="mr-2" /> Highlights
// //               </a>
// //             </li>
// //             <li>
// //               <a href="/update" className="flex items-center text-white hover:text-gray-300 transition">
// //                 <FaEdit className="mr-2" /> For Details
// //               </a>
// //             </li>
// //             <li>
// //               <a href="/viewtrack" className="flex items-center text-white hover:text-gray-300 transition">
// //                 <FaEye className="mr-2" /> Location
// //               </a>
// //             </li>
// //           </ul>
// //           <div>
// //           <a href="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition">
// //               <FaSignInAlt className="mr-2" /> Login
// //             </a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <div className="relative bg-cover bg-center h-[calc(100vh-4rem)] flex items-center justify-center bg-blue-700 text-white" style={{ backgroundImage: `url('https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
// //         <div className="absolute inset-0 bg-black opacity-50"></div>
// //         <div className="relative z-10 text-center p-6">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">Discover the port's essence at first glance.</h1>
// //           <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Experience the vibrancy and beauty of the port through our curated insights.</p>
// //           <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-300 transition">Login to Dashboard</button>
// //         </div>
// //       </div>

// //       {/* Capacity Section */}
// //       <div className="flex flex-col md:flex-row items-center justify-around p-8">
// //         <div className="md:w-1/2 p-4">
// //           <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Capacity" />
// //         </div>
// //         <div className="md:w-1/2 p-4">
// //           <h2 className="text-3xl font-semibold mb-4">Explore the port’s capacity.</h2>
// //           <p className="text-lg">Discover the potential of our port facilities, including storage, shipping, and logistics capabilities that can cater to your needs.</p>
// //         </div>
// //       </div>

// //       {/* Excellence Section */}
// //       <div className="p-8 bg-gray-100">
// //         <h2 className="text-3xl font-semibold text-center mb-6">Experience excellence in port operations.</h2>
// //         <div className="flex justify-center">
// //           <img className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/4353558/pexels-photo-4353558.jpeg?auto=compress&cs=tinysrgb&w=600" alt="World Map with Port Locations" />
// //         </div>
// //       </div>

// //       {/* Integration Section */}
// //       <div className="p-8">
// //         <h2 className="text-3xl font-semibold mb-6 text-center">Integrate with essential tools.</h2>
// //         <div className="flex justify-center space-x-6 mb-6">
// //           <FaGoogle className="text-4xl text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110" />
// //           <FaGithub className="text-4xl text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110" />
// //           {/* Add more icons as needed */}
// //         </div>
// //         <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">Connect tools</button>
// //       </div>

// //       {/* Solutions Section */}
// //       <div className="p-8 bg-gray-200">
// //         <h2 className="text-3xl font-semibold mb-6 text-center">Tailored solutions for all needs.</h2>
// //         <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
// //           <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg text-center">
// //             <img className="w-full h-40 object-cover rounded-t-lg" src="https://images.pexels.com/photos/4353558/pexels-photo-4353558.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Location" />
// //             <h3 className="text-xl font-semibold mt-4">Location</h3>
// //             <p className="text-gray-600 mt-2">Explore our strategic locations that provide easy access to major shipping routes and logistics networks.</p>
// //             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">Browse now</button>
// //           </div>
// //           <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg text-center">
// //             <img className="w-full h-40 object-cover rounded-t-lg" src="https://images.pexels.com/photos/1117211/pexels-photo-1117211.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Operations" />
// //             <h3 className="text-xl font-semibold mt-4">Operations</h3>
// //             <p className="text-gray-600 mt-2">Discover our efficient port operations designed to enhance productivity and reduce turnaround times.</p>
// //             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">Browse now</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Trial Section */}
// //       <div className="p-8 bg-blue-600 text-white text-center">
// //         <h2 className="text-3xl font-semibold mb-4">Start your trial now.</h2>
// //         <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-300 transition mr-4">Start trial</button>
// //         <button className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition">Contact Sales</button>
// //       </div>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white p-8">
// //         <div className="flex flex-col md:flex-row justify-between mb-6">
// //           <div className="md:w-1/3">
// //             <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
// //             <p>Email: info@example.com</p>
// //             <p>Phone: +1 234 567 890</p>
// //             <p>Address: 123 Port St, Harbor City</p>
// //           </div>
// //           <div className="md:w-1/3 text-center">
// //             <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
// //             <div className="flex justify-center space-x-4">
// //               <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition"><FaTwitter size={24} /></a>
// //               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition"><FaLinkedin size={24} /></a>
// //             </div>
// //           </div>
// //           <div className="md:w-1/3 text-center">
// //             <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
// //             <div className="flex items-center justify-center">
// //               <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border border-gray-300" />
// //               <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition">Subscribe</button>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default Home; 


// import React from 'react';
// import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-white text-2xl font-bold">
//             PortPo
//           </div>
//           <div className="hidden md:flex space-x-4">
//             {/* <a href="#" className="text-white">Highlights</a>
//             <a href="#" className="text-white">Port Details</a>
//             <a href="#" className="text-white">Locations</a>
//             <a href="#" className="text-white">Operations</a>
//             <a href="#" className="text-white">Latest</a> */}
//           </div>
//           <div className="space-x-4">
//             <a href="/login"><button className="text-white bg-green-500 px-4 py-2 rounded flex items-center space-x-2">
//               <FaSignInAlt /> <span>Login</span>
//             </button></a>
//           </div>
//         </div>
//       </nav>


//       <div className="relative bg-cover bg-center h-[calc(100vh-4rem)] flex items-center justify-center bg-blue-700 text-white" style={{ backgroundImage: `url('https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center p-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">Discover the port's essence at first glance.</h1>
//           <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Experience the vibrancy and beauty of the port through our curated insights.</p>
//           <a href='/login'><button className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-300 transition">Login to Dashboard</button></a>
//         </div>
//       </div>
//       {/* Hero Section */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto flex flex-col items-center text-center">
//           <h1 className="text-4xl font-bold mb-6">Discover the port's essence at first glance</h1>
//           <p className="text-gray-600 mb-6">Simplified and functional design for easy access.</p>
//           <img src="https://images.pexels.com/photos/2231744/pexels-photo-2231744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Overview" className="w-full max-w-md" />
//           <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Explore the PMIS</button>
//         </div>
//       </section>

//       {/* Sections */}
//       <section className="bg-gray-50 py-20">
//         <div className="container mx-auto grid md:grid-cols-2 gap-10">
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-2xl font-bold mb-4">Explore the port's capacity</h2>
//             <p className="text-gray-600 mb-4">Adapting to the evolving port landscape for efficient operations.</p>
//             <img src="https://images.pexels.com/photos/2217513/pexels-photo-2217513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Capacity" className="w-full max-w-sm" />

//           </div>
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-2xl font-bold mb-4">Tailored solutions for all needs</h2>
//             <p className="text-gray-600 mb-4">From small ports to busy terminals, find solutions tailored to your requirements.</p>
//             <img src="https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Solutions" className="w-full max-w-sm" />
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="bg-gray-100 p-6 rounded shadow-lg">
//               <img src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case Study 1" className="w-full h-48 object-cover mb-4" />
//               <h3 className="text-xl font-bold mb-2">Attract port traffic</h3>
//               <p className="text-gray-600">Drive port growth with effective marketing strategies.</p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded shadow-lg">
//               <img src="https://w0.peakpx.com/wallpaper/325/385/HD-wallpaper-container-ship-edith-maersk-delivery-of-containers-delivery-transportation-of-goods-by-sea-shipping-large-container-ship-maersk-line.jpg" alt="Case Study 2" className="w-full h-48 object-cover mb-4" />
//               <h3 className="text-xl font-bold mb-2">Boost port revenue</h3>
//               <p className="text-gray-600">Strategize operations to maximize revenue streams.</p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded shadow-lg">
//               <img src="https://i.pinimg.com/736x/46/07/bd/4607bd4874fa379336fd189d4372088f.jpg" alt="Case Study 3" className="w-full h-48 object-cover mb-4" />
//               <h3 className="text-xl font-bold mb-2">Fundraising solutions</h3>
//               <p className="text-gray-600">Collaborate for fundraising and secure new funds.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="flex flex-col md:flex-row items-center justify-around p-8">
//         <div className="md:w-1/2 p-4">
//           <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Capacity" />
//         </div>
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-3xl font-semibold mb-4">Explore the port’s capacity.</h2>
//           <p className="text-lg">Discover the potential of our port facilities, including storage, shipping, and logistics capabilities that can cater to your needs.</p>
//         </div>
//       </div>
      

//       {/* Footer */}
//       <footer className="bg-gray-50 py-10">
//         <div className="container mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-6">Start your trial now</h2>
//           <button className="bg-green-500 text-white px-6 py-3 rounded mb-6">Start Trial</button>
//           <p className="text-gray-600">Begin your free trial without providing credit card details.</p>
//           <div className="flex justify-center space-x-4 mt-6">
//             <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { FaSignInAlt, FaUserPlus, FaInfoCircle, FaTools, FaMapMarkerAlt, FaHandshake, FaChartLine } from 'react-icons/fa';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            PMIS
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#highlights" className="text-white flex items-center space-x-2">
              <FaInfoCircle /> <span>Highlights</span>
            </a>
            <a href="#capacity" className="text-white flex items-center space-x-2">
              <FaTools /> <span>Capacity</span>
            </a>
            <a href="#solutions" className="text-white flex items-center space-x-2">
              <FaMapMarkerAlt /> <span>Solutions</span>
            </a>
            <a href="#case-studies" className="text-white flex items-center space-x-2">
              <FaChartLine /> <span>Case Studies</span>
            </a>
          </div>
          <div className="space-x-4">
            <a href="/login">
              <button className="text-white bg-green-500 px-4 py-2 rounded flex items-center space-x-2">
                <FaSignInAlt /> <span>Login</span>
              </button>
            </a>
            {/* <a href="/register">
              <button className="text-white bg-blue-500 px-4 py-2 rounded flex items-center space-x-2">
                <FaUserPlus /> <span>Register</span>
              </button>
            </a> */}
          </div>
        </div>
      </nav>
      <HomeCarousel />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[calc(100vh-4rem)] flex items-center justify-center bg-blue-700 text-white" style={{ backgroundImage: `url('https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">Discover the port's essence at first glance.</h1>
          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Experience the vibrancy and beauty of the port through our curated insights.</p>
          <a href='/login'><button className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-300 transition">Login to Dashboard</button></a>
        </div>
      </div>

      {/* Highlights Section */}
      <section id="highlights" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Port Highlights</h2>
          <p className="text-gray-600 mb-6">Explore the key features and benefits of our port facilities.</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
              <p className="text-gray-600">Located at a prime spot for major shipping routes.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaTools className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Advanced Facilities</h3>
              <p className="text-gray-600">Equipped with the latest technology for efficient operations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaHandshake className="text-4xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Solutions</h3>
              <p className="text-gray-600">Partner with us for tailored solutions to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section id="capacity" className="bg-gray-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 p-4">
            <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Capacity" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4">Explore the port’s capacity.</h2>
            <p className="text-lg">Discover the potential of our port facilities, including storage, shipping, and logistics capabilities that can cater to your needs.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Tailored Solutions for All Needs</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img className="w-full h-40 object-cover rounded-t-lg mb-4" src="https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Solution 1" />
              <h3 className="text-xl font-semibold mb-2">Resource Optimization</h3>
              <p className="text-gray-600">Efficient resource management for optimized operations.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">Learn More</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img className="w-full h-40 object-cover rounded-t-lg mb-4" src="https://images.pexels.com/photos/2217513/pexels-photo-2217513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Solution 2" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Logistics</h3>
              <p className="text-gray-600">Advanced logistics solutions for smooth operations.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case Study 1" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Attract Port Traffic</h3>
              <p className="text-gray-600">Drive port growth with effective marketing strategies.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://w0.peakpx.com/wallpaper/325/385/HD-wallpaper-container-ship-edith-maersk-delivery-of-containers-delivery-transportation-of-goods-by-sea-shipping-large-container-ship-maersk-line.jpg" alt="Case Study 2" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Efficiency Enhancements</h3>
              <p className="text-gray-600">Implement new technologies for streamlined operations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/14427459/pexels-photo-14427459.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case Study 3" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Enhance customer experience with tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Port Management Information System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
