// PGMH Engine 

// DOM Variables

const world = document.getElementById("world"); 
const text_box = document.getElementById("text-box");

const choose_username = document.getElementById("choose-username");
const choose_username_form = document.getElementById("choose-username-form");
const choose_username_input = document.getElementById("choose-username-input");

const vhs_sound = document.getElementById("vhs-sound");

const create_home_name = document.getElementById("home-name");

const the_neighborhood_scroller = document.getElementById("the-neighborhood-scroller");

// Storage Slots 

const shook_sub_username = localStorage.getItem("shook_sub_username");

// Engine Functions

function checkIfRegistered () { // Check if user is registered
  if (shook_sub_username === "" || shook_sub_username === null || shook_sub_username === undefined) {
    return false;
  }

  else {
    return true; 
  }
}

function addText (text) { // Adds text to the text box located in the world 
  text_box.innerHTML = text_box.innerHTML + "<span><tt><h4>" + text + "</h4></tt></span>";
}

function addRaw (code) { // Adds raw code to the text box located in the world 
  text_box.innerHTML = text_box.innerHTML + code;
}

// Type text variables 

let speed = 50; // default 
let text = ""; // default 
let i = 0; // default

function typeText () { // Adds text to the text box like a typewriter 
  if (i < text.length) {
    text_box.innerHTML = text_box.innerHTML + text.charAt(i);
    i++;

    setTimeout(typeText, speed);
  }

  else {
    // PASS
  }
}

function calculateTextTime () {
  let calc_speed = 0;

  for (i = 0; i < text.length; i++) {
    calc_speed = calc_speed + speed;
  }

  return calc_speed;
}

// Fade in and fade out divs 

let is_faded = false;

function fadeLoad (div1, div2, time) { // Only use with JQuery!!!
  $(div1).fadeOut(parseInt(time));

  setTimeout(function () {
    $(div2).fadeIn(parseInt(time));
  }, parseInt(time));
}