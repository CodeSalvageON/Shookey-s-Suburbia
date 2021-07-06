// Load world
// Wait for fetch request to be completed

$("#choose-username").hide();
$("#home").hide();
$("#create-home-div").hide();
$("#result").hide();
$("#the-neighborhood").hide();

$(document).ready(function () {
  text = "Loading Shookey's Suburbia...";
  typeText();

  if (checkIfRegistered() === true) {
    setTimeout(function () {
      $("#text-box").fadeOut(2000);

      setTimeout(function () {
        $("#home").fadeIn(2000);
      }, 2000);
    }, 3000);
  }

  else {
    setTimeout(function () {
      $("#text-box").fadeOut(2000);

      setTimeout(function () {
        $("#choose-username").fadeIn(2000);
      }, 2000);
    }, 3000);
  }
});