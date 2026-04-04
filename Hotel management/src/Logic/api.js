import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
} from 'firebase/firestore'
import { db } from '../firebase/firebase.config'

export const roomsAPI = {
  fetchAll: async () => {
    try {
      const roomsRef = collection(db, 'rooms')
      const q = query(roomsRef)
      const snapshot = await getDocs(q)
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return rooms
    } catch (error) {
      console.error('Error fetching rooms from Firestore:', error)
      return []
    }
  },

  fetchById: async (id) => {
    try {
      const docRef = doc(db, 'rooms', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      }
      return null
    } catch (error) {
      console.error('Error fetching room from Firestore:', error)
      return null
    }
  },
  create: async (data) => {
    try {
      const roomsRef = collection(db, 'rooms')
      const docRef = await addDoc(roomsRef, {
        ...data,
        createdAt: new Date().toISOString(),
      })
      return { id: docRef.id, ...data, createdAt: new Date().toISOString() }
    } catch (error) {
      console.error('Error creating room in Firestore:', error)
      throw error
    }
  },
  update: async (id, data) => {
    try {
      const docRef = doc(db, 'rooms', id)
      await updateDoc(docRef, { ...data, updatedAt: new Date().toISOString() })
      return { id, ...data, updatedAt: new Date().toISOString() }
    } catch (error) {
      console.error('Error updating room in Firestore:', error)
      throw error
    }
  },
  delete: async (id) => {
    try {
      const docRef = doc(db, 'rooms', id)
      await deleteDoc(docRef)
      return id
    } catch (error) {
      console.error('Error deleting room from Firestore:', error)
      throw error
    }
  },
}

export const reservationsAPI = {
  fetchByUser: async (userId) => {
    try {
      const reservationsRef = collection(db, 'reservations')
      const q = query(
        reservationsRef,
        where('userId', '==', userId)
      )
      const snapshot = await getDocs(q)
      const reservations = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return reservations
    } catch (error) {
      console.error('Error fetching reservations from Firestore:', error)
      return []
    }
  },

  fetchAll: async () => {
    try {
      const reservationsRef = collection(db, 'reservations')
      const q = query(reservationsRef, orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      const reservations = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      return reservations
    } catch (error) {
      console.error('Error fetching all reservations from Firestore:', error)
      return []
    }
  },

  create: async (data) => {
    try {
      const reservationsRef = collection(db, 'reservations')
      const docRef = await addDoc(reservationsRef, {
        ...data,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      })
      return {
        id: docRef.id,
        ...data,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      }
    } catch (error) {
      console.error('Error creating reservation in Firestore:', error)
      throw error
    }
  },

  update: async (id, data) => {
    try {
      const docRef = doc(db, 'reservations', id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString(),
      })
      return {
        id,
        ...data,
        updatedAt: new Date().toISOString(),
      }
    } catch (error) {
      console.error('Error updating reservation in Firestore:', error)
      throw error
    }
  },

  delete: async (id) => {
    try {
      const docRef = doc(db, 'reservations', id)
      await deleteDoc(docRef)
      return id
    } catch (error) {
      console.error('Error deleting reservation from Firestore:', error)
      throw error
    }
  },
}
