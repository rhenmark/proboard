// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "proboard-761a7.firebaseapp.com",
  databaseURL: "https://proboard-761a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "proboard-761a7",
  storageBucket: "proboard-761a7.appspot.com",
  messagingSenderId: "585868612166",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: "G-VWNTFYKQMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAnalytics = typeof window !== "undefined" && process.env.NODE_ENV !== "development" ? getAnalytics(app) : null;
export const logFBEvent = async (type: string) => {
  if (firebaseAnalytics) {
    logEvent(firebaseAnalytics, 'visitor', {
      visitor_type: type,
    });
  }
  
  
}

export default firebaseAnalytics;