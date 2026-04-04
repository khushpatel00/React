import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserAsAdminAsync } from '../Actions/hotelActions'

const Profile = () => {
  const { user, userRole } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl text-gray-600 font-bold">U</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {user.displayName || 'User'}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Full Name</p>
              <p className="text-lg text-gray-900 font-semibold">
                {user.displayName || 'Not provided'}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Email</p>
              <p className="text-lg text-gray-900 font-semibold">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">User ID</p>
              <p className="text-sm text-gray-700 font-mono break-all">{user.uid}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Account Status</p>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded">
                Active
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Role</p>
              <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                {userRole || 'user'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/rooms')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-3 px-4 rounded transition text-left"
            >
              Browse Rooms
            </button>
            <button
              onClick={() => navigate('/reservations')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-3 px-4 rounded transition text-left"
            >
              My Reservations
            </button>
          </div>
          {/* <div className="mt-4">
            {userRole !== 'admin' && (
              <button
                onClick={() => dispatch(setUserAsAdminAsync(user.uid))}
                className="px-4 py-2 bg-neutral-900 text-white rounded"
              >
                Make me Admin
              </button>
            )}
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Profile
