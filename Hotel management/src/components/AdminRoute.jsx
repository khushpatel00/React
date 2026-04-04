import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = ({ element }) => {
  const { isAuthenticated, loading, userRole } = useSelector((state) => state.auth)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600 font-medium">Loading...</div>
      </div>
    )
  }

  return isAuthenticated && userRole === 'admin' ? element : <Navigate to="/" replace />
}

export default AdminRoute
