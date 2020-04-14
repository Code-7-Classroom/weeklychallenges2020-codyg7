// Form Validation
const name = document.getElementById("name"); //grabbing form attribute with id of name
const form = document.getElementById("form"); //grabbing form attribute with id of form
const email = document.getElementById("email"); //grabbing form attribute with id of email
const error = document.getElementById("error"); //grabbing div attribute with id of error

form.addEventListener("submit", function(e) {
  //prevents page from submitting automatically
  let messages = []; //all error messages
  if (name.value === "" || name.value == null) {
    //users did not pass in any information
    messages.push("name is required");
  }

  if (email.value === "" || name.value == null) {
    messages.push("email is required");
  }

  if (messages.length > 0) {
    //if there is an error keep page from submitting
    error.innerText = messages.join(", "); //setting messages to error and joining them all by adding comma to break up each message
  }
  e.preventDefault();
});
