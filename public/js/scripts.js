
var ngrokUrl = "085eac96"

function lightsOn(){
  $.get("https://"+ngrokUrl+".ngrok.io/on");
}

function lightsOff(){
  $.get("https://"+ngrokUrl+".ngrok.io/off");
}
