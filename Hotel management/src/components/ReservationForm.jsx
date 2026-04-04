import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { createReservation } from '../Actions/hotelActions'

const ReservationForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const room = location.state?.room
  const { loading, error } = useSelector((state) => state.reservations)
  const { user } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    roomId: room?.id || '',
    checkInDate: '',
    checkOutDate: '',
    guestName: user?.displayName || '',
    guestEmail: user?.email || '',
    guestPhone: '',
    specialRequests: '',
  })

  const [formError, setFormError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calculateNights = () => {
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate)
      const checkOut = new Date(formData.checkOutDate)
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
      return nights > 0 ? nights : 0
    }
    return 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')

    if (
      !formData.checkInDate ||
      !formData.checkOutDate ||
      !formData.guestName ||
      !formData.guestEmail
    ) {
      setFormError('Please fill in all required fields')
      return
    }

    const checkIn = new Date(formData.checkInDate)
    const checkOut = new Date(formData.checkOutDate)

    if (checkIn >= checkOut) {
      setFormError('Check-out date must be after check-in date')
      return
    }

    try {
      const reservationData = {
        ...formData,
        userId: user.uid,
        roomPrice: room.price,
        totalPrice: room.price * calculateNights(),
        nights: calculateNights(),
      }

      await dispatch(createReservation(reservationData))
      navigate('/reservations', {
        state: { message: 'Reservation created successfully!' },
      })
    } catch (err) {
      setFormError(err.message || 'Failed to create reservation')
    }
  }

  if (!room) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          Please select a room first
        </div>
      </div>
    )
  }

  const nights = calculateNights()
  const totalPrice = room.price * nights

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Reservation</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="text-sm text-gray-600 font-medium">Selected Room</p>
              <p className="text-lg font-bold text-gray-900">
                {room.name || `Room ${room.id}`} - ${room.price}/night
              </p>
            </div>

            {formError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded">
                {formError}
              </div>
            )}

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Check-in Date *
              </label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
                required
              />
            </div>

             <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Check-out Date *
              </label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
                required
              />
            </div>

             <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Email *
              </label>
              <input
                type="email"
                name="guestEmail"
                value={formData.guestEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="guestPhone"
                value={formData.guestPhone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
              />
            </div>

             <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
              />
            </div>

             <button
              type="submit"
              disabled={loading}
              className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:bg-gray-400 text-white font-bold py-3 rounded transition"
            >
              {loading ? 'Processing...' : 'Confirm Reservation'}
            </button>
          </div>
        </form>

         <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Reservation Summary
            </h2>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Room:</span>
                <span className="font-semibold text-gray-900">
                  {room.name || `Room ${room.id}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-in:</span>
                <span className="font-semibold text-gray-900">
                  {formData.checkInDate || 'Not selected'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-out:</span>
                <span className="font-semibold text-gray-900">
                  {formData.checkOutDate || 'Not selected'}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="text-gray-600">Number of Nights:</span>
                <span className="font-bold text-gray-900">{nights}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price per Night:</span>
                <span className="font-semibold text-gray-900">${room.price}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm
