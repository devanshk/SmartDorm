var express = require('express');
var app = express();
var firebase = require("firebase");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQt1ns22Kk2hb0QedU0h1Q6rRMv8wFGK0",
  authDomain: "spotifytest-1790e.firebaseapp.com",
  databaseURL: "https://spotifytest-1790e.firebaseio.com",
  storageBucket: "spotifytest-1790e.appspot.com",
  messagingSenderId: "919353653173"
};
firebase.initializeApp(config);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.post('/audio/:songRequest', function(request, response){
  var song = request.params.songRequest;
  console.log(song);
  firebase.database().ref('query').set(song);
  response.send("good.");
})

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
