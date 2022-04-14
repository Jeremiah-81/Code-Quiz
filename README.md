# Code-Quiz
var watcher = document.querySelector(".watch");
var kalEl = document.getElementById("kal")
var timeLeft = 60;

function startTime() {
   var timerInterval = setInterval(function() {
      timeLeft--;
      watcher.textContent = timeLeft + "remaining seconds.";

      if (timeLeft === 0) {
         clearInterval(timerInterval);
         gameUpdate();
      }
   }, 1000);
 }
 startTime();















## Tech/Framework

## Credit
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_font-weight


https://www.geeksforgeeks.org/how-to-add-bootstrap-in-a-project/
https://getbootstrap.com/






https://www.w3schools.com/css/css_colors_rgb.asp
https://getbootstrap.com/docs/5.1/customize/color/
https://jeremiah-81.github.io/password-generator/
