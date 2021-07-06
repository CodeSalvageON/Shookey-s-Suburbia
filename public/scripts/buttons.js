// For button clicks

let is_clicked = false;

$("#create-home").click(function () {
  vhs_sound.cloneNode(true).play();

  if (is_clicked === true) {
    return false;
  }

  else {
    is_clicked = true;
    $("#home").fadeOut(2000);

    setTimeout(function () {
      $("#create-home-div").fadeIn(2000);
      $("#home-name").fadeIn(2000);

      create_home_name.value = "";
    }, 2000);
  }
});

$("#explore").click(function () {
  vhs_sound.cloneNode(true).play();

  if (is_clicked === true) {
    return false; 
  }

  else {
    is_clicked = true;
    $("#home").fadeOut(2000);

    setTimeout(function () {
      $("#the-neighborhood").fadeIn(2000);
    }, 2000);
  }
});

$("#return-from-create-home").click(function () {
  vhs_sound.cloneNode(true).play();
  is_clicked = false;

  $("#create-home-div").fadeOut(2000);

  setTimeout(function () {
    $("#home").fadeIn(2000);
  }, 2000);
});

$("#return-from-the-neighborhood").click(function () {
  vhs_sound.cloneNode(true).play();
  is_clicked = false; 

  $("#the-neighborhood").fadeOut(2000);

  setTimeout(function () {
    $("#home").fadeIn(2000);
  }, 2000);
});

$("#return-from-result").click(function () {
  vhs_sound.cloneNode(true).play();
  is_clicked = false;

  $("#result").fadeOut(2000);

  setTimeout(function () {
    $("#home").fadeIn(2000);
  }, 2000);
});

$("#explore-result").click(function () {
  vhs_sound.cloneNode(true).play();
  is_clicked = false;

  $("#result").fadeOut(2000);

  setTimeout(function () {
    $("#the-neighborhood").fadeIn(2000);
  }, 2000);
});

$("#discord").click(function () {
  vhs_sound.cloneNode(true).play();
  window.open("https://discord.com/invite/UGq75qVBg2");
});

$("#lore").click(function () {
  vhs_sound.cloneNode(true).play();
  window.open("https://pastebin.com/GgYuYTv4");
});