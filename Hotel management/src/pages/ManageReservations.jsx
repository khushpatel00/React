import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllReservations, updateReservation } from '../Actions/hotelActions'

const ManageReservations = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, loading, error } = useSelector((state) => state.reservations)
  const [updatingId, setUpdatingId] = useState(null)

  useEffect(() => {
    dispatch(fetchAllReservations())
  }, [dispatch])

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id)
    try {
      await dispatch(updateReservation(id, { status: newStatus }))
    } catch (err) {
      console.error('Failed to update status', err)
    } finally {
      setUpdatingId(null)
    }
  }

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return <div className="p-6 text-rose-700">Error: {error}</div>

  const statusOptions = ['pending', 'confirmed', 'cancelled', 'checked-in', 'checked-out']

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Reservations</h1>
      <div className="space-y-4">
        {items.map((r) => (
          <div key={r.id} className="bg-white p-4 rounded border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="text-sm text-gray-600">Reservation ID</div>
                <div className="font-medium text-gray-900">{r.id}</div>
                <div className="text-sm text-gray-600">User: {r.userId}</div>
                <div className="text-sm text-gray-600">Room: {r.roomId}</div>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={r.status || 'pending'}
                  onChange={(e) => handleStatusChange(r.id, e.target.value)}
                  disabled={updatingId === r.id}
                  className="border border-gray-300 rounded px-3 py-2"
                >
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
                <button onClick={() => navigate(`/rooms`)} className="px-3 py-1 border rounded text-sm">
                  View Rooms
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageReservations
