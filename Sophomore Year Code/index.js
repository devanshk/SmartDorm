var express = require('express');
var app = express();
var firebase = require("firebase");
var request = require("request");

var ngrokUrl = "20cbcb01"

app.set('port', (process.env.PORT || 5241));

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

app.get('/modeparty', function(request, response){
  console.log('modeparty')
  partyON();
  response.end('did something')
});

app.get('/modedefault', function(request, response){
  console.log('modedefault')
  partyOFF();
  mainON();
  response.end('did something')
});

app.get('/modesmash', function(request, response){
  console.log('modesmash')
  partyOFF();
  mainOFF();
  response.end('did something')
});

app.get('/modealloff', function(request, response){
  console.log('modealloff')
  partyOFF();
  mainOFF();
  response.end('did something')
});

app.get('/bedroomon', function(request, response){
  console.log('bedroomon')
  bedOn();
  response.end('did something')
});

app.get('/bedroomoff', function(request, response){
  console.log('bedroomoff')
  bedOff();
  response.end('did something')
});

app.get('/lightson', function(request, response){
  console.log('lightson')
  mainON();
  response.end('did something')
});

app.get('/lightsoff', function(request, response){
  console.log('lightsoff')
  mainOFF();
  response.end('did something')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function hitPath(pth){
  request("https://"+ngrokUrl+".ngrok.io/"+pth, function(error, response, body) {
    console.log(body);
  });
}

function hitPathBKUP(pth){
    var options = {
      host: 'https://'+ngrokUrl+'.ngrok.io',
      path: '/'+pth
    };

    callback = function(response) {
      var str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        console.log(str);
      });
    }

    console.log('options are: '+options.host+' and '+options.path)

    http.request(options, callback).end();
}

function partyON(){
  hitPath('partyOn');
}
function partyOFF(){
  hitPath('partyOff');
}

function bedOn(){
  hitPath('bedroomOn');
}
function bedOff(){
  hitPath('bedroomOff');
}

function mainON(){
  hitPath('on');
}
function mainOFF(){
  hitPath('off');
}
