

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB8U5tIwItwS6-q5GW3We7OMkPz-Xz463Y",
    authDomain: "goolge-auth-69e2f.firebaseapp.com",
    projectId: "goolge-auth-69e2f",
    storageBucket: "goolge-auth-69e2f.firebasestorage.app",
    messagingSenderId: "976983603186",
    appId: "1:976983603186:web:4a4390ce83662c9da39d6b",
    measurementId: "G-06HR53V1Q5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
