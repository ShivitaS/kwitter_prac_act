
const firebaseConfig = {
    apiKey: "AIzaSyAv_tMMFwNYIgc-TdikOOUOZ49Cezmq22Q",
    authDomain: "kwitter2-f932b.firebaseapp.com",
    databaseURL: "https://kwitter2-f932b-default-rtdb.firebaseio.com",
    projectId: "kwitter2-f932b",
    storageBucket: "kwitter2-f932b.appspot.com",
    messagingSenderId: "391939088460",
    appId: "1:391939088460:web:bc12b78278d31242cd94e9"
  };
  

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
        purpose : "adding user"
      });
  }