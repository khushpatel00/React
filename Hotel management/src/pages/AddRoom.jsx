import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createRoom } from '../Actions/hotelActions'
 
const CLOUDINARY_CLOUD_NAME = 'dmikd3lt6'
const CLOUDINARY_UPLOAD_PRESET = 'ml_default'

const AddRoom = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    type: 'single',
    price: '',
    capacity: 2,
    description: '',
    features: '',
    available: true,
    imageUrl: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try { 
      const reader = new FileReader()
      reader.onload = (event) => {
        setImagePreview(event.target?.result || '')
      }
      reader.readAsDataURL(file)
 
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Image upload failed. Please check your Cloudinary credentials.')
      }

      const data = await response.json()
      setForm((p) => ({ ...p, imageUrl: data.secure_url }))
      setError('')
    } catch (err) {
      setError(err.message || 'Failed to upload image')
      setImagePreview('')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const roomData = {
        name: form.name,
        type: form.type,
        price: parseFloat(form.price) || 0,
        capacity: parseInt(form.capacity, 10) || 1,
        description: form.description,
        features: form.features.split(',').map((s) => s.trim()).filter(Boolean),
        available: !!form.available,
        imageUrl: form.imageUrl || '',
      }
      await dispatch(createRoom(roomData))
      navigate('/rooms')
    } catch (err) {
      setError(err.message || 'Failed to add room')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Room</h1>
      {error && <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-2 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Room Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="deluxe">Deluxe</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Price</label>
            <input name="price" value={form.price} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" type="number" step="0.01" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Capacity</label>
          <input name="capacity" value={form.capacity} onChange={handleChange} className="w-24 border border-gray-300 rounded px-3 py-2" type="number" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Features (comma separated)</label>
          <input name="features" value={form.features} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Room Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded px-4 py-6 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-neutral-900 file:text-white hover:file:bg-neutral-800 disabled:opacity-50"
            />
            {uploading && <p className="text-sm text-gray-600 mt-2">Uploading image...</p>}
            {form.imageUrl && (
              <div className="mt-3 text-green-600 text-sm">✓ Image uploaded successfully</div>
            )}
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <img src={imagePreview} alt="Preview" className="w-48 h-32 object-cover rounded border border-gray-200" />
            </div>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" rows={4} />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
          <label className="text-sm text-gray-700">Available</label>
        </div>

        <div>
          <button disabled={loading} className="bg-neutral-900 text-white px-4 py-2 rounded">
            {loading ? 'Saving...' : 'Add Room'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRoom
