import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReservations, updateReservation, cancelReservation } from '../Actions/hotelActions'
import { setFilter } from '../Actions/hotelActions'

const ReservationList = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.reservations)
  const { user } = useSelector((state) => state.auth)
  const { filters } = useSelector((state) => state.filters)
  const [editingId, setEditingId] = useState(null)
  const [editData, setEditData] = useState({})
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user?.uid) {
      dispatch(fetchReservations(user.uid))
    }
  }, [dispatch, user])

  const handleStatusFilter = (status) => {
    dispatch(setFilter({ reservationStatus: status }))
  }

  const handleEditClick = (reservation) => {
    setEditingId(reservation.id)
    setEditData({
      checkInDate: reservation.checkInDate,
      checkOutDate: reservation.checkOutDate,
      specialRequests: reservation.specialRequests,
    })
  }

  const handleSaveEdit = async (reservationId) => {
    try {
      await dispatch(updateReservation(reservationId, editData))
      setEditingId(null)
      setMessage('Reservation updated successfully')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Update failed:', err)
    }
  }

  const handleCancel = async (reservationId) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      try {
        await dispatch(cancelReservation(reservationId))
        setMessage('Reservation cancelled successfully')
        setTimeout(() => setMessage(''), 3000)
      } catch (err) {
        console.error('Cancel failed:', err)
      }
    }
  }

  const getFilteredReservations = () => {
    if (filters.reservationStatus === 'all') return items

    return items.filter(
      (reservation) => reservation.status === filters.reservationStatus
    )
  }

  const filteredReservations = getFilteredReservations()

  if (loading && items.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-gray-600 font-medium">Loading reservations...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Reservations</h1>

      {message && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      <div className="flex gap-2 mb-6">
        {['all', 'confirmed', 'pending', 'cancelled', 'checked-in', 'checked-out'].map(
          (status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`px-4 py-2 rounded font-medium transition ${filters.reservationStatus === status
                  ? 'bg-neutral-900 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          )
        )}
      </div>

      {filteredReservations.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-lg">No reservations found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredReservations.map((reservation) => (
            <div
              key={reservation.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              {editingId === reservation.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={editData.checkInDate}
                        onChange={(e) =>
                          setEditData({ ...editData, checkInDate: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={editData.checkOutDate}
                        onChange={(e) =>
                          setEditData({ ...editData, checkOutDate: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={editData.specialRequests}
                      onChange={(e) =>
                        setEditData({ ...editData, specialRequests: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
                      rows="3"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(reservation.id)}
                      className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded font-medium transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Reservation ID</p>
                      <p className="text-gray-900 font-semibold">{reservation.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Room</p>
                      <p className="text-gray-900 font-semibold">
                        {reservation.roomId}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Check-in</p>
                      <p className="text-gray-900 font-semibold">
                        {reservation.checkInDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Check-out</p>
                      <p className="text-gray-900 font-semibold">
                        {reservation.checkOutDate}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Guest</p>
                      <p className="text-gray-900 font-semibold">
                        {reservation.guestName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Email</p>
                      <p className="text-gray-900 text-sm">{reservation.guestEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Total Price</p>
                      <p className="text-gray-900 font-bold">
                        ${reservation.totalPrice?.toFixed(2) || '0.00'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Status</p>
                      <span
                        className={`inline-block text-xs font-semibold px-2 py-1 rounded ${reservation.status === 'confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : reservation.status === 'pending'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                      >
                        {reservation.status?.toUpperCase() || 'PENDING'}
                      </span>
                    </div>
                  </div>

                  {reservation.specialRequests && (
                    <div className="bg-gray-50 p-3 rounded mb-4">
                      <p className="text-sm text-gray-600 font-medium">
                        Special Requests
                      </p>
                      <p className="text-gray-700">{reservation.specialRequests}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {reservation.status !== 'cancelled' &&
                      reservation.status !== 'checked-out' && (
                        <>
                          <button
                            onClick={() => handleEditClick(reservation)}
                            className="bg-gray-700 hover:bg-gray-600 text-gray-50 px-4 py-2 rounded font-medium transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleCancel(reservation.id)}
                            className="bg-gray-600 hover:bg-gray-500 text-gray-50 px-4 py-2 rounded font-medium transition"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReservationList
