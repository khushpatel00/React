import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="bricolage-grotesque text-5xl font-extrabold text-neutral-900 mb-4">
            Welcome to Hotel Manager
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Discover and manage hotel reservations with a clean, modern UI. Browse
            available rooms and create seamless bookings.
          </p>

          {isAuthenticated ? (
            <Link
              to="/rooms"
              className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 px-8 rounded transition"
            >
              Browse Rooms
            </Link>
          ) : (
            <div className="flex gap-4 justify-center">
              <Link
                to="/login"
                className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 px-8 rounded transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="inline-block bg-white border border-neutral-200 text-neutral-900 font-semibold py-3 px-8 rounded transition"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
            <div className="mb-4 flex items-center justify-center text-2xl">
              🤑 {/*biju ekay emoji haru nathi lagtu 🙂👍*/}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Rooms</h3>
            <p className="text-gray-600">
              Choose from our selection of luxurious rooms and suites
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
            <div className="mb-4 flex items-center justify-center text-2xl">
              😂
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Simple and secure reservation process with instant confirmation
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
            <div className="mb-4 flex items-center justify-center text-2xl">
              💸
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Competitive rates with exclusive deals for our loyal guests
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
