// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfjm7MxeWXB1UFTOhsNm9hzBDvd5-fkjw",
  authDomain: "book-library-management-app.firebaseapp.com",
  projectId: "book-library-management-app",
  storageBucket: "book-library-management-app.firebasestorage.app",
  messagingSenderId: "326156069647",
  appId: "1:326156069647:web:0ece712927d14f17de2c7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;