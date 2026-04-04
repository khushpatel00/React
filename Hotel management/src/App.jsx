import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase.config'
import { setCurrentUser, logout, setAuthLoading, getUserRoleAsync } from './Actions/hotelActions'

import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import RoomList from './components/RoomList'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import AddRoom from './pages/AddRoom'
import ManageReservations from './pages/ManageReservations'

function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        )
        dispatch(getUserRoleAsync(user.uid))
      } else {
        dispatch(logout())
      }
      dispatch(setAuthLoading(false))
    })

    return unsubscribe
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-gray-600 font-medium">Loading...</div>
      </div>
    )
  }

  return (
    <Router>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route
            path="/reservation"
            element={<PrivateRoute element={<ReservationForm />} />}
          />
          <Route
            path="/reservations"
            element={<PrivateRoute element={<ReservationList />} />}
          />
          <Route
            path="/add-room"
            element={<AdminRoute element={<AddRoom />} />}
          />
          <Route
            path="/manage-reservations"
            element={<AdminRoute element={<ManageReservations />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App




// admin = john@test.in pass = 123456
// user = johnwick@gmail.com pass = johnwick

// cloudinary ni api key kyay nathi muiki pan toyi image uplaod thay che
// cloud preset ane cloud name j aipu che, cloudinary na documentatoin ma kidhu che api aapvanu pan eeni vagar hale che 😛