// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSe6m970QpwidnaHj8AHDZDZDd3DXBaI8",
    authDomain: "employeeauth-e94be.firebaseapp.com",
    projectId: "employeeauth-e94be",
    storageBucket: "employeeauth-e94be.appspot.com",
    messagingSenderId: "923368899770",
    appId: "1:923368899770:web:0cefa3fdb5d4a58458ee83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);