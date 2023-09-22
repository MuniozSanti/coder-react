import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIRESTORE_API_KEY,
  authDomain: import.meta.env.FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIRESTORE_STORAGE_BUCKET_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIRESTORE_APP_ID
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
