
var ngrokUrl = "bbecd0d8"

function lightsOn(){
  $.get("https://"+ngrokUrl+".ngrok.io/on");
}

function lightsOff(){
  $.get("https://"+ngrokUrl+".ngrok.io/off");
}
