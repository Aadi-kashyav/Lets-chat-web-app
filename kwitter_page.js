//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBeo0DIkjsB4z6koKCijng58mTdGOiE4kI",
      authDomain: "kwitter-database-49fec.firebaseapp.com",
      databaseURL: "https://kwitter-database-49fec-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-49fec",
      storageBucket: "kwitter-database-49fec.appspot.com",
      messagingSenderId: "671110449308",
      appId: "1:671110449308:web:d7c4b5f3409c3134aa4559"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }