const firebaseConfig = {
    apiKey: "AIzaSyCoXzgg0o8J-WBYF2t5y9lIDbRRrtJhLXQ",
    authDomain: "extreme-gecko-273308.firebaseapp.com",
    databaseURL: "https://extreme-gecko-273308-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "extreme-gecko-273308",
    storageBucket: "extreme-gecko-273308.appspot.com",
    messagingSenderId: "656122264813",
    appId: "1:656122264813:web:02e2a72ba3d4653f4960e4",
    measurementId: "G-5W6T01KRVJ"
  };

firebase.initializeApp(firebaseConfig);
var contactFormDb = firebase.database().ref("form");
 document.getElementById("form").addEventListener("submit","submitForm")

 function submitForm(e){
    e.preventDefault();
    
    var email= getElementById("email")
    
    console.log(email);
 }
const getElementById= (id)=>{
return document.getElementById(id).value

};