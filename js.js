

// Nedräkningen vid sidan av sidan
var countDownDate = new Date("feb 25, 2020 00:00:").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("dema").innerHTML = days + " dagar kvar till julafton";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dema").innerHTML = "God jul!";
  }
}, 1000);


// glödlampan
<button onclick = "document.getElementById('myImage').src='pic_bulbon.gif'"> Turn on the light </button>

<button onclick = "document.getElementById('myImage').src='pic_bulboff.gif'"> Turn off the light </button>
