// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYgsARn6sr13E9xhrtHqq3FPAeliYTd1w",
  authDomain: "proboard-761a7.firebaseapp.com",
  databaseURL: "https://proboard-761a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "proboard-761a7",
  storageBucket: "proboard-761a7.appspot.com",
  messagingSenderId: "585868612166",
  appId: "1:585868612166:web:7fea1d048e1a51b3757047",
  measurementId: "G-VWNTFYKQMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAnalytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const logFBEvent = async (type: string) => {
  if (firebaseAnalytics) {
    logEvent(firebaseAnalytics, 'visitor', {
      visitor_type: type,
    });
  }
  
  
}

export default firebaseAnalytics;