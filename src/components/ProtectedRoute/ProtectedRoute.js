import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, loggedIn  }) => {
  return (
    loggedIn ? Component : <Navigate to="/signin" replace/>
)}

export default ProtectedRouteElement;