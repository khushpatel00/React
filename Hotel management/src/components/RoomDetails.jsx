import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RoomDetails = ({ room, onClose }) => {
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.auth)

    const handleReserve = () => {
        if (!isAuthenticated) {
            navigate('/login')
            return
        }
        navigate('/reservation', { state: { room } })
    }

    return (
        <div className="fixed inset-0 bg-white/50 drop-shadow-2xl drop-shadow-black  flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center p-5 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {room.name || `Room ${room.id}`}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 font-bold text-2xl w-8 h-8 flex items-center justify-center"
                    >
                        ×
                    </button>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-sm text-gray-600 font-medium">Room Type</p>
                            <p className="text-lg text-gray-900 font-semibold">{room.type}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 font-medium">Price per Night</p>
                            <p className="text-lg text-gray-900 font-semibold">${room.price}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 font-medium">Capacity</p>
                            <p className="text-lg text-gray-900 font-semibold">
                                {room.capacity || 2} guests
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 font-medium">Status</p>
                            <p
                                className={`text-lg font-semibold ${room.available ? 'text-emerald-700' : 'text-rose-700'
                                    }`}
                            >
                                {room.available ? 'Available' : 'Booked'}
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-600 font-medium mb-2">Amenities</p>
                        <div className="flex flex-wrap gap-2">
                            {room.features &&
                                room.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                                    >
                                        {feature}
                                    </span>
                                ))}
                        </div>
                    </div>

                    {room.description && (
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 font-medium mb-2">Description</p>
                            <p className="text-gray-700">{room.description}</p>
                        </div>
                    )}
                    <div className="flex gap-3">
                        <button
                            onClick={handleReserve}
                            disabled={!room.available}
                            className="flex-1 bg-neutral-900 hover:bg-neutral-800 disabled:bg-gray-400 text-white font-medium py-2 rounded transition"
                        >
                            {room.available ? 'Reserve Now' : 'Not Available'}
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 rounded transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails
