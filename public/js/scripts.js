
var ngrokUrl = "887cc37e"
var onBtn, offBtn, partyBtn, defaultBtn, smashBtn, bedOffBtn, bedOnBtn, killAudioBtn, allOffBtn

/* UI Javascript */

var recognition;
var final_transcript = "";

if (!('webkitSpeechRecognition' in window)) {
  upgrade(); }
else {
  recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;

  recognition.onresult = function(event) {
    var interim_transcript = '';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    $("#songInput").val(final_transcript);
    final_transcript = "";
  };
}

function voiceRecognition(){
  recognition.start();
  console.log("voice recognizing.");
}

function toggleSongUI(){
    var opac = $("#black_cover").css("opacity");
    if (opac == 0){
        $("#black_cover").css("visibility", "visible");
        $("#black_cover").css("opacity", 0.8);
        $("#songSection").css("visibility", "visible");
        $("#songSection").css("opacity", "1");
        $("#songSection").css("transform","translateY(-50%) translateX(-50%)");
    }
    else{
        recognition.stop();
        $("#black_cover").css("opacity", "0");
        $("#songSection").css("opacity", "0");
        $("#songSection").css("visibility", "visible");
        $("#songSection").css("transform","translateY(-65%) translateX(-50%)");

        setTimeout('$("#black_cover").css("visibility", "hidden"); $("#songSection").css("visibility", "hidden");', 200);
    }
}

function changeSong(){
  var songIn = $("#songInput").val();
  songIn = songIn.replace(" ", "%20");
  var songUrl = "/audio/"+songIn;
  $.post(songUrl, {});
  toggleSongUI();
  $("#songInput").val("");
}

/* Modes */
function ModeParty(btn){
  mainOFF();
  partyON();

  $.post("/audio/Shake%20That%20Eminem", {});
  console.log("partying.");
  clearTimeout($.data(this, 'modePartyTimer'));
  partyBtn = btn;
  $(partyBtn).addClass("active");
  $.data(this, 'modePartyTimer', setTimeout(function() {
    $(partyBtn).removeClass("active");
  }, 300));
}
function ModeDefault(btn){
  killAudio();
  partyOFF();
  mainON();

  clearTimeout($.data(this, 'modeDefaultTimer'));
  defaultBtn = btn;
  $(defaultBtn).addClass("active");
  $.data(this, 'modeDefaultTimer', setTimeout(function() {
    $(defaultBtn).removeClass("active");
  }, 300));
}
function ModeSmash(btn){
  partyOFF();
  mainOFF();

  clearTimeout($.data(this, 'modeSmashTimer'));
  smashBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'modeSmashTimer', setTimeout(function() {
    $(smashBtn).removeClass("active");
  }, 300));
}

function ModeAllOff(btn){
  partyOFF();
  mainOFF();
  killAudio();

  clearTimeout($.data(this, 'allOffTimer'));
  allOffBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'allOffTimer', setTimeout(function() {
    $(allOffBtn).removeClass("active");
  }, 300));
}

/*Basic Buttons*/

function stopAudio(btn){
  killAudio();

  clearTimeout($.data(this, 'killAudioBtnTimer'));
  killAudioBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'killAudioBtnTimer', setTimeout(function() {
    $(killAudioBtn).removeClass("active");
  }, 300));
}

function bedroomOn(btn){
  bedOn();

  clearTimeout($.data(this, 'bedroomOnTimer'));
  bedOnBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'bedroomOnTimer', setTimeout(function() {
    $(bedOnBtn).removeClass("active");
  }, 300));
}
function bedroomOff(btn){
  bedOff();

  clearTimeout($.data(this, 'bedroomOffTimer'));
  bedOffBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'bedroomOffTimer', setTimeout(function() {
    $(bedOffBtn).removeClass("active");
  }, 300));
}

function lightsOn(btn){
  mainON();

  clearTimeout($.data(this, 'onBtnTimer'));
  onBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'onBtnTimer', setTimeout(function() {
    $(onBtn).removeClass("active");
  }, 300));
}

function lightsOff(btn){
  mainOFF();

  clearTimeout($.data(this, 'offBtnTimer'));
  offBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'offBtnTimer', setTimeout(function() {
    $(offBtn).removeClass("active");
  }, 300));
}

/* Building Blocks */

function killAudio(){
  $.post("/audio/killAudio", {});
}
function partyON(){
  $.get("https://"+ngrokUrl+".ngrok.io/partyOn");
}
function partyOFF(){
  $.get("https://"+ngrokUrl+".ngrok.io/partyOff");
}

function bedOn(){
  $.get("https://"+ngrokUrl+".ngrok.io/bedroomOn");
}
function bedOff(){
  $.get("https://"+ngrokUrl+".ngrok.io/bedroomOff");
}

function mainON(){
  $.get("https://"+ngrokUrl+".ngrok.io/on");
}
function mainOFF(){
  $.get("https://"+ngrokUrl+".ngrok.io/off");
}
