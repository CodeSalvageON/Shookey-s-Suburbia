// Limit the number of homes created per user each day

const limit_slot = localStorage.getItem("shook_sub_limit");

function checkLimit () {
  if (limit_slot === "" || limit_slot === null || limit_slot === undefined) {
    return true;
  }

  else {
    return false;
  }
}

function setLimit (limit) {
  localStorage.setItem("shook_sub_limit", "limit");
}

function removeLimit (limit) {
  localStorage.setItem("shook_sub_limit", "");
}