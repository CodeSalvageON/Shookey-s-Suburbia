// Update the neighborhood 

function update () {
  fetch ("/homes")
  .then(response => response.text())
  .then(data => {
    the_neighborhood_scroller.innerHTML = the_neighborhood_scroller.innerHTML + data;
  })
  .catch(error => {
    throw error;
  });
}

update();