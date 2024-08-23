

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShip, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'; // Add icons

const ShipList = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);

  useEffect(() => {
    // Get vesselOperatorId from session storage
    const vesselOperatorId = sessionStorage.getItem('vesselOperatorid');
    console.log('Vessel Operator ID:', vesselOperatorId);

    // Fetch ships using the vesselOperatorId
    const fetchShips = async () => {
      try {
        const response = await axios.get(`http://localhost:8006/portDirector/getshipbyvesselOperator/${vesselOperatorId}`);
        setShips(response.data);
      } catch (error) {
        console.error('Error fetching ships:', error);
      }
    };

    fetchShips();
  }, []);

  // Handle the "Track" button click
  const handleTrackClick = (ship) => {
    setSelectedShip(ship);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ships.length > 0 ? (
            ships.map(ship => (
              <div key={ship.shipId} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Ship ID: {ship.shipId}</h3>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Ship Name:</span> {ship.shipName}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">IMO Number:</span> {ship.imoNumber}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">MMSI Number:</span> {ship.mmsiNumber}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Type of Ship:</span> {ship.typeOfShip}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Previous Port:</span> {ship.previousPort}</p>
                  <p className="text-gray-700 mb-4"><span className="font-bold">Arrival Date and Time:</span> {ship.arrivalDateTime}</p>
                  <button 
                    onClick={() => handleTrackClick(ship)} 
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Track
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No ships found for this Vessel Operator.</p>
          )}
        </div>

        {/* Tracking Information */}
        {selectedShip && (
          <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Tracking Information</h2>
            <div className="flex flex-col space-y-4">
            <div className="flex items-center">
                <FaShip className="text-blue-500 mr-2" />
                <span className="font-semibold">Ship Name:</span> {selectedShip.shipName}
              </div>
              <div className="flex items-center">
                <FaShip className="text-blue-500 mr-2" />
                <span className="font-semibold">Ship ID:</span> {selectedShip.shipId}
              </div>
              <div className="flex items-center">
                <FaInfoCircle className="text-yellow-500 mr-2" />
                <span className="font-semibold">Request Status:</span> {selectedShip.request}
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-500 mr-2" />
                <span className="font-semibold">Berth:</span> {selectedShip.berth}
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-red-500 mr-2" />
                <span className="font-semibold">Arrival Date and Time:</span> {selectedShip.arrivalDateTime}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipList;
