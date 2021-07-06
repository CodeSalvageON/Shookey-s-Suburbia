// Submit forms and such

$("#choose-username-form").submit(function () {
  event.preventDefault();

  localStorage.setItem("shook_sub_username", choose_username_input.value);
  $("#choose-username-input").hide();
  
  $("#choose-username").fadeOut(2000);

  setTimeout(function () {
    $("#home").fadeIn(2000);
  }, 2000);
});

$("#create-home-form").submit(function () {
  event.preventDefault(); 
  $("#home-name").hide(); 

  fetch ("/create-home", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      user : shook_sub_username,
      name : create_home_name.value
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    throw error;
  });

  $('#create-home-div').fadeOut(2000);

  setTimeout(function () {
    $("#result").fadeIn(2000);
    the_neighborhood_scroller.src = "https://shookeys-suburbia.codesalvageon.repl.co/homes"
  }, 2000);
});