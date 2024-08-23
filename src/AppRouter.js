import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewPliceStation from './components/View/ViewPoliceStation';
import ViewFIR from './components/View/ViewFIR';


import './index.css';
import Editpayroll from './components/Edit/EditPoliceStation';
import AddPayroll from './components/Add/AddPoliceStation';
import Home from './components/Home/Home';
import LoginComponent from './components/Auth/LoginComponent';
import ViewTrack from './components/OperationManager/ManageTrack';
import PortDirectorDashboard from './components/PortDirector/portDirectordashboard';
import Operationmanagerdashboard from './components/OperationManager/Operationmanagerdashboard';
import ProtectedRoute from './components/Prodect/ProtectedRoute';
import Error404 from './components/Error/Error404';
import LogisticManagerDashboard from './components/LogisticManager/LogisticManagerdashboard';
import VesselOperatorsDashboard from './components/vesselOperators/VesselOperatorsdashboard';
import Track from './components/vesselOperators/Track';
import UpdatePasswordComponent from './components/Auth/UpdatePasswordComponent';



function AppRouter() {
  return (
    <Router class="head">
      <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/viewtrack" element={<ViewTrack />} />
        <Route path="/operationmanagerdashboard" element={<Operationmanagerdashboard />} />
        <Route path="/portDirectordashboard" element={<PortDirectorDashboard />} />
        <Route path="/logisticManagerdashboard" element = {<LogisticManagerDashboard />} />
        <Route path="/vesselOperatorsdashboard" element = {<VesselOperatorsDashboard />} />
        <Route path="/track" element = {<Track />} />
        <Route path="/update-password" element={<UpdatePasswordComponent />} />


      
        <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;