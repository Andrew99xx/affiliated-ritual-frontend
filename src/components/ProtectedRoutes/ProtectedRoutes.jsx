import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../provider/Auth.provider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setRedirect(true); // Trigger navigation after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [loading, user]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while checking auth state
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  if (showMessage) {
    return <p>You are not logged in. Redirecting...</p>;
  }

  return children;
};

export default ProtectedRoute;
