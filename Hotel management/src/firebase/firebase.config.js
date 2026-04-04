// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOxH1_LRgEb-Bqiig2PnWb5roROv7n8gI",
  authDomain: "hotel-management-34dcf.firebaseapp.com",
  projectId: "hotel-management-34dcf",
  storageBucket: "hotel-management-34dcf.firebasestorage.app",
  messagingSenderId: "26235413928",
  appId: "1:26235413928:web:faeae1d151371bdbe5699d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app
