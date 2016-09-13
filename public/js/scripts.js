
var ngrokUrl = "085eac96"
var onBtn, offBtn

function lightsOn(btn){
  // $.get("https://"+ngrokUrl+".ngrok.io/on");
  clearTimeout($.data(this, 'onBtnTimer'));
  onBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'onBtnTimer', setTimeout(function() {
    $(onBtn).removeClass("active");
  }, 300));
}

function lightsOff(btn){
  // $.get("https://"+ngrokUrl+".ngrok.io/off");
  clearTimeout($.data(this, 'offBtnTimer'));
  offBtn = btn;
  $(btn).addClass("active");
  $.data(this, 'offBtnTimer', setTimeout(function() {
    $(offBtn).removeClass("active");
  }, 300));
}
