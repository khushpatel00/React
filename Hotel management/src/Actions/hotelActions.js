import { roomsAPI, reservationsAPI } from '../Logic/api'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.config'

export const fetchRooms = () => async (dispatch) => {
  dispatch({ type: 'FETCH_ROOMS_REQUEST' })
  try {
    const rooms = await roomsAPI.fetchAll()
    dispatch({
      type: 'FETCH_ROOMS_SUCCESS',
      payload: rooms,
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_ROOMS_FAILURE',
      payload: error.message,
    })
  }
}

export const setSelectedRoom = (room) => ({
  type: 'SET_SELECTED_ROOM',
  payload: room,
})

export const fetchReservations = (userId) => async (dispatch) => {
  dispatch({ type: 'FETCH_RESERVATIONS_REQUEST' })
  try {
    const reservations = await reservationsAPI.fetchByUser(userId)
    dispatch({
      type: 'FETCH_RESERVATIONS_SUCCESS',
      payload: reservations,
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_RESERVATIONS_FAILURE',
      payload: error.message,
    })
  }
}

export const fetchAllReservations = () => async (dispatch) => {
  dispatch({ type: 'FETCH_ALL_RESERVATIONS_REQUEST' })
  try {
    const reservations = await reservationsAPI.fetchAll()
    dispatch({ type: 'FETCH_ALL_RESERVATIONS_SUCCESS', payload: reservations })
  } catch (error) {
    dispatch({ type: 'FETCH_ALL_RESERVATIONS_FAILURE', payload: error.message })
  }
}

export const createReservation = (reservationData) => async (dispatch) => {
  dispatch({ type: 'CREATE_RESERVATION_REQUEST' })
  try {
    const reservation = await reservationsAPI.create(reservationData)
    dispatch({
      type: 'CREATE_RESERVATION_SUCCESS',
      payload: reservation,
    })
    return reservation
  } catch (error) {
    dispatch({
      type: 'CREATE_RESERVATION_FAILURE',
      payload: error.message,
    })
    throw error
  }
}

export const updateReservation = (reservationId, updatedData) => async (
  dispatch
) => {
  dispatch({ type: 'UPDATE_RESERVATION_REQUEST' })
  try {
    const reservation = await reservationsAPI.update(reservationId, updatedData)
    dispatch({
      type: 'UPDATE_RESERVATION_SUCCESS',
      payload: reservation,
    })
    return reservation
  } catch (error) {
    dispatch({
      type: 'UPDATE_RESERVATION_FAILURE',
      payload: error.message,
    })
    throw error
  }
}

export const cancelReservation = (reservationId) => async (dispatch) => {
  dispatch({ type: 'DELETE_RESERVATION_REQUEST' })
  try {
    await reservationsAPI.delete(reservationId)
    dispatch({
      type: 'DELETE_RESERVATION_SUCCESS',
      payload: reservationId,
    })
  } catch (error) {
    dispatch({
      type: 'DELETE_RESERVATION_FAILURE',
      payload: error.message,
    })
    throw error
  }
}

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
})

export const setAuthLoading = (loading) => ({
  type: 'SET_AUTH_LOADING',
  payload: loading,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  payload: sortBy,
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS',
})

export const setUserRole = (role) => ({
  type: 'SET_USER_ROLE',
  payload: role,
})

export const setUserAsAdminAsync = (userId) => async (dispatch) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    if (!userSnap.exists()) {
      await setDoc(userRef, { role: 'admin', createdAt: new Date() })
    } else {
      await updateDoc(userRef, { role: 'admin' })
    }
    dispatch(setUserRole('admin'))
  } catch (error) {
    console.error('Error making user admin:', error)
  }
}

export const getUserRoleAsync = (userId) => async (dispatch) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const role = userSnap.data().role || 'user'
      dispatch(setUserRole(role))
    } else {
      await setDoc(userRef, { role: 'user', createdAt: new Date() })
      dispatch(setUserRole('user'))
    }
  } catch (error) {
    console.error('Error getting user role:', error)
    dispatch(setUserRole('user'))
  }
}

export const createRoom = (roomData) => async (dispatch) => {
  dispatch({ type: 'CREATE_ROOM_REQUEST' })
  try {
    const room = await roomsAPI.create(roomData)
    dispatch({ type: 'CREATE_ROOM_SUCCESS', payload: room })
    return room
  } catch (error) {
    dispatch({ type: 'CREATE_ROOM_FAILURE', payload: error.message })
    throw error
  }
}

export const updateRoom = (roomId, data) => async (dispatch) => {
  dispatch({ type: 'UPDATE_ROOM_REQUEST' })
  try {
    const room = await roomsAPI.update(roomId, data)
    dispatch({ type: 'UPDATE_ROOM_SUCCESS', payload: room })
    return room
  } catch (error) {
    dispatch({ type: 'UPDATE_ROOM_FAILURE', payload: error.message })
    throw error
  }
}

export const deleteRoom = (roomId) => async (dispatch) => {
  dispatch({ type: 'DELETE_ROOM_REQUEST' })
  try {
    await roomsAPI.delete(roomId)
    dispatch({ type: 'DELETE_ROOM_SUCCESS', payload: roomId })
  } catch (error) {
    dispatch({ type: 'DELETE_ROOM_FAILURE', payload: error.message })
    throw error
  }
}
