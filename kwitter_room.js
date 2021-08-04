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

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML=row;
   //End code
   });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}