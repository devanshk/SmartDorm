
var ngrokUrl = "86991697"
var onBtn, offBtn, partyBtn, defaultBtn, smashBtn

/* Modes */
function ModeParty(btn){
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

/*Basic Buttons*/
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
function partyON(){
  $.get("https://"+ngrokUrl+".ngrok.io/partyOn");
}
function partyOFF(){
  $.get("https://"+ngrokUrl+".ngrok.io/partyOff");
}

function mainON(){
  $.get("https://"+ngrokUrl+".ngrok.io/on");
}
function mainOFF(){
  $.get("https://"+ngrokUrl+".ngrok.io/off");
}
