var firebaseConfig = {
    apiKey: "AIzaSyAknmpz_wKfqCrHngUQkKTtvJd5o7N_cxo",
    authDomain: "project-94-a74ed.firebaseapp.com",
    databaseURL: "https://project-94-a74ed-default-rtdb.firebaseio.com",
    projectId: "project-94-a74ed",
    storageBucket: "project-94-a74ed.appspot.com",
    messagingSenderId: "1034419894242",
    appId: "1:1034419894242:web:8c90f65296a1d408c7ebbb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("user_name", user_name);
        window.location="kwitter_room.html";
}