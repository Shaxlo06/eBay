import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqhBMq4-E74QMZKUVf3LwSS8Qvy64DJTQ",
  authDomain: "ebay-com-56e30.firebaseapp.com",
  projectId: "ebay-com-56e30",
  storageBucket: "ebay-com-56e30.appspot.com",
  messagingSenderId: "192169602468",
  appId: "1:192169602468:web:efb9d273aa37c79985e531",
  measurementId: "G-7TKV9ELN9K"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

