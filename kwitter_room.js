

var firebaseConfig = {
      apiKey: "AIzaSyAtVvb-SNB1Vkuz6DLqkhrXF8wZEwNiymw",
      authDomain: "kwiitter-97bc9.firebaseapp.com",
      databaseURL: "https://kwiitter-97bc9-default-rtdb.firebaseio.com",
      projectId: "kwiitter-97bc9",
      storageBucket: "kwiitter-97bc9.appspot.com",
      messagingSenderId: "255296623236",
      appId: "1:255296623236:web:eb51b90374ecb1c6bf28d1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}