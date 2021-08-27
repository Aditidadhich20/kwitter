
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAnok34kvkSU28_W-PAP5YIR3md5_5sLd4",
  authDomain: "kwitter-92518.firebaseapp.com",
  projectId: "kwitter-92518",
  storageBucket: "kwitter-92518.appspot.com",
  messagingSenderId: "567174667685",
  appId: "1:567174667685:web:437b281b83f45bf0609c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


