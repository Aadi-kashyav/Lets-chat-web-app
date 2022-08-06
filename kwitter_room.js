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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
