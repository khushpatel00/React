import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600 font-medium">Loading...</div>
      </div>
    )
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />
}

export default PrivateRoute
