import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration




  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth=getAuth(app);
  auth.languageCode='en';
  const provider = new GoogleAuthProvider();

  const googleLogin=document.getElementById("google-login-btn");
  googleLogin.addEventListener("click",function(){
   signInWithPopup(auth,provider)
   .then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="../logged.html";
   })
   .catch((error)=>{
    const errorCode = error.code;
    const errorMess=error.message;

   })
  })

