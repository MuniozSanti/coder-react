import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB93t14XvP9GwheG26Lhc76fC0OGmLWM-o",
  authDomain: "coder-react-610e0.firebaseapp.com",
  projectId: "coder-react-610e0",
  storageBucket: "coder-react-610e0.appspot.com",
  messagingSenderId: "106614243057",
  appId: "1:106614243057:web:736efe2d493279e6d13350"
};

// inicializar firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
