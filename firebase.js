import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA9VwNApcfZ1p-ujq4mgDFi1LM6ozjX3hE",
  authDomain: "fir-user-reg-auth-f6169.firebaseapp.com",
  projectId: "fir-user-reg-auth-f6169",
  storageBucket: "fir-user-reg-auth-f6169.appspot.com",
  messagingSenderId: "705932441094",
  appId: "1:705932441094:web:00bd2d73193022648cf587"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}