import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRooms, setSortBy, setFilter } from '../Actions/hotelActions'
import RoomDetails from './RoomDetails'

const RoomList = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.rooms)
  const { sortBy, filters } = useSelector((state) => state.filters)
  const [selectedRoom, setSelectedRoom] = useState(null)

  useEffect(() => {
    dispatch(fetchRooms())
  }, [dispatch])

  const handleSort = (value) => {
    dispatch(setSortBy(value))
  }

  const handleFilterChange = (filterKey, value) => {
    dispatch(setFilter({ [filterKey]: value }))
  }

  const getSortedRooms = () => {
    let sorted = [...items]

    if (filters.roomType !== 'all') {
      sorted = sorted.filter((room) => room.type === filters.roomType)
    }

    if (sortBy === 'availability') {
      sorted = sorted.sort((a, b) => b.available - a.available)
    } else if (sortBy === 'price-low') {
      sorted = sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      sorted = sorted.sort((a, b) => b.price - a.price)
    }

    return sorted
  }

  const sortedRooms = getSortedRooms()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-gray-600 font-medium">Loading rooms...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded">
        Error loading rooms: {error}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
            >
              <option value="availability">Availability</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Room Type
            </label>
            <select
              value={filters.roomType}
              onChange={(e) => handleFilterChange('roomType', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-500"
            >
              <option value="all">All Types</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="deluxe">Deluxe</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Max Price: ${filters.priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              value={filters.priceRange[1]}
              onChange={(e) =>
                handleFilterChange('priceRange', [0, parseInt(e.target.value)])
              }
              className="w-full"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          {sortedRooms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No rooms found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedRooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    {room.imageUrl ?
                      <img className='h-full w-full object-cover' src={room.imageUrl} alt="" />
                      :
                      <span className="text-gray-500">Room Image</span>
                    }
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {room.name || `Room ${room.id}`}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{room.type}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        ${room.price}/night
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${room.available
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                          }`}
                      >
                        {room.available ? 'Available' : 'Booked'}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedRoom(room)
                      }}
                      disabled={!room.available}
                      className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:bg-gray-400 text-white py-2 rounded transition font-medium"
                    >
                      {room.available ? 'View Details' : 'Not Available'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedRoom && (
        <RoomDetails
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  )
}

export default RoomList
