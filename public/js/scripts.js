
var ngrokUrl = "606f4c52"
var onBtn, offBtn, partyBtn, defaultBtn, smashBtn, bedOffBtn, bedOnBtn, killAudioBtn, allOffBtn

/* Modes */
function ModeParty(btn){
  playGhostsNStuff();
  mainOFF();
  partyON();

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
  $.get("https://"+ngrokUrl+".ngrok.io/killAudio");
}
function playGhostsNStuff(){
  $.get("https://"+ngrokUrl+".ngrok.io/ghostsON");
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
