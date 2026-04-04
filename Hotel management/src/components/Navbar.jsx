import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Actions/hotelActions'
import { auth } from '../firebase/firebase.config'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const { user, isAuthenticated, userRole } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <nav className="sticky bricolage-grotesque top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl text-black hover:text-neutral-600 transition">Hotel</Link>

        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/rooms" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
                Rooms
              </Link>
              <Link to="/reservations" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
                Reservations
              </Link>
              <Link to="/profile" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
                Profile
              </Link>
              {userRole === 'admin' && (
                <>
                  <Link to="/add-room" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
                    Add Room
                  </Link>
                  <Link to="/manage-reservations" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
                    Manage
                  </Link>
                </>
              )}

              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">{user?.displayName || user?.email}</span>
                <button onClick={handleLogout} className="px-4 py-2 border border-neutral-200 text-neutral-800 rounded hover:bg-neutral-50 transition">
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition">
                Sign In
              </Link>
              <Link to="/signup" className="px-4 py-2 border border-neutral-200 text-neutral-800 rounded hover:bg-neutral-50 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
